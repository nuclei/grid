let style = () => {
  let breakpoints = ['s', 'm', 'l']
  let columns = process.env.columns || 16
  let rows = process.env.rows || 16

  if (typeof process.env.breakpoints === 'string') {
    breakpoints = process.env.breakpoints.split(',')
  }

  let host = ``
  breakpoints.forEach((breakpoint) => {
    host += `  :host([size="${breakpoint}"]){
    grid-template-columns: repeat(var(--grid-columns-${breakpoint}, var(--grid-columns, auto-fill)), 1fr);
    grid-template-rows: repeat(var(--grid-rows-${breakpoint}, var(--grid-rows, none)), 1fr);
  }\n`
  })

  let columnsStart = `  ::slotted([start-column~="0"])`
  let rowsStart = `  ::slotted([start-row~="0"])`
  let startPrev = []
  breakpoints.forEach((thisBreakpoint) => {
    startPrev.push(thisBreakpoint)
    startPrev.forEach((breakpoint) => {
      columnsStart += `, :host([size="${thisBreakpoint}"])${thisBreakpoint === breakpoint ? `:host([size="${thisBreakpoint}"])` : ''} ::slotted([start-column~="0${breakpoint}"])`
      rowsStart += `, :host([size="${thisBreakpoint}"])${thisBreakpoint === breakpoint ? `:host([size="${thisBreakpoint}"])` : ''} ::slotted([start-row~="0${breakpoint}"])`
    })
  })
  columnsStart += `{ grid-column-start: auto; }\n`
  rowsStart += `{ grid-row-start: auto; }\n`

  let columnsStyle = ``
  for (let i = 1; i <= columns; i++) {
    let column = `::slotted([columns~="${i}"])`
    let columnStart = `::slotted([start-column~="${i}"])`
    let prev = []
    breakpoints.forEach((thisBreakpoint) => {
      prev.push(thisBreakpoint)
      prev.forEach((breakpoint) => {
        column += `, :host([size="${thisBreakpoint}"])${thisBreakpoint === breakpoint ? `:host([size="${thisBreakpoint}"])` : ''} ::slotted([columns~="${i}${breakpoint}"])`
        columnStart += `, :host([size="${thisBreakpoint}"])${thisBreakpoint === breakpoint ? `:host([size="${thisBreakpoint}"])` : ''} ::slotted([start-column~="${i}${breakpoint}"])`
      })
    })
    columnsStyle += `  ${column}{ grid-column-end: span ${i}; }\n`
    columnsStart += `  ${columnStart}{ grid-column-start: ${i}; }\n`
  }

  let rowsStyle = ``
  for (let i = 1; i <= rows; i++) {
    let row = `::slotted([rows~="${i}"])`
    let rowStart = `::slotted([start-row~="${i}"])`
    let prev = []
    breakpoints.forEach((thisBreakpoint) => {
      prev.push(thisBreakpoint)
      prev.forEach((breakpoint) => {
        row += `, :host([size="${thisBreakpoint}"])${thisBreakpoint === breakpoint ? `:host([size="${thisBreakpoint}"])` : ''} ::slotted([rows~="${i}${breakpoint}"])`
        rowStart += `, :host([size="${thisBreakpoint}"])${thisBreakpoint === breakpoint ? `:host([size="${thisBreakpoint}"])` : ''} ::slotted([start-row~="${i}${breakpoint}"])`
      })
    })
    rowsStyle += `  ${row}{ grid-row-end: span ${i}; }\n`
    rowsStart += `  ${rowStart}{ grid-row-start: ${i}; }\n`
  }

  return `
  <style>
  :host{
    display: grid;
    grid-template-columns: repeat(var(--grid-columns, auto-fill), 1fr);
    grid-template-rows: repeat(var(--grid-rows, none), 1fr);
    grid-gap: var(--grid-gutter, 0);
    grid-row-gap: var(--grid-row-gutter, var(--grid-gutter, 0));
  }
${host}
  :host([autoflow]){
    grid-auto-flow: row dense;
  }
  :host([autoflow=column]){
    grid-auto-flow: column dense;
  }
${columnsStyle}
${rowsStyle}
${columnsStart}
${rowsStart}
  </style>`
}
console.log('let style = \`' + `${style()}` + '\`')
