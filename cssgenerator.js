let style = () => {
  let breakpoints = ['s', 'm', 'l']
  let columns = process.env.columns || 16
  let rows = process.env.rows || 16

  if (typeof process.env.breakpoints === 'string') {
    breakpoints = process.env.breakpoints.split(',')
  }
  /**
   * host breakpoint
   */
  let host = (name, amount) => {
    let result = ``
    breakpoints.forEach((breakpoint) => {
      result += `  :host([size="${breakpoint}"]){
      grid-template-columns: repeat(var(--grid-columns-${breakpoint}, var(--grid-columns, auto-fill)), 1fr);
      grid-template-rows: repeat(var(--grid-rows-${breakpoint}, var(--grid-rows, none)), 1fr);
    }\n`
    })
    return result
  }
  /**
   * define columns & rows with NO units
   */
  let noUnit = (name, amount) => {
    let result = ``
    for (let i = 1; i <= amount; i++) {
      result += `::slotted([${name}s~="${i}"]){ grid-${name}-end: span ${i}; }\n`
      result += `::slotted([start-${name}~="${i}"]){ grid-${name}-start: ${i}; }\n`
    }
    return result
  }

  /**
   * define columns & rows with units
   */
  let withUnit = (name, amount) => {
    let result = ``
    breakpoints.forEach((breakpoint, key) => {
      result += `:host([size="${breakpoint}"]) ::slotted([start-${name}~="0${breakpoint}"]){ grid-${name}-start: auto; }\n`
      for (let i = 1; i <= amount; i++) {
        for (let c = key; c < breakpoints.length; c++) {
          result += `:host([size="${breakpoints[c]}"]) ::slotted([${name}s~="${i}${breakpoint}"]), `
        }
        result = result.substr(0, result.length - 2) + `{ grid-${name}-end: span ${i}; }\n`
        for (let c = key; c < breakpoints.length; c++) {
          result += `:host([size="${breakpoints[c]}"]) ::slotted([start-${name}~="${i}${breakpoint}"]), `
        }
        result = result.substr(0, result.length - 2) + `{ grid-${name}-start: ${i}; }\n`
      }
    })
    return result
  }

  /**
   * return css
   */
  return `
  <style>
  :host{
    display: grid;
    width: 100%;
    grid-template-columns: repeat(var(--grid-columns, auto-fill), 1fr);
    grid-template-rows: repeat(var(--grid-rows, none), 1fr);
    grid-gap: var(--grid-gutter, 0);
    grid-row-gap: var(--grid-row-gutter, var(--grid-gutter, 0));
  }
${host()}
  :host([autoflow]){
    grid-auto-flow: row dense;
  }
  :host([autoflow=column]){
    grid-auto-flow: column dense;
  }
  // columns no unit
  ${noUnit('column', columns)}
  // rows no unit
  ${noUnit('row', rows)}
  // columns with unit
  ${withUnit('column', columns)}
  // rowss with unit
  ${withUnit('row', rows)}
  </style>`
}
console.log('let style = \`' + `${style()}` + '\`')
