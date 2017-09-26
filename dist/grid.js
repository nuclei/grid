(function () {
'use strict';

let style = `
<style>
:host{
  display: grid;
  grid-template-columns: repeat(var(--grid-columns, auto-fill), 1fr);
  grid-template-rows: repeat(var(--grid-rows, none), 1fr);
  grid-gap: var(--grid-gutter, 0);
  grid-row-gap: var(--grid-row-gutter, var(--grid-gutter, 0));
}
:host([size="xs"]){
  grid-template-columns: repeat(var(--grid-columns-xs, var(--grid-columns, auto-fill)), 1fr);
  grid-template-rows: repeat(var(--grid-rows-xs, var(--grid-rows, none)), 1fr);
}
:host([size="s"]){
  grid-template-columns: repeat(var(--grid-columns-s, var(--grid-columns, auto-fill)), 1fr);
  grid-template-rows: repeat(var(--grid-rows-s, var(--grid-rows, none)), 1fr);
}
:host([size="m"]){
  grid-template-columns: repeat(var(--grid-columns-m, var(--grid-columns, auto-fill)), 1fr);
  grid-template-rows: repeat(var(--grid-rows-m, var(--grid-rows, none)), 1fr);
}
:host([size="l"]){
  grid-template-columns: repeat(var(--grid-columns-l, var(--grid-columns, auto-fill)), 1fr);
  grid-template-rows: repeat(var(--grid-rows-l, var(--grid-rows, none)), 1fr);
}
:host([size="xl"]){
  grid-template-columns: repeat(var(--grid-columns-xl, var(--grid-columns, auto-fill)), 1fr);
  grid-template-rows: repeat(var(--grid-rows-xl, var(--grid-rows, none)), 1fr);
}
:host([size="xxl"]){
  grid-template-columns: repeat(var(--grid-columns-xxl, var(--grid-columns, auto-fill)), 1fr);
  grid-template-rows: repeat(var(--grid-rows-xxl, var(--grid-rows, none)), 1fr);
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

::slotted([row~="1"]), :host([size="xs"]) ::slotted([row~="1xs"]), :host([size="s"]) ::slotted([row~="1s"]), :host([size="m"]) ::slotted([row~="1m"]), :host([size="l"]) ::slotted([row~="1l"]), :host([size="xl"]) ::slotted([row~="1xl"]), :host([size="xxl"]) ::slotted([row~="1xxl"]){ grid-row-end: span 1; }
::slotted([row~="2"]), :host([size="xs"]) ::slotted([row~="2xs"]), :host([size="s"]) ::slotted([row~="2s"]), :host([size="m"]) ::slotted([row~="2m"]), :host([size="l"]) ::slotted([row~="2l"]), :host([size="xl"]) ::slotted([row~="2xl"]), :host([size="xxl"]) ::slotted([row~="2xxl"]){ grid-row-end: span 2; }
::slotted([row~="3"]), :host([size="xs"]) ::slotted([row~="3xs"]), :host([size="s"]) ::slotted([row~="3s"]), :host([size="m"]) ::slotted([row~="3m"]), :host([size="l"]) ::slotted([row~="3l"]), :host([size="xl"]) ::slotted([row~="3xl"]), :host([size="xxl"]) ::slotted([row~="3xxl"]){ grid-row-end: span 3; }
::slotted([row~="4"]), :host([size="xs"]) ::slotted([row~="4xs"]), :host([size="s"]) ::slotted([row~="4s"]), :host([size="m"]) ::slotted([row~="4m"]), :host([size="l"]) ::slotted([row~="4l"]), :host([size="xl"]) ::slotted([row~="4xl"]), :host([size="xxl"]) ::slotted([row~="4xxl"]){ grid-row-end: span 4; }
::slotted([row~="5"]), :host([size="xs"]) ::slotted([row~="5xs"]), :host([size="s"]) ::slotted([row~="5s"]), :host([size="m"]) ::slotted([row~="5m"]), :host([size="l"]) ::slotted([row~="5l"]), :host([size="xl"]) ::slotted([row~="5xl"]), :host([size="xxl"]) ::slotted([row~="5xxl"]){ grid-row-end: span 5; }
::slotted([row~="6"]), :host([size="xs"]) ::slotted([row~="6xs"]), :host([size="s"]) ::slotted([row~="6s"]), :host([size="m"]) ::slotted([row~="6m"]), :host([size="l"]) ::slotted([row~="6l"]), :host([size="xl"]) ::slotted([row~="6xl"]), :host([size="xxl"]) ::slotted([row~="6xxl"]){ grid-row-end: span 6; }
::slotted([row~="7"]), :host([size="xs"]) ::slotted([row~="7xs"]), :host([size="s"]) ::slotted([row~="7s"]), :host([size="m"]) ::slotted([row~="7m"]), :host([size="l"]) ::slotted([row~="7l"]), :host([size="xl"]) ::slotted([row~="7xl"]), :host([size="xxl"]) ::slotted([row~="7xxl"]){ grid-row-end: span 7; }
::slotted([row~="8"]), :host([size="xs"]) ::slotted([row~="8xs"]), :host([size="s"]) ::slotted([row~="8s"]), :host([size="m"]) ::slotted([row~="8m"]), :host([size="l"]) ::slotted([row~="8l"]), :host([size="xl"]) ::slotted([row~="8xl"]), :host([size="xxl"]) ::slotted([row~="8xxl"]){ grid-row-end: span 8; }
::slotted([row~="9"]), :host([size="xs"]) ::slotted([row~="9xs"]), :host([size="s"]) ::slotted([row~="9s"]), :host([size="m"]) ::slotted([row~="9m"]), :host([size="l"]) ::slotted([row~="9l"]), :host([size="xl"]) ::slotted([row~="9xl"]), :host([size="xxl"]) ::slotted([row~="9xxl"]){ grid-row-end: span 9; }
::slotted([row~="10"]), :host([size="xs"]) ::slotted([row~="10xs"]), :host([size="s"]) ::slotted([row~="10s"]), :host([size="m"]) ::slotted([row~="10m"]), :host([size="l"]) ::slotted([row~="10l"]), :host([size="xl"]) ::slotted([row~="10xl"]), :host([size="xxl"]) ::slotted([row~="10xxl"]){ grid-row-end: span 10; }
::slotted([row~="11"]), :host([size="xs"]) ::slotted([row~="11xs"]), :host([size="s"]) ::slotted([row~="11s"]), :host([size="m"]) ::slotted([row~="11m"]), :host([size="l"]) ::slotted([row~="11l"]), :host([size="xl"]) ::slotted([row~="11xl"]), :host([size="xxl"]) ::slotted([row~="11xxl"]){ grid-row-end: span 11; }
::slotted([row~="12"]), :host([size="xs"]) ::slotted([row~="12xs"]), :host([size="s"]) ::slotted([row~="12s"]), :host([size="m"]) ::slotted([row~="12m"]), :host([size="l"]) ::slotted([row~="12l"]), :host([size="xl"]) ::slotted([row~="12xl"]), :host([size="xxl"]) ::slotted([row~="12xxl"]){ grid-row-end: span 12; }
::slotted([row~="13"]), :host([size="xs"]) ::slotted([row~="13xs"]), :host([size="s"]) ::slotted([row~="13s"]), :host([size="m"]) ::slotted([row~="13m"]), :host([size="l"]) ::slotted([row~="13l"]), :host([size="xl"]) ::slotted([row~="13xl"]), :host([size="xxl"]) ::slotted([row~="13xxl"]){ grid-row-end: span 13; }
::slotted([row~="14"]), :host([size="xs"]) ::slotted([row~="14xs"]), :host([size="s"]) ::slotted([row~="14s"]), :host([size="m"]) ::slotted([row~="14m"]), :host([size="l"]) ::slotted([row~="14l"]), :host([size="xl"]) ::slotted([row~="14xl"]), :host([size="xxl"]) ::slotted([row~="14xxl"]){ grid-row-end: span 14; }
::slotted([row~="15"]), :host([size="xs"]) ::slotted([row~="15xs"]), :host([size="s"]) ::slotted([row~="15s"]), :host([size="m"]) ::slotted([row~="15m"]), :host([size="l"]) ::slotted([row~="15l"]), :host([size="xl"]) ::slotted([row~="15xl"]), :host([size="xxl"]) ::slotted([row~="15xxl"]){ grid-row-end: span 15; }
::slotted([row~="16"]), :host([size="xs"]) ::slotted([row~="16xs"]), :host([size="s"]) ::slotted([row~="16s"]), :host([size="m"]) ::slotted([row~="16m"]), :host([size="l"]) ::slotted([row~="16l"]), :host([size="xl"]) ::slotted([row~="16xl"]), :host([size="xxl"]) ::slotted([row~="16xxl"]){ grid-row-end: span 16; }
::slotted([row~="17"]), :host([size="xs"]) ::slotted([row~="17xs"]), :host([size="s"]) ::slotted([row~="17s"]), :host([size="m"]) ::slotted([row~="17m"]), :host([size="l"]) ::slotted([row~="17l"]), :host([size="xl"]) ::slotted([row~="17xl"]), :host([size="xxl"]) ::slotted([row~="17xxl"]){ grid-row-end: span 17; }
::slotted([row~="18"]), :host([size="xs"]) ::slotted([row~="18xs"]), :host([size="s"]) ::slotted([row~="18s"]), :host([size="m"]) ::slotted([row~="18m"]), :host([size="l"]) ::slotted([row~="18l"]), :host([size="xl"]) ::slotted([row~="18xl"]), :host([size="xxl"]) ::slotted([row~="18xxl"]){ grid-row-end: span 18; }
::slotted([row~="19"]), :host([size="xs"]) ::slotted([row~="19xs"]), :host([size="s"]) ::slotted([row~="19s"]), :host([size="m"]) ::slotted([row~="19m"]), :host([size="l"]) ::slotted([row~="19l"]), :host([size="xl"]) ::slotted([row~="19xl"]), :host([size="xxl"]) ::slotted([row~="19xxl"]){ grid-row-end: span 19; }
::slotted([row~="20"]), :host([size="xs"]) ::slotted([row~="20xs"]), :host([size="s"]) ::slotted([row~="20s"]), :host([size="m"]) ::slotted([row~="20m"]), :host([size="l"]) ::slotted([row~="20l"]), :host([size="xl"]) ::slotted([row~="20xl"]), :host([size="xxl"]) ::slotted([row~="20xxl"]){ grid-row-end: span 20; }
::slotted([row~="21"]), :host([size="xs"]) ::slotted([row~="21xs"]), :host([size="s"]) ::slotted([row~="21s"]), :host([size="m"]) ::slotted([row~="21m"]), :host([size="l"]) ::slotted([row~="21l"]), :host([size="xl"]) ::slotted([row~="21xl"]), :host([size="xxl"]) ::slotted([row~="21xxl"]){ grid-row-end: span 21; }
::slotted([row~="22"]), :host([size="xs"]) ::slotted([row~="22xs"]), :host([size="s"]) ::slotted([row~="22s"]), :host([size="m"]) ::slotted([row~="22m"]), :host([size="l"]) ::slotted([row~="22l"]), :host([size="xl"]) ::slotted([row~="22xl"]), :host([size="xxl"]) ::slotted([row~="22xxl"]){ grid-row-end: span 22; }
::slotted([row~="23"]), :host([size="xs"]) ::slotted([row~="23xs"]), :host([size="s"]) ::slotted([row~="23s"]), :host([size="m"]) ::slotted([row~="23m"]), :host([size="l"]) ::slotted([row~="23l"]), :host([size="xl"]) ::slotted([row~="23xl"]), :host([size="xxl"]) ::slotted([row~="23xxl"]){ grid-row-end: span 23; }
::slotted([row~="24"]), :host([size="xs"]) ::slotted([row~="24xs"]), :host([size="s"]) ::slotted([row~="24s"]), :host([size="m"]) ::slotted([row~="24m"]), :host([size="l"]) ::slotted([row~="24l"]), :host([size="xl"]) ::slotted([row~="24xl"]), :host([size="xxl"]) ::slotted([row~="24xxl"]){ grid-row-end: span 24; }

::slotted([start-column~="0"]), :host([size="xs"]) ::slotted([start-column~="0xs"]), :host([size="s"]) ::slotted([start-column~="0s"]), :host([size="m"]) ::slotted([start-column~="0m"]), :host([size="l"]) ::slotted([start-column~="0l"]), :host([size="xl"]) ::slotted([start-column~="0xl"]), :host([size="xxl"]) ::slotted([start-column~="0xxl"]){ grid-column-start: auto; }
::slotted([start-column~="1"]), :host([size="xs"]) ::slotted([start-column~="1xs"]), :host([size="s"]) ::slotted([start-column~="1s"]), :host([size="m"]) ::slotted([start-column~="1m"]), :host([size="l"]) ::slotted([start-column~="1l"]), :host([size="xl"]) ::slotted([start-column~="1xl"]), :host([size="xxl"]) ::slotted([start-column~="1xxl"]){ grid-column-start: 1; }
::slotted([start-column~="2"]), :host([size="xs"]) ::slotted([start-column~="2xs"]), :host([size="s"]) ::slotted([start-column~="2s"]), :host([size="m"]) ::slotted([start-column~="2m"]), :host([size="l"]) ::slotted([start-column~="2l"]), :host([size="xl"]) ::slotted([start-column~="2xl"]), :host([size="xxl"]) ::slotted([start-column~="2xxl"]){ grid-column-start: 2; }
::slotted([start-column~="3"]), :host([size="xs"]) ::slotted([start-column~="3xs"]), :host([size="s"]) ::slotted([start-column~="3s"]), :host([size="m"]) ::slotted([start-column~="3m"]), :host([size="l"]) ::slotted([start-column~="3l"]), :host([size="xl"]) ::slotted([start-column~="3xl"]), :host([size="xxl"]) ::slotted([start-column~="3xxl"]){ grid-column-start: 3; }
::slotted([start-column~="4"]), :host([size="xs"]) ::slotted([start-column~="4xs"]), :host([size="s"]) ::slotted([start-column~="4s"]), :host([size="m"]) ::slotted([start-column~="4m"]), :host([size="l"]) ::slotted([start-column~="4l"]), :host([size="xl"]) ::slotted([start-column~="4xl"]), :host([size="xxl"]) ::slotted([start-column~="4xxl"]){ grid-column-start: 4; }
::slotted([start-column~="5"]), :host([size="xs"]) ::slotted([start-column~="5xs"]), :host([size="s"]) ::slotted([start-column~="5s"]), :host([size="m"]) ::slotted([start-column~="5m"]), :host([size="l"]) ::slotted([start-column~="5l"]), :host([size="xl"]) ::slotted([start-column~="5xl"]), :host([size="xxl"]) ::slotted([start-column~="5xxl"]){ grid-column-start: 5; }
::slotted([start-column~="6"]), :host([size="xs"]) ::slotted([start-column~="6xs"]), :host([size="s"]) ::slotted([start-column~="6s"]), :host([size="m"]) ::slotted([start-column~="6m"]), :host([size="l"]) ::slotted([start-column~="6l"]), :host([size="xl"]) ::slotted([start-column~="6xl"]), :host([size="xxl"]) ::slotted([start-column~="6xxl"]){ grid-column-start: 6; }
::slotted([start-column~="7"]), :host([size="xs"]) ::slotted([start-column~="7xs"]), :host([size="s"]) ::slotted([start-column~="7s"]), :host([size="m"]) ::slotted([start-column~="7m"]), :host([size="l"]) ::slotted([start-column~="7l"]), :host([size="xl"]) ::slotted([start-column~="7xl"]), :host([size="xxl"]) ::slotted([start-column~="7xxl"]){ grid-column-start: 7; }
::slotted([start-column~="8"]), :host([size="xs"]) ::slotted([start-column~="8xs"]), :host([size="s"]) ::slotted([start-column~="8s"]), :host([size="m"]) ::slotted([start-column~="8m"]), :host([size="l"]) ::slotted([start-column~="8l"]), :host([size="xl"]) ::slotted([start-column~="8xl"]), :host([size="xxl"]) ::slotted([start-column~="8xxl"]){ grid-column-start: 8; }
::slotted([start-column~="9"]), :host([size="xs"]) ::slotted([start-column~="9xs"]), :host([size="s"]) ::slotted([start-column~="9s"]), :host([size="m"]) ::slotted([start-column~="9m"]), :host([size="l"]) ::slotted([start-column~="9l"]), :host([size="xl"]) ::slotted([start-column~="9xl"]), :host([size="xxl"]) ::slotted([start-column~="9xxl"]){ grid-column-start: 9; }
::slotted([start-column~="10"]), :host([size="xs"]) ::slotted([start-column~="10xs"]), :host([size="s"]) ::slotted([start-column~="10s"]), :host([size="m"]) ::slotted([start-column~="10m"]), :host([size="l"]) ::slotted([start-column~="10l"]), :host([size="xl"]) ::slotted([start-column~="10xl"]), :host([size="xxl"]) ::slotted([start-column~="10xxl"]){ grid-column-start: 10; }
::slotted([start-column~="11"]), :host([size="xs"]) ::slotted([start-column~="11xs"]), :host([size="s"]) ::slotted([start-column~="11s"]), :host([size="m"]) ::slotted([start-column~="11m"]), :host([size="l"]) ::slotted([start-column~="11l"]), :host([size="xl"]) ::slotted([start-column~="11xl"]), :host([size="xxl"]) ::slotted([start-column~="11xxl"]){ grid-column-start: 11; }
::slotted([start-column~="12"]), :host([size="xs"]) ::slotted([start-column~="12xs"]), :host([size="s"]) ::slotted([start-column~="12s"]), :host([size="m"]) ::slotted([start-column~="12m"]), :host([size="l"]) ::slotted([start-column~="12l"]), :host([size="xl"]) ::slotted([start-column~="12xl"]), :host([size="xxl"]) ::slotted([start-column~="12xxl"]){ grid-column-start: 12; }
::slotted([start-column~="13"]), :host([size="xs"]) ::slotted([start-column~="13xs"]), :host([size="s"]) ::slotted([start-column~="13s"]), :host([size="m"]) ::slotted([start-column~="13m"]), :host([size="l"]) ::slotted([start-column~="13l"]), :host([size="xl"]) ::slotted([start-column~="13xl"]), :host([size="xxl"]) ::slotted([start-column~="13xxl"]){ grid-column-start: 13; }
::slotted([start-column~="14"]), :host([size="xs"]) ::slotted([start-column~="14xs"]), :host([size="s"]) ::slotted([start-column~="14s"]), :host([size="m"]) ::slotted([start-column~="14m"]), :host([size="l"]) ::slotted([start-column~="14l"]), :host([size="xl"]) ::slotted([start-column~="14xl"]), :host([size="xxl"]) ::slotted([start-column~="14xxl"]){ grid-column-start: 14; }
::slotted([start-column~="15"]), :host([size="xs"]) ::slotted([start-column~="15xs"]), :host([size="s"]) ::slotted([start-column~="15s"]), :host([size="m"]) ::slotted([start-column~="15m"]), :host([size="l"]) ::slotted([start-column~="15l"]), :host([size="xl"]) ::slotted([start-column~="15xl"]), :host([size="xxl"]) ::slotted([start-column~="15xxl"]){ grid-column-start: 15; }
::slotted([start-column~="16"]), :host([size="xs"]) ::slotted([start-column~="16xs"]), :host([size="s"]) ::slotted([start-column~="16s"]), :host([size="m"]) ::slotted([start-column~="16m"]), :host([size="l"]) ::slotted([start-column~="16l"]), :host([size="xl"]) ::slotted([start-column~="16xl"]), :host([size="xxl"]) ::slotted([start-column~="16xxl"]){ grid-column-start: 16; }
::slotted([start-column~="17"]), :host([size="xs"]) ::slotted([start-column~="17xs"]), :host([size="s"]) ::slotted([start-column~="17s"]), :host([size="m"]) ::slotted([start-column~="17m"]), :host([size="l"]) ::slotted([start-column~="17l"]), :host([size="xl"]) ::slotted([start-column~="17xl"]), :host([size="xxl"]) ::slotted([start-column~="17xxl"]){ grid-column-start: 17; }
::slotted([start-column~="18"]), :host([size="xs"]) ::slotted([start-column~="18xs"]), :host([size="s"]) ::slotted([start-column~="18s"]), :host([size="m"]) ::slotted([start-column~="18m"]), :host([size="l"]) ::slotted([start-column~="18l"]), :host([size="xl"]) ::slotted([start-column~="18xl"]), :host([size="xxl"]) ::slotted([start-column~="18xxl"]){ grid-column-start: 18; }
::slotted([start-column~="19"]), :host([size="xs"]) ::slotted([start-column~="19xs"]), :host([size="s"]) ::slotted([start-column~="19s"]), :host([size="m"]) ::slotted([start-column~="19m"]), :host([size="l"]) ::slotted([start-column~="19l"]), :host([size="xl"]) ::slotted([start-column~="19xl"]), :host([size="xxl"]) ::slotted([start-column~="19xxl"]){ grid-column-start: 19; }
::slotted([start-column~="20"]), :host([size="xs"]) ::slotted([start-column~="20xs"]), :host([size="s"]) ::slotted([start-column~="20s"]), :host([size="m"]) ::slotted([start-column~="20m"]), :host([size="l"]) ::slotted([start-column~="20l"]), :host([size="xl"]) ::slotted([start-column~="20xl"]), :host([size="xxl"]) ::slotted([start-column~="20xxl"]){ grid-column-start: 20; }
::slotted([start-column~="21"]), :host([size="xs"]) ::slotted([start-column~="21xs"]), :host([size="s"]) ::slotted([start-column~="21s"]), :host([size="m"]) ::slotted([start-column~="21m"]), :host([size="l"]) ::slotted([start-column~="21l"]), :host([size="xl"]) ::slotted([start-column~="21xl"]), :host([size="xxl"]) ::slotted([start-column~="21xxl"]){ grid-column-start: 21; }
::slotted([start-column~="22"]), :host([size="xs"]) ::slotted([start-column~="22xs"]), :host([size="s"]) ::slotted([start-column~="22s"]), :host([size="m"]) ::slotted([start-column~="22m"]), :host([size="l"]) ::slotted([start-column~="22l"]), :host([size="xl"]) ::slotted([start-column~="22xl"]), :host([size="xxl"]) ::slotted([start-column~="22xxl"]){ grid-column-start: 22; }
::slotted([start-column~="23"]), :host([size="xs"]) ::slotted([start-column~="23xs"]), :host([size="s"]) ::slotted([start-column~="23s"]), :host([size="m"]) ::slotted([start-column~="23m"]), :host([size="l"]) ::slotted([start-column~="23l"]), :host([size="xl"]) ::slotted([start-column~="23xl"]), :host([size="xxl"]) ::slotted([start-column~="23xxl"]){ grid-column-start: 23; }
::slotted([start-column~="24"]), :host([size="xs"]) ::slotted([start-column~="24xs"]), :host([size="s"]) ::slotted([start-column~="24s"]), :host([size="m"]) ::slotted([start-column~="24m"]), :host([size="l"]) ::slotted([start-column~="24l"]), :host([size="xl"]) ::slotted([start-column~="24xl"]), :host([size="xxl"]) ::slotted([start-column~="24xxl"]){ grid-column-start: 24; }

::slotted([start-row~="0"]), :host([size="xs"]) ::slotted([start-row~="0xs"]), :host([size="s"]) ::slotted([start-row~="0s"]), :host([size="m"]) ::slotted([start-row~="0m"]), :host([size="l"]) ::slotted([start-row~="0l"]), :host([size="xl"]) ::slotted([start-row~="0xl"]), :host([size="xxl"]) ::slotted([start-row~="0xxl"]){ grid-row-start: auto; }
::slotted([start-row~="1"]), :host([size="xs"]) ::slotted([start-row~="1xs"]), :host([size="s"]) ::slotted([start-row~="1s"]), :host([size="m"]) ::slotted([start-row~="1m"]), :host([size="l"]) ::slotted([start-row~="1l"]), :host([size="xl"]) ::slotted([start-row~="1xl"]), :host([size="xxl"]) ::slotted([start-row~="1xxl"]){ grid-row-start: 1; }
::slotted([start-row~="2"]), :host([size="xs"]) ::slotted([start-row~="2xs"]), :host([size="s"]) ::slotted([start-row~="2s"]), :host([size="m"]) ::slotted([start-row~="2m"]), :host([size="l"]) ::slotted([start-row~="2l"]), :host([size="xl"]) ::slotted([start-row~="2xl"]), :host([size="xxl"]) ::slotted([start-row~="2xxl"]){ grid-row-start: 2; }
::slotted([start-row~="3"]), :host([size="xs"]) ::slotted([start-row~="3xs"]), :host([size="s"]) ::slotted([start-row~="3s"]), :host([size="m"]) ::slotted([start-row~="3m"]), :host([size="l"]) ::slotted([start-row~="3l"]), :host([size="xl"]) ::slotted([start-row~="3xl"]), :host([size="xxl"]) ::slotted([start-row~="3xxl"]){ grid-row-start: 3; }
::slotted([start-row~="4"]), :host([size="xs"]) ::slotted([start-row~="4xs"]), :host([size="s"]) ::slotted([start-row~="4s"]), :host([size="m"]) ::slotted([start-row~="4m"]), :host([size="l"]) ::slotted([start-row~="4l"]), :host([size="xl"]) ::slotted([start-row~="4xl"]), :host([size="xxl"]) ::slotted([start-row~="4xxl"]){ grid-row-start: 4; }
::slotted([start-row~="5"]), :host([size="xs"]) ::slotted([start-row~="5xs"]), :host([size="s"]) ::slotted([start-row~="5s"]), :host([size="m"]) ::slotted([start-row~="5m"]), :host([size="l"]) ::slotted([start-row~="5l"]), :host([size="xl"]) ::slotted([start-row~="5xl"]), :host([size="xxl"]) ::slotted([start-row~="5xxl"]){ grid-row-start: 5; }
::slotted([start-row~="6"]), :host([size="xs"]) ::slotted([start-row~="6xs"]), :host([size="s"]) ::slotted([start-row~="6s"]), :host([size="m"]) ::slotted([start-row~="6m"]), :host([size="l"]) ::slotted([start-row~="6l"]), :host([size="xl"]) ::slotted([start-row~="6xl"]), :host([size="xxl"]) ::slotted([start-row~="6xxl"]){ grid-row-start: 6; }
::slotted([start-row~="7"]), :host([size="xs"]) ::slotted([start-row~="7xs"]), :host([size="s"]) ::slotted([start-row~="7s"]), :host([size="m"]) ::slotted([start-row~="7m"]), :host([size="l"]) ::slotted([start-row~="7l"]), :host([size="xl"]) ::slotted([start-row~="7xl"]), :host([size="xxl"]) ::slotted([start-row~="7xxl"]){ grid-row-start: 7; }
::slotted([start-row~="8"]), :host([size="xs"]) ::slotted([start-row~="8xs"]), :host([size="s"]) ::slotted([start-row~="8s"]), :host([size="m"]) ::slotted([start-row~="8m"]), :host([size="l"]) ::slotted([start-row~="8l"]), :host([size="xl"]) ::slotted([start-row~="8xl"]), :host([size="xxl"]) ::slotted([start-row~="8xxl"]){ grid-row-start: 8; }
::slotted([start-row~="9"]), :host([size="xs"]) ::slotted([start-row~="9xs"]), :host([size="s"]) ::slotted([start-row~="9s"]), :host([size="m"]) ::slotted([start-row~="9m"]), :host([size="l"]) ::slotted([start-row~="9l"]), :host([size="xl"]) ::slotted([start-row~="9xl"]), :host([size="xxl"]) ::slotted([start-row~="9xxl"]){ grid-row-start: 9; }
::slotted([start-row~="10"]), :host([size="xs"]) ::slotted([start-row~="10xs"]), :host([size="s"]) ::slotted([start-row~="10s"]), :host([size="m"]) ::slotted([start-row~="10m"]), :host([size="l"]) ::slotted([start-row~="10l"]), :host([size="xl"]) ::slotted([start-row~="10xl"]), :host([size="xxl"]) ::slotted([start-row~="10xxl"]){ grid-row-start: 10; }
::slotted([start-row~="11"]), :host([size="xs"]) ::slotted([start-row~="11xs"]), :host([size="s"]) ::slotted([start-row~="11s"]), :host([size="m"]) ::slotted([start-row~="11m"]), :host([size="l"]) ::slotted([start-row~="11l"]), :host([size="xl"]) ::slotted([start-row~="11xl"]), :host([size="xxl"]) ::slotted([start-row~="11xxl"]){ grid-row-start: 11; }
::slotted([start-row~="12"]), :host([size="xs"]) ::slotted([start-row~="12xs"]), :host([size="s"]) ::slotted([start-row~="12s"]), :host([size="m"]) ::slotted([start-row~="12m"]), :host([size="l"]) ::slotted([start-row~="12l"]), :host([size="xl"]) ::slotted([start-row~="12xl"]), :host([size="xxl"]) ::slotted([start-row~="12xxl"]){ grid-row-start: 12; }
::slotted([start-row~="13"]), :host([size="xs"]) ::slotted([start-row~="13xs"]), :host([size="s"]) ::slotted([start-row~="13s"]), :host([size="m"]) ::slotted([start-row~="13m"]), :host([size="l"]) ::slotted([start-row~="13l"]), :host([size="xl"]) ::slotted([start-row~="13xl"]), :host([size="xxl"]) ::slotted([start-row~="13xxl"]){ grid-row-start: 13; }
::slotted([start-row~="14"]), :host([size="xs"]) ::slotted([start-row~="14xs"]), :host([size="s"]) ::slotted([start-row~="14s"]), :host([size="m"]) ::slotted([start-row~="14m"]), :host([size="l"]) ::slotted([start-row~="14l"]), :host([size="xl"]) ::slotted([start-row~="14xl"]), :host([size="xxl"]) ::slotted([start-row~="14xxl"]){ grid-row-start: 14; }
::slotted([start-row~="15"]), :host([size="xs"]) ::slotted([start-row~="15xs"]), :host([size="s"]) ::slotted([start-row~="15s"]), :host([size="m"]) ::slotted([start-row~="15m"]), :host([size="l"]) ::slotted([start-row~="15l"]), :host([size="xl"]) ::slotted([start-row~="15xl"]), :host([size="xxl"]) ::slotted([start-row~="15xxl"]){ grid-row-start: 15; }
::slotted([start-row~="16"]), :host([size="xs"]) ::slotted([start-row~="16xs"]), :host([size="s"]) ::slotted([start-row~="16s"]), :host([size="m"]) ::slotted([start-row~="16m"]), :host([size="l"]) ::slotted([start-row~="16l"]), :host([size="xl"]) ::slotted([start-row~="16xl"]), :host([size="xxl"]) ::slotted([start-row~="16xxl"]){ grid-row-start: 16; }
::slotted([start-row~="17"]), :host([size="xs"]) ::slotted([start-row~="17xs"]), :host([size="s"]) ::slotted([start-row~="17s"]), :host([size="m"]) ::slotted([start-row~="17m"]), :host([size="l"]) ::slotted([start-row~="17l"]), :host([size="xl"]) ::slotted([start-row~="17xl"]), :host([size="xxl"]) ::slotted([start-row~="17xxl"]){ grid-row-start: 17; }
::slotted([start-row~="18"]), :host([size="xs"]) ::slotted([start-row~="18xs"]), :host([size="s"]) ::slotted([start-row~="18s"]), :host([size="m"]) ::slotted([start-row~="18m"]), :host([size="l"]) ::slotted([start-row~="18l"]), :host([size="xl"]) ::slotted([start-row~="18xl"]), :host([size="xxl"]) ::slotted([start-row~="18xxl"]){ grid-row-start: 18; }
::slotted([start-row~="19"]), :host([size="xs"]) ::slotted([start-row~="19xs"]), :host([size="s"]) ::slotted([start-row~="19s"]), :host([size="m"]) ::slotted([start-row~="19m"]), :host([size="l"]) ::slotted([start-row~="19l"]), :host([size="xl"]) ::slotted([start-row~="19xl"]), :host([size="xxl"]) ::slotted([start-row~="19xxl"]){ grid-row-start: 19; }
::slotted([start-row~="20"]), :host([size="xs"]) ::slotted([start-row~="20xs"]), :host([size="s"]) ::slotted([start-row~="20s"]), :host([size="m"]) ::slotted([start-row~="20m"]), :host([size="l"]) ::slotted([start-row~="20l"]), :host([size="xl"]) ::slotted([start-row~="20xl"]), :host([size="xxl"]) ::slotted([start-row~="20xxl"]){ grid-row-start: 20; }
::slotted([start-row~="21"]), :host([size="xs"]) ::slotted([start-row~="21xs"]), :host([size="s"]) ::slotted([start-row~="21s"]), :host([size="m"]) ::slotted([start-row~="21m"]), :host([size="l"]) ::slotted([start-row~="21l"]), :host([size="xl"]) ::slotted([start-row~="21xl"]), :host([size="xxl"]) ::slotted([start-row~="21xxl"]){ grid-row-start: 21; }
::slotted([start-row~="22"]), :host([size="xs"]) ::slotted([start-row~="22xs"]), :host([size="s"]) ::slotted([start-row~="22s"]), :host([size="m"]) ::slotted([start-row~="22m"]), :host([size="l"]) ::slotted([start-row~="22l"]), :host([size="xl"]) ::slotted([start-row~="22xl"]), :host([size="xxl"]) ::slotted([start-row~="22xxl"]){ grid-row-start: 22; }
::slotted([start-row~="23"]), :host([size="xs"]) ::slotted([start-row~="23xs"]), :host([size="s"]) ::slotted([start-row~="23s"]), :host([size="m"]) ::slotted([start-row~="23m"]), :host([size="l"]) ::slotted([start-row~="23l"]), :host([size="xl"]) ::slotted([start-row~="23xl"]), :host([size="xxl"]) ::slotted([start-row~="23xxl"]){ grid-row-start: 23; }
::slotted([start-row~="24"]), :host([size="xs"]) ::slotted([start-row~="24xs"]), :host([size="s"]) ::slotted([start-row~="24s"]), :host([size="m"]) ::slotted([start-row~="24m"]), :host([size="l"]) ::slotted([start-row~="24l"]), :host([size="xl"]) ::slotted([start-row~="24xl"]), :host([size="xxl"]) ::slotted([start-row~="24xxl"]){ grid-row-start: 24; }
</style>`;

'use strict';
let shadowRoot;
let template = document.createElement('template');
template.innerHTML = `${style}\n<slot></slot>`;
class Grid extends HTMLElement {
    constructor() {
        super();
        this._columns = null;
        this._rows = null;
        this._gutter = null;
        this._rowgutter = null;
        this._autoflow = null;
        this._breakpoints = null;
        this._breakpointsString = null;
        shadowRoot = this.attachShadow({ mode: 'open' });
        if (typeof ShadyCSS !== 'undefined') {
            ShadyCSS.prepareTemplate(template, 'grid-container');
            ShadyCSS.styleElement(this);
        }
        shadowRoot.appendChild(document.importNode(template.content, true));
    }
    static get observedAttributes() {
        return ['gutter', 'rowgutter', 'autoflow', 'rows', 'columns', 'breakpoints'];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        this[attrName] = newVal;
    }
    connectedCallback() {
        if (window.nucleiGrid === undefined || window.nucleiGrid.elements === undefined || window.nucleiGrid.elements.length <= 0) {
            window.addEventListener('resize', this._debounce(this._resizeEvent, 50));
            window.nucleiGrid = window.nucleiGrid || {};
            window.nucleiGrid.elements = [];
        }
        window.nucleiGrid.elements.push(this);
        this._elementQuery(this);
    }
    _resizeEvent() {
        window.nucleiGrid.elements.forEach((element, index) => {
            if (!document.body.contains(element))
                return window.nucleiGrid.elements.splice(index, 1);
            element._elementQuery(element);
        });
    }
    _debounce(callback, time) {
        let timeout;
        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(callback, time);
        };
    }
    _elementQuery(element) {
        let prev = null;
        let last = Object.keys(element.breakpoints)[Object.keys(element.breakpoints).length - 1];
        for (let breakpoint in element.breakpoints) {
            if (element.clientWidth >= element.breakpoints[breakpoint]) {
                prev = {
                    boundary: element.breakpoints[breakpoint],
                    size: breakpoint
                };
            }
            if (element.clientWidth < element.breakpoints[breakpoint] || last === breakpoint) {
                let prevSize = element.getAttribute('size');
                if (prevSize !== prev.size) {
                    element.dispatchEvent(new CustomEvent('sizechange', { detail: {
                            size: prev.size,
                            pixelBoundary: prev.boundary,
                            prevSize: prevSize
                        } }));
                    element.setAttribute('size', prev.size);
                }
                break;
            }
        }
    }
    set breakpoints(breakpoints) {
        if (this._breakpointsString === breakpoints)
            return;
        this._breakpointsString = breakpoints;
        this._breakpoints = {};
        breakpoints.split(' ').forEach((item) => {
            let size = item.replace(/[0-9]+/g, '').trim();
            this._breakpoints[size] = item.replace(/[^0-9]*/g, '').trim();
        });
        this.setAttribute('breakpoints', breakpoints);
    }
    get breakpoints() {
        return this._breakpoints || window.nucleiGrid.breakpoints || {};
    }
    set autoflow(autoflow) {
        if (this._autoflow === autoflow)
            return;
        this._autoflow = autoflow;
        this.setAttribute('autoflow', autoflow);
    }
    set gutter(gutter) {
        if (this._gutter === gutter)
            return;
        this._gutter = gutter;
        this.style.setProperty('--grid-gutter', gutter);
        this.setAttribute('gutter', gutter);
    }
    set rowgutter(rowgutter) {
        if (this._rowgutter === rowgutter)
            return;
        this._rowgutter = rowgutter;
        this.style.setProperty('--grid-row-gutter', rowgutter);
        this.setAttribute('rowgutter', rowgutter);
    }
    set columns(columns) {
        if (this._columns === columns)
            return;
        this._columns = columns;
        columns.split(' ').forEach((item) => {
            let size = item.replace(/[0-9]+/g, '').trim();
            this.style.setProperty(`--grid-columns${size.length > 0 ? '-' : ''}${size}`, item.replace(/[^0-9]*/g, '').trim());
        });
        this.setAttribute('columns', columns);
    }
    set rows(rows) {
        if (this._rows === rows)
            return;
        this._rows = rows;
        rows.split(' ').forEach((item) => {
            let size = item.replace(/[0-9]+/g, '').trim();
            this.style.setProperty(`--grid-rows${size.length > 0 ? '-' : ''}${size}`, `repeat(${item.replace(/[^0-9]*/g, '').trim()}, 1fr)`);
        });
        this.setAttribute('rows', rows);
    }
}
window.customElements.define('grid-container', Grid);

}());
//# sourceMappingURL=grid.js.map
