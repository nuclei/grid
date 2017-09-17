export let style = `
<style>
:host{
  display: grid;
  grid-template-columns: repeat(var(--grid-columns, auto-fill), 1fr);
  grid-template-rows: var(--grid-rows, none);
  grid-gap: var(--grid-gutter, 0);
  grid-row-gap: var(--grid-row-gutter, var(--grid-gutter, 0));
}
:host([autoflow]){
  grid-auto-flow: row dense;
}
:host([autoflow=column]){
  grid-auto-flow: column dense;
}
::slotted([column~="1"]), :host([size="xs"]) ::slotted([column~="1xs"]), :host([size="s"]) ::slotted([column~="1s"]), :host([size="m"]) ::slotted([column~="1m"]), :host([size="l"]) ::slotted([column~="1l"]), :host([size="xl"]) ::slotted([column~="1xl"]), :host([size="xxl"]) ::slotted([column~="1xxl"]){ grid-column-end: span 1; }
::slotted([column~="2"]), :host([size="xs"]) ::slotted([column~="2xs"]), :host([size="s"]) ::slotted([column~="2s"]), :host([size="m"]) ::slotted([column~="2m"]), :host([size="l"]) ::slotted([column~="2l"]), :host([size="xl"]) ::slotted([column~="2xl"]), :host([size="xxl"]) ::slotted([column~="2xxl"]){ grid-column-end: span 2; }
::slotted([column~="3"]), :host([size="xs"]) ::slotted([column~="3xs"]), :host([size="s"]) ::slotted([column~="3s"]), :host([size="m"]) ::slotted([column~="3m"]), :host([size="l"]) ::slotted([column~="3l"]), :host([size="xl"]) ::slotted([column~="3xl"]), :host([size="xxl"]) ::slotted([column~="3xxl"]){ grid-column-end: span 3; }
::slotted([column~="4"]), :host([size="xs"]) ::slotted([column~="4xs"]), :host([size="s"]) ::slotted([column~="4s"]), :host([size="m"]) ::slotted([column~="4m"]), :host([size="l"]) ::slotted([column~="4l"]), :host([size="xl"]) ::slotted([column~="4xl"]), :host([size="xxl"]) ::slotted([column~="4xxl"]){ grid-column-end: span 4; }
::slotted([column~="5"]), :host([size="xs"]) ::slotted([column~="5xs"]), :host([size="s"]) ::slotted([column~="5s"]), :host([size="m"]) ::slotted([column~="5m"]), :host([size="l"]) ::slotted([column~="5l"]), :host([size="xl"]) ::slotted([column~="5xl"]), :host([size="xxl"]) ::slotted([column~="5xxl"]){ grid-column-end: span 5; }
::slotted([column~="6"]), :host([size="xs"]) ::slotted([column~="6xs"]), :host([size="s"]) ::slotted([column~="6s"]), :host([size="m"]) ::slotted([column~="6m"]), :host([size="l"]) ::slotted([column~="6l"]), :host([size="xl"]) ::slotted([column~="6xl"]), :host([size="xxl"]) ::slotted([column~="6xxl"]){ grid-column-end: span 6; }
::slotted([column~="7"]), :host([size="xs"]) ::slotted([column~="7xs"]), :host([size="s"]) ::slotted([column~="7s"]), :host([size="m"]) ::slotted([column~="7m"]), :host([size="l"]) ::slotted([column~="7l"]), :host([size="xl"]) ::slotted([column~="7xl"]), :host([size="xxl"]) ::slotted([column~="7xxl"]){ grid-column-end: span 7; }
::slotted([column~="8"]), :host([size="xs"]) ::slotted([column~="8xs"]), :host([size="s"]) ::slotted([column~="8s"]), :host([size="m"]) ::slotted([column~="8m"]), :host([size="l"]) ::slotted([column~="8l"]), :host([size="xl"]) ::slotted([column~="8xl"]), :host([size="xxl"]) ::slotted([column~="8xxl"]){ grid-column-end: span 8; }
::slotted([column~="9"]), :host([size="xs"]) ::slotted([column~="9xs"]), :host([size="s"]) ::slotted([column~="9s"]), :host([size="m"]) ::slotted([column~="9m"]), :host([size="l"]) ::slotted([column~="9l"]), :host([size="xl"]) ::slotted([column~="9xl"]), :host([size="xxl"]) ::slotted([column~="9xxl"]){ grid-column-end: span 9; }
::slotted([column~="10"]), :host([size="xs"]) ::slotted([column~="10xs"]), :host([size="s"]) ::slotted([column~="10s"]), :host([size="m"]) ::slotted([column~="10m"]), :host([size="l"]) ::slotted([column~="10l"]), :host([size="xl"]) ::slotted([column~="10xl"]), :host([size="xxl"]) ::slotted([column~="10xxl"]){ grid-column-end: span 10; }
::slotted([column~="11"]), :host([size="xs"]) ::slotted([column~="11xs"]), :host([size="s"]) ::slotted([column~="11s"]), :host([size="m"]) ::slotted([column~="11m"]), :host([size="l"]) ::slotted([column~="11l"]), :host([size="xl"]) ::slotted([column~="11xl"]), :host([size="xxl"]) ::slotted([column~="11xxl"]){ grid-column-end: span 11; }
::slotted([column~="12"]), :host([size="xs"]) ::slotted([column~="12xs"]), :host([size="s"]) ::slotted([column~="12s"]), :host([size="m"]) ::slotted([column~="12m"]), :host([size="l"]) ::slotted([column~="12l"]), :host([size="xl"]) ::slotted([column~="12xl"]), :host([size="xxl"]) ::slotted([column~="12xxl"]){ grid-column-end: span 12; }
::slotted([column~="13"]), :host([size="xs"]) ::slotted([column~="13xs"]), :host([size="s"]) ::slotted([column~="13s"]), :host([size="m"]) ::slotted([column~="13m"]), :host([size="l"]) ::slotted([column~="13l"]), :host([size="xl"]) ::slotted([column~="13xl"]), :host([size="xxl"]) ::slotted([column~="13xxl"]){ grid-column-end: span 13; }
::slotted([column~="14"]), :host([size="xs"]) ::slotted([column~="14xs"]), :host([size="s"]) ::slotted([column~="14s"]), :host([size="m"]) ::slotted([column~="14m"]), :host([size="l"]) ::slotted([column~="14l"]), :host([size="xl"]) ::slotted([column~="14xl"]), :host([size="xxl"]) ::slotted([column~="14xxl"]){ grid-column-end: span 14; }
::slotted([column~="15"]), :host([size="xs"]) ::slotted([column~="15xs"]), :host([size="s"]) ::slotted([column~="15s"]), :host([size="m"]) ::slotted([column~="15m"]), :host([size="l"]) ::slotted([column~="15l"]), :host([size="xl"]) ::slotted([column~="15xl"]), :host([size="xxl"]) ::slotted([column~="15xxl"]){ grid-column-end: span 15; }
::slotted([column~="16"]), :host([size="xs"]) ::slotted([column~="16xs"]), :host([size="s"]) ::slotted([column~="16s"]), :host([size="m"]) ::slotted([column~="16m"]), :host([size="l"]) ::slotted([column~="16l"]), :host([size="xl"]) ::slotted([column~="16xl"]), :host([size="xxl"]) ::slotted([column~="16xxl"]){ grid-column-end: span 16; }
::slotted([column~="17"]), :host([size="xs"]) ::slotted([column~="17xs"]), :host([size="s"]) ::slotted([column~="17s"]), :host([size="m"]) ::slotted([column~="17m"]), :host([size="l"]) ::slotted([column~="17l"]), :host([size="xl"]) ::slotted([column~="17xl"]), :host([size="xxl"]) ::slotted([column~="17xxl"]){ grid-column-end: span 17; }
::slotted([column~="18"]), :host([size="xs"]) ::slotted([column~="18xs"]), :host([size="s"]) ::slotted([column~="18s"]), :host([size="m"]) ::slotted([column~="18m"]), :host([size="l"]) ::slotted([column~="18l"]), :host([size="xl"]) ::slotted([column~="18xl"]), :host([size="xxl"]) ::slotted([column~="18xxl"]){ grid-column-end: span 18; }
::slotted([column~="19"]), :host([size="xs"]) ::slotted([column~="19xs"]), :host([size="s"]) ::slotted([column~="19s"]), :host([size="m"]) ::slotted([column~="19m"]), :host([size="l"]) ::slotted([column~="19l"]), :host([size="xl"]) ::slotted([column~="19xl"]), :host([size="xxl"]) ::slotted([column~="19xxl"]){ grid-column-end: span 19; }
::slotted([column~="20"]), :host([size="xs"]) ::slotted([column~="20xs"]), :host([size="s"]) ::slotted([column~="20s"]), :host([size="m"]) ::slotted([column~="20m"]), :host([size="l"]) ::slotted([column~="20l"]), :host([size="xl"]) ::slotted([column~="20xl"]), :host([size="xxl"]) ::slotted([column~="20xxl"]){ grid-column-end: span 20; }
::slotted([column~="21"]), :host([size="xs"]) ::slotted([column~="21xs"]), :host([size="s"]) ::slotted([column~="21s"]), :host([size="m"]) ::slotted([column~="21m"]), :host([size="l"]) ::slotted([column~="21l"]), :host([size="xl"]) ::slotted([column~="21xl"]), :host([size="xxl"]) ::slotted([column~="21xxl"]){ grid-column-end: span 21; }
::slotted([column~="22"]), :host([size="xs"]) ::slotted([column~="22xs"]), :host([size="s"]) ::slotted([column~="22s"]), :host([size="m"]) ::slotted([column~="22m"]), :host([size="l"]) ::slotted([column~="22l"]), :host([size="xl"]) ::slotted([column~="22xl"]), :host([size="xxl"]) ::slotted([column~="22xxl"]){ grid-column-end: span 22; }
::slotted([column~="23"]), :host([size="xs"]) ::slotted([column~="23xs"]), :host([size="s"]) ::slotted([column~="23s"]), :host([size="m"]) ::slotted([column~="23m"]), :host([size="l"]) ::slotted([column~="23l"]), :host([size="xl"]) ::slotted([column~="23xl"]), :host([size="xxl"]) ::slotted([column~="23xxl"]){ grid-column-end: span 23; }
::slotted([column~="24"]), :host([size="xs"]) ::slotted([column~="24xs"]), :host([size="s"]) ::slotted([column~="24s"]), :host([size="m"]) ::slotted([column~="24m"]), :host([size="l"]) ::slotted([column~="24l"]), :host([size="xl"]) ::slotted([column~="24xl"]), :host([size="xxl"]) ::slotted([column~="24xxl"]){ grid-column-end: span 24; }

::slotted([row~="1"]){ grid-row-end: span 1; }
::slotted([row~="2"]){ grid-row-end: span 2; }
::slotted([row~="3"]){ grid-row-end: span 3; }
::slotted([row~="4"]){ grid-row-end: span 4; }
::slotted([row~="5"]){ grid-row-end: span 5; }
::slotted([row~="6"]){ grid-row-end: span 6; }
::slotted([row~="7"]){ grid-row-end: span 7; }
::slotted([row~="8"]){ grid-row-end: span 8; }
::slotted([row~="9"]){ grid-row-end: span 9; }
::slotted([row~="10"]){ grid-row-end: span 10; }
::slotted([row~="11"]){ grid-row-end: span 11; }
::slotted([row~="12"]){ grid-row-end: span 12; }
::slotted([row~="13"]){ grid-row-end: span 13; }
::slotted([row~="14"]){ grid-row-end: span 14; }
::slotted([row~="15"]){ grid-row-end: span 15; }
::slotted([row~="16"]){ grid-row-end: span 16; }
::slotted([row~="17"]){ grid-row-end: span 17; }
::slotted([row~="18"]){ grid-row-end: span 18; }
::slotted([row~="19"]){ grid-row-end: span 19; }
::slotted([row~="20"]){ grid-row-end: span 20; }
::slotted([row~="21"]){ grid-row-end: span 21; }
::slotted([row~="22"]){ grid-row-end: span 22; }
::slotted([row~="23"]){ grid-row-end: span 23; }
::slotted([row~="24"]){ grid-row-end: span 24; }

::slotted([start-column~="0"]){ grid-column-start: auto; }
::slotted([start-column~="1"]){ grid-column-start: 1; }
::slotted([start-column~="2"]){ grid-column-start: 2; }
::slotted([start-column~="3"]){ grid-column-start: 3; }
::slotted([start-column~="4"]){ grid-column-start: 4; }
::slotted([start-column~="5"]){ grid-column-start: 5; }
::slotted([start-column~="6"]){ grid-column-start: 6; }
::slotted([start-column~="7"]){ grid-column-start: 7; }
::slotted([start-column~="8"]){ grid-column-start: 8; }
::slotted([start-column~="9"]){ grid-column-start: 9; }
::slotted([start-column~="10"]){ grid-column-start: 10; }
::slotted([start-column~="11"]){ grid-column-start: 11; }
::slotted([start-column~="12"]){ grid-column-start: 12; }
::slotted([start-column~="13"]){ grid-column-start: 13; }
::slotted([start-column~="14"]){ grid-column-start: 14; }
::slotted([start-column~="15"]){ grid-column-start: 15; }
::slotted([start-column~="16"]){ grid-column-start: 16; }
::slotted([start-column~="17"]){ grid-column-start: 17; }
::slotted([start-column~="18"]){ grid-column-start: 18; }
::slotted([start-column~="19"]){ grid-column-start: 19; }
::slotted([start-column~="20"]){ grid-column-start: 20; }
::slotted([start-column~="21"]){ grid-column-start: 21; }
::slotted([start-column~="22"]){ grid-column-start: 22; }
::slotted([start-column~="23"]){ grid-column-start: 23; }
::slotted([start-column~="24"]){ grid-column-start: 24; }

::slotted([start-row~="0"]){ grid-row-start: auto; }
::slotted([start-row~="1"]){ grid-row-start: 1; }
::slotted([start-row~="2"]){ grid-row-start: 2; }
::slotted([start-row~="3"]){ grid-row-start: 3; }
::slotted([start-row~="4"]){ grid-row-start: 4; }
::slotted([start-row~="5"]){ grid-row-start: 5; }
::slotted([start-row~="6"]){ grid-row-start: 6; }
::slotted([start-row~="7"]){ grid-row-start: 7; }
::slotted([start-row~="8"]){ grid-row-start: 8; }
::slotted([start-row~="9"]){ grid-row-start: 9; }
::slotted([start-row~="10"]){ grid-row-start: 10; }
::slotted([start-row~="11"]){ grid-row-start: 11; }
::slotted([start-row~="12"]){ grid-row-start: 12; }
::slotted([start-row~="13"]){ grid-row-start: 13; }
::slotted([start-row~="14"]){ grid-row-start: 14; }
::slotted([start-row~="15"]){ grid-row-start: 15; }
::slotted([start-row~="16"]){ grid-row-start: 16; }
::slotted([start-row~="17"]){ grid-row-start: 17; }
::slotted([start-row~="18"]){ grid-row-start: 18; }
::slotted([start-row~="19"]){ grid-row-start: 19; }
::slotted([start-row~="20"]){ grid-row-start: 20; }
::slotted([start-row~="21"]){ grid-row-start: 21; }
::slotted([start-row~="22"]){ grid-row-start: 22; }
::slotted([start-row~="23"]){ grid-row-start: 23; }
::slotted([start-row~="24"]){ grid-row-start: 24; }
</style>`
