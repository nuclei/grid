(function () {
'use strict';

let style = `
  <style>
  :host{
    display: grid;
    width: 100%;
    grid-template-columns: repeat(var(--grid-columns, auto-fill), 1fr);
    grid-template-rows: repeat(var(--grid-rows, none), 1fr);
    grid-gap: var(--grid-gutter, 0);
    grid-row-gap: var(--grid-row-gutter, var(--grid-gutter, 0));
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

  :host([autoflow]){
    grid-auto-flow: row dense;
  }
  :host([autoflow=column]){
    grid-auto-flow: column dense;
  }
  // columns no unit
  ::slotted([columns~="1"]){ grid-column-end: span 1; }
::slotted([start-column~="1"]){ grid-column-start: 1; }
::slotted([columns~="2"]){ grid-column-end: span 2; }
::slotted([start-column~="2"]){ grid-column-start: 2; }
::slotted([columns~="3"]){ grid-column-end: span 3; }
::slotted([start-column~="3"]){ grid-column-start: 3; }
::slotted([columns~="4"]){ grid-column-end: span 4; }
::slotted([start-column~="4"]){ grid-column-start: 4; }
::slotted([columns~="5"]){ grid-column-end: span 5; }
::slotted([start-column~="5"]){ grid-column-start: 5; }
::slotted([columns~="6"]){ grid-column-end: span 6; }
::slotted([start-column~="6"]){ grid-column-start: 6; }
::slotted([columns~="7"]){ grid-column-end: span 7; }
::slotted([start-column~="7"]){ grid-column-start: 7; }
::slotted([columns~="8"]){ grid-column-end: span 8; }
::slotted([start-column~="8"]){ grid-column-start: 8; }
::slotted([columns~="9"]){ grid-column-end: span 9; }
::slotted([start-column~="9"]){ grid-column-start: 9; }
::slotted([columns~="10"]){ grid-column-end: span 10; }
::slotted([start-column~="10"]){ grid-column-start: 10; }
::slotted([columns~="11"]){ grid-column-end: span 11; }
::slotted([start-column~="11"]){ grid-column-start: 11; }
::slotted([columns~="12"]){ grid-column-end: span 12; }
::slotted([start-column~="12"]){ grid-column-start: 12; }
::slotted([columns~="13"]){ grid-column-end: span 13; }
::slotted([start-column~="13"]){ grid-column-start: 13; }
::slotted([columns~="14"]){ grid-column-end: span 14; }
::slotted([start-column~="14"]){ grid-column-start: 14; }
::slotted([columns~="15"]){ grid-column-end: span 15; }
::slotted([start-column~="15"]){ grid-column-start: 15; }
::slotted([columns~="16"]){ grid-column-end: span 16; }
::slotted([start-column~="16"]){ grid-column-start: 16; }

  // rows no unit
  ::slotted([rows~="1"]){ grid-row-end: span 1; }
::slotted([start-row~="1"]){ grid-row-start: 1; }
::slotted([rows~="2"]){ grid-row-end: span 2; }
::slotted([start-row~="2"]){ grid-row-start: 2; }
::slotted([rows~="3"]){ grid-row-end: span 3; }
::slotted([start-row~="3"]){ grid-row-start: 3; }
::slotted([rows~="4"]){ grid-row-end: span 4; }
::slotted([start-row~="4"]){ grid-row-start: 4; }
::slotted([rows~="5"]){ grid-row-end: span 5; }
::slotted([start-row~="5"]){ grid-row-start: 5; }
::slotted([rows~="6"]){ grid-row-end: span 6; }
::slotted([start-row~="6"]){ grid-row-start: 6; }
::slotted([rows~="7"]){ grid-row-end: span 7; }
::slotted([start-row~="7"]){ grid-row-start: 7; }
::slotted([rows~="8"]){ grid-row-end: span 8; }
::slotted([start-row~="8"]){ grid-row-start: 8; }
::slotted([rows~="9"]){ grid-row-end: span 9; }
::slotted([start-row~="9"]){ grid-row-start: 9; }
::slotted([rows~="10"]){ grid-row-end: span 10; }
::slotted([start-row~="10"]){ grid-row-start: 10; }
::slotted([rows~="11"]){ grid-row-end: span 11; }
::slotted([start-row~="11"]){ grid-row-start: 11; }
::slotted([rows~="12"]){ grid-row-end: span 12; }
::slotted([start-row~="12"]){ grid-row-start: 12; }
::slotted([rows~="13"]){ grid-row-end: span 13; }
::slotted([start-row~="13"]){ grid-row-start: 13; }
::slotted([rows~="14"]){ grid-row-end: span 14; }
::slotted([start-row~="14"]){ grid-row-start: 14; }
::slotted([rows~="15"]){ grid-row-end: span 15; }
::slotted([start-row~="15"]){ grid-row-start: 15; }
::slotted([rows~="16"]){ grid-row-end: span 16; }
::slotted([start-row~="16"]){ grid-row-start: 16; }

  // columns with unit
  :host([size="s"]) ::slotted([start-column~="0s"]){ grid-column-start: auto; }
:host([size="s"]) ::slotted([columns~="1s"]), :host([size="m"]) ::slotted([columns~="1s"]), :host([size="l"]) ::slotted([columns~="1s"]){ grid-column-end: span 1; }
:host([size="s"]) ::slotted([start-column~="1s"]), :host([size="m"]) ::slotted([start-column~="1s"]), :host([size="l"]) ::slotted([start-column~="1s"]){ grid-column-start: 1; }
:host([size="s"]) ::slotted([columns~="2s"]), :host([size="m"]) ::slotted([columns~="2s"]), :host([size="l"]) ::slotted([columns~="2s"]){ grid-column-end: span 2; }
:host([size="s"]) ::slotted([start-column~="2s"]), :host([size="m"]) ::slotted([start-column~="2s"]), :host([size="l"]) ::slotted([start-column~="2s"]){ grid-column-start: 2; }
:host([size="s"]) ::slotted([columns~="3s"]), :host([size="m"]) ::slotted([columns~="3s"]), :host([size="l"]) ::slotted([columns~="3s"]){ grid-column-end: span 3; }
:host([size="s"]) ::slotted([start-column~="3s"]), :host([size="m"]) ::slotted([start-column~="3s"]), :host([size="l"]) ::slotted([start-column~="3s"]){ grid-column-start: 3; }
:host([size="s"]) ::slotted([columns~="4s"]), :host([size="m"]) ::slotted([columns~="4s"]), :host([size="l"]) ::slotted([columns~="4s"]){ grid-column-end: span 4; }
:host([size="s"]) ::slotted([start-column~="4s"]), :host([size="m"]) ::slotted([start-column~="4s"]), :host([size="l"]) ::slotted([start-column~="4s"]){ grid-column-start: 4; }
:host([size="s"]) ::slotted([columns~="5s"]), :host([size="m"]) ::slotted([columns~="5s"]), :host([size="l"]) ::slotted([columns~="5s"]){ grid-column-end: span 5; }
:host([size="s"]) ::slotted([start-column~="5s"]), :host([size="m"]) ::slotted([start-column~="5s"]), :host([size="l"]) ::slotted([start-column~="5s"]){ grid-column-start: 5; }
:host([size="s"]) ::slotted([columns~="6s"]), :host([size="m"]) ::slotted([columns~="6s"]), :host([size="l"]) ::slotted([columns~="6s"]){ grid-column-end: span 6; }
:host([size="s"]) ::slotted([start-column~="6s"]), :host([size="m"]) ::slotted([start-column~="6s"]), :host([size="l"]) ::slotted([start-column~="6s"]){ grid-column-start: 6; }
:host([size="s"]) ::slotted([columns~="7s"]), :host([size="m"]) ::slotted([columns~="7s"]), :host([size="l"]) ::slotted([columns~="7s"]){ grid-column-end: span 7; }
:host([size="s"]) ::slotted([start-column~="7s"]), :host([size="m"]) ::slotted([start-column~="7s"]), :host([size="l"]) ::slotted([start-column~="7s"]){ grid-column-start: 7; }
:host([size="s"]) ::slotted([columns~="8s"]), :host([size="m"]) ::slotted([columns~="8s"]), :host([size="l"]) ::slotted([columns~="8s"]){ grid-column-end: span 8; }
:host([size="s"]) ::slotted([start-column~="8s"]), :host([size="m"]) ::slotted([start-column~="8s"]), :host([size="l"]) ::slotted([start-column~="8s"]){ grid-column-start: 8; }
:host([size="s"]) ::slotted([columns~="9s"]), :host([size="m"]) ::slotted([columns~="9s"]), :host([size="l"]) ::slotted([columns~="9s"]){ grid-column-end: span 9; }
:host([size="s"]) ::slotted([start-column~="9s"]), :host([size="m"]) ::slotted([start-column~="9s"]), :host([size="l"]) ::slotted([start-column~="9s"]){ grid-column-start: 9; }
:host([size="s"]) ::slotted([columns~="10s"]), :host([size="m"]) ::slotted([columns~="10s"]), :host([size="l"]) ::slotted([columns~="10s"]){ grid-column-end: span 10; }
:host([size="s"]) ::slotted([start-column~="10s"]), :host([size="m"]) ::slotted([start-column~="10s"]), :host([size="l"]) ::slotted([start-column~="10s"]){ grid-column-start: 10; }
:host([size="s"]) ::slotted([columns~="11s"]), :host([size="m"]) ::slotted([columns~="11s"]), :host([size="l"]) ::slotted([columns~="11s"]){ grid-column-end: span 11; }
:host([size="s"]) ::slotted([start-column~="11s"]), :host([size="m"]) ::slotted([start-column~="11s"]), :host([size="l"]) ::slotted([start-column~="11s"]){ grid-column-start: 11; }
:host([size="s"]) ::slotted([columns~="12s"]), :host([size="m"]) ::slotted([columns~="12s"]), :host([size="l"]) ::slotted([columns~="12s"]){ grid-column-end: span 12; }
:host([size="s"]) ::slotted([start-column~="12s"]), :host([size="m"]) ::slotted([start-column~="12s"]), :host([size="l"]) ::slotted([start-column~="12s"]){ grid-column-start: 12; }
:host([size="s"]) ::slotted([columns~="13s"]), :host([size="m"]) ::slotted([columns~="13s"]), :host([size="l"]) ::slotted([columns~="13s"]){ grid-column-end: span 13; }
:host([size="s"]) ::slotted([start-column~="13s"]), :host([size="m"]) ::slotted([start-column~="13s"]), :host([size="l"]) ::slotted([start-column~="13s"]){ grid-column-start: 13; }
:host([size="s"]) ::slotted([columns~="14s"]), :host([size="m"]) ::slotted([columns~="14s"]), :host([size="l"]) ::slotted([columns~="14s"]){ grid-column-end: span 14; }
:host([size="s"]) ::slotted([start-column~="14s"]), :host([size="m"]) ::slotted([start-column~="14s"]), :host([size="l"]) ::slotted([start-column~="14s"]){ grid-column-start: 14; }
:host([size="s"]) ::slotted([columns~="15s"]), :host([size="m"]) ::slotted([columns~="15s"]), :host([size="l"]) ::slotted([columns~="15s"]){ grid-column-end: span 15; }
:host([size="s"]) ::slotted([start-column~="15s"]), :host([size="m"]) ::slotted([start-column~="15s"]), :host([size="l"]) ::slotted([start-column~="15s"]){ grid-column-start: 15; }
:host([size="s"]) ::slotted([columns~="16s"]), :host([size="m"]) ::slotted([columns~="16s"]), :host([size="l"]) ::slotted([columns~="16s"]){ grid-column-end: span 16; }
:host([size="s"]) ::slotted([start-column~="16s"]), :host([size="m"]) ::slotted([start-column~="16s"]), :host([size="l"]) ::slotted([start-column~="16s"]){ grid-column-start: 16; }
:host([size="m"]) ::slotted([start-column~="0m"]){ grid-column-start: auto; }
:host([size="m"]) ::slotted([columns~="1m"]), :host([size="l"]) ::slotted([columns~="1m"]){ grid-column-end: span 1; }
:host([size="m"]) ::slotted([start-column~="1m"]), :host([size="l"]) ::slotted([start-column~="1m"]){ grid-column-start: 1; }
:host([size="m"]) ::slotted([columns~="2m"]), :host([size="l"]) ::slotted([columns~="2m"]){ grid-column-end: span 2; }
:host([size="m"]) ::slotted([start-column~="2m"]), :host([size="l"]) ::slotted([start-column~="2m"]){ grid-column-start: 2; }
:host([size="m"]) ::slotted([columns~="3m"]), :host([size="l"]) ::slotted([columns~="3m"]){ grid-column-end: span 3; }
:host([size="m"]) ::slotted([start-column~="3m"]), :host([size="l"]) ::slotted([start-column~="3m"]){ grid-column-start: 3; }
:host([size="m"]) ::slotted([columns~="4m"]), :host([size="l"]) ::slotted([columns~="4m"]){ grid-column-end: span 4; }
:host([size="m"]) ::slotted([start-column~="4m"]), :host([size="l"]) ::slotted([start-column~="4m"]){ grid-column-start: 4; }
:host([size="m"]) ::slotted([columns~="5m"]), :host([size="l"]) ::slotted([columns~="5m"]){ grid-column-end: span 5; }
:host([size="m"]) ::slotted([start-column~="5m"]), :host([size="l"]) ::slotted([start-column~="5m"]){ grid-column-start: 5; }
:host([size="m"]) ::slotted([columns~="6m"]), :host([size="l"]) ::slotted([columns~="6m"]){ grid-column-end: span 6; }
:host([size="m"]) ::slotted([start-column~="6m"]), :host([size="l"]) ::slotted([start-column~="6m"]){ grid-column-start: 6; }
:host([size="m"]) ::slotted([columns~="7m"]), :host([size="l"]) ::slotted([columns~="7m"]){ grid-column-end: span 7; }
:host([size="m"]) ::slotted([start-column~="7m"]), :host([size="l"]) ::slotted([start-column~="7m"]){ grid-column-start: 7; }
:host([size="m"]) ::slotted([columns~="8m"]), :host([size="l"]) ::slotted([columns~="8m"]){ grid-column-end: span 8; }
:host([size="m"]) ::slotted([start-column~="8m"]), :host([size="l"]) ::slotted([start-column~="8m"]){ grid-column-start: 8; }
:host([size="m"]) ::slotted([columns~="9m"]), :host([size="l"]) ::slotted([columns~="9m"]){ grid-column-end: span 9; }
:host([size="m"]) ::slotted([start-column~="9m"]), :host([size="l"]) ::slotted([start-column~="9m"]){ grid-column-start: 9; }
:host([size="m"]) ::slotted([columns~="10m"]), :host([size="l"]) ::slotted([columns~="10m"]){ grid-column-end: span 10; }
:host([size="m"]) ::slotted([start-column~="10m"]), :host([size="l"]) ::slotted([start-column~="10m"]){ grid-column-start: 10; }
:host([size="m"]) ::slotted([columns~="11m"]), :host([size="l"]) ::slotted([columns~="11m"]){ grid-column-end: span 11; }
:host([size="m"]) ::slotted([start-column~="11m"]), :host([size="l"]) ::slotted([start-column~="11m"]){ grid-column-start: 11; }
:host([size="m"]) ::slotted([columns~="12m"]), :host([size="l"]) ::slotted([columns~="12m"]){ grid-column-end: span 12; }
:host([size="m"]) ::slotted([start-column~="12m"]), :host([size="l"]) ::slotted([start-column~="12m"]){ grid-column-start: 12; }
:host([size="m"]) ::slotted([columns~="13m"]), :host([size="l"]) ::slotted([columns~="13m"]){ grid-column-end: span 13; }
:host([size="m"]) ::slotted([start-column~="13m"]), :host([size="l"]) ::slotted([start-column~="13m"]){ grid-column-start: 13; }
:host([size="m"]) ::slotted([columns~="14m"]), :host([size="l"]) ::slotted([columns~="14m"]){ grid-column-end: span 14; }
:host([size="m"]) ::slotted([start-column~="14m"]), :host([size="l"]) ::slotted([start-column~="14m"]){ grid-column-start: 14; }
:host([size="m"]) ::slotted([columns~="15m"]), :host([size="l"]) ::slotted([columns~="15m"]){ grid-column-end: span 15; }
:host([size="m"]) ::slotted([start-column~="15m"]), :host([size="l"]) ::slotted([start-column~="15m"]){ grid-column-start: 15; }
:host([size="m"]) ::slotted([columns~="16m"]), :host([size="l"]) ::slotted([columns~="16m"]){ grid-column-end: span 16; }
:host([size="m"]) ::slotted([start-column~="16m"]), :host([size="l"]) ::slotted([start-column~="16m"]){ grid-column-start: 16; }
:host([size="l"]) ::slotted([start-column~="0l"]){ grid-column-start: auto; }
:host([size="l"]) ::slotted([columns~="1l"]){ grid-column-end: span 1; }
:host([size="l"]) ::slotted([start-column~="1l"]){ grid-column-start: 1; }
:host([size="l"]) ::slotted([columns~="2l"]){ grid-column-end: span 2; }
:host([size="l"]) ::slotted([start-column~="2l"]){ grid-column-start: 2; }
:host([size="l"]) ::slotted([columns~="3l"]){ grid-column-end: span 3; }
:host([size="l"]) ::slotted([start-column~="3l"]){ grid-column-start: 3; }
:host([size="l"]) ::slotted([columns~="4l"]){ grid-column-end: span 4; }
:host([size="l"]) ::slotted([start-column~="4l"]){ grid-column-start: 4; }
:host([size="l"]) ::slotted([columns~="5l"]){ grid-column-end: span 5; }
:host([size="l"]) ::slotted([start-column~="5l"]){ grid-column-start: 5; }
:host([size="l"]) ::slotted([columns~="6l"]){ grid-column-end: span 6; }
:host([size="l"]) ::slotted([start-column~="6l"]){ grid-column-start: 6; }
:host([size="l"]) ::slotted([columns~="7l"]){ grid-column-end: span 7; }
:host([size="l"]) ::slotted([start-column~="7l"]){ grid-column-start: 7; }
:host([size="l"]) ::slotted([columns~="8l"]){ grid-column-end: span 8; }
:host([size="l"]) ::slotted([start-column~="8l"]){ grid-column-start: 8; }
:host([size="l"]) ::slotted([columns~="9l"]){ grid-column-end: span 9; }
:host([size="l"]) ::slotted([start-column~="9l"]){ grid-column-start: 9; }
:host([size="l"]) ::slotted([columns~="10l"]){ grid-column-end: span 10; }
:host([size="l"]) ::slotted([start-column~="10l"]){ grid-column-start: 10; }
:host([size="l"]) ::slotted([columns~="11l"]){ grid-column-end: span 11; }
:host([size="l"]) ::slotted([start-column~="11l"]){ grid-column-start: 11; }
:host([size="l"]) ::slotted([columns~="12l"]){ grid-column-end: span 12; }
:host([size="l"]) ::slotted([start-column~="12l"]){ grid-column-start: 12; }
:host([size="l"]) ::slotted([columns~="13l"]){ grid-column-end: span 13; }
:host([size="l"]) ::slotted([start-column~="13l"]){ grid-column-start: 13; }
:host([size="l"]) ::slotted([columns~="14l"]){ grid-column-end: span 14; }
:host([size="l"]) ::slotted([start-column~="14l"]){ grid-column-start: 14; }
:host([size="l"]) ::slotted([columns~="15l"]){ grid-column-end: span 15; }
:host([size="l"]) ::slotted([start-column~="15l"]){ grid-column-start: 15; }
:host([size="l"]) ::slotted([columns~="16l"]){ grid-column-end: span 16; }
:host([size="l"]) ::slotted([start-column~="16l"]){ grid-column-start: 16; }

  // rowss with unit
  :host([size="s"]) ::slotted([start-row~="0s"]){ grid-row-start: auto; }
:host([size="s"]) ::slotted([rows~="1s"]), :host([size="m"]) ::slotted([rows~="1s"]), :host([size="l"]) ::slotted([rows~="1s"]){ grid-row-end: span 1; }
:host([size="s"]) ::slotted([start-row~="1s"]), :host([size="m"]) ::slotted([start-row~="1s"]), :host([size="l"]) ::slotted([start-row~="1s"]){ grid-row-start: 1; }
:host([size="s"]) ::slotted([rows~="2s"]), :host([size="m"]) ::slotted([rows~="2s"]), :host([size="l"]) ::slotted([rows~="2s"]){ grid-row-end: span 2; }
:host([size="s"]) ::slotted([start-row~="2s"]), :host([size="m"]) ::slotted([start-row~="2s"]), :host([size="l"]) ::slotted([start-row~="2s"]){ grid-row-start: 2; }
:host([size="s"]) ::slotted([rows~="3s"]), :host([size="m"]) ::slotted([rows~="3s"]), :host([size="l"]) ::slotted([rows~="3s"]){ grid-row-end: span 3; }
:host([size="s"]) ::slotted([start-row~="3s"]), :host([size="m"]) ::slotted([start-row~="3s"]), :host([size="l"]) ::slotted([start-row~="3s"]){ grid-row-start: 3; }
:host([size="s"]) ::slotted([rows~="4s"]), :host([size="m"]) ::slotted([rows~="4s"]), :host([size="l"]) ::slotted([rows~="4s"]){ grid-row-end: span 4; }
:host([size="s"]) ::slotted([start-row~="4s"]), :host([size="m"]) ::slotted([start-row~="4s"]), :host([size="l"]) ::slotted([start-row~="4s"]){ grid-row-start: 4; }
:host([size="s"]) ::slotted([rows~="5s"]), :host([size="m"]) ::slotted([rows~="5s"]), :host([size="l"]) ::slotted([rows~="5s"]){ grid-row-end: span 5; }
:host([size="s"]) ::slotted([start-row~="5s"]), :host([size="m"]) ::slotted([start-row~="5s"]), :host([size="l"]) ::slotted([start-row~="5s"]){ grid-row-start: 5; }
:host([size="s"]) ::slotted([rows~="6s"]), :host([size="m"]) ::slotted([rows~="6s"]), :host([size="l"]) ::slotted([rows~="6s"]){ grid-row-end: span 6; }
:host([size="s"]) ::slotted([start-row~="6s"]), :host([size="m"]) ::slotted([start-row~="6s"]), :host([size="l"]) ::slotted([start-row~="6s"]){ grid-row-start: 6; }
:host([size="s"]) ::slotted([rows~="7s"]), :host([size="m"]) ::slotted([rows~="7s"]), :host([size="l"]) ::slotted([rows~="7s"]){ grid-row-end: span 7; }
:host([size="s"]) ::slotted([start-row~="7s"]), :host([size="m"]) ::slotted([start-row~="7s"]), :host([size="l"]) ::slotted([start-row~="7s"]){ grid-row-start: 7; }
:host([size="s"]) ::slotted([rows~="8s"]), :host([size="m"]) ::slotted([rows~="8s"]), :host([size="l"]) ::slotted([rows~="8s"]){ grid-row-end: span 8; }
:host([size="s"]) ::slotted([start-row~="8s"]), :host([size="m"]) ::slotted([start-row~="8s"]), :host([size="l"]) ::slotted([start-row~="8s"]){ grid-row-start: 8; }
:host([size="s"]) ::slotted([rows~="9s"]), :host([size="m"]) ::slotted([rows~="9s"]), :host([size="l"]) ::slotted([rows~="9s"]){ grid-row-end: span 9; }
:host([size="s"]) ::slotted([start-row~="9s"]), :host([size="m"]) ::slotted([start-row~="9s"]), :host([size="l"]) ::slotted([start-row~="9s"]){ grid-row-start: 9; }
:host([size="s"]) ::slotted([rows~="10s"]), :host([size="m"]) ::slotted([rows~="10s"]), :host([size="l"]) ::slotted([rows~="10s"]){ grid-row-end: span 10; }
:host([size="s"]) ::slotted([start-row~="10s"]), :host([size="m"]) ::slotted([start-row~="10s"]), :host([size="l"]) ::slotted([start-row~="10s"]){ grid-row-start: 10; }
:host([size="s"]) ::slotted([rows~="11s"]), :host([size="m"]) ::slotted([rows~="11s"]), :host([size="l"]) ::slotted([rows~="11s"]){ grid-row-end: span 11; }
:host([size="s"]) ::slotted([start-row~="11s"]), :host([size="m"]) ::slotted([start-row~="11s"]), :host([size="l"]) ::slotted([start-row~="11s"]){ grid-row-start: 11; }
:host([size="s"]) ::slotted([rows~="12s"]), :host([size="m"]) ::slotted([rows~="12s"]), :host([size="l"]) ::slotted([rows~="12s"]){ grid-row-end: span 12; }
:host([size="s"]) ::slotted([start-row~="12s"]), :host([size="m"]) ::slotted([start-row~="12s"]), :host([size="l"]) ::slotted([start-row~="12s"]){ grid-row-start: 12; }
:host([size="s"]) ::slotted([rows~="13s"]), :host([size="m"]) ::slotted([rows~="13s"]), :host([size="l"]) ::slotted([rows~="13s"]){ grid-row-end: span 13; }
:host([size="s"]) ::slotted([start-row~="13s"]), :host([size="m"]) ::slotted([start-row~="13s"]), :host([size="l"]) ::slotted([start-row~="13s"]){ grid-row-start: 13; }
:host([size="s"]) ::slotted([rows~="14s"]), :host([size="m"]) ::slotted([rows~="14s"]), :host([size="l"]) ::slotted([rows~="14s"]){ grid-row-end: span 14; }
:host([size="s"]) ::slotted([start-row~="14s"]), :host([size="m"]) ::slotted([start-row~="14s"]), :host([size="l"]) ::slotted([start-row~="14s"]){ grid-row-start: 14; }
:host([size="s"]) ::slotted([rows~="15s"]), :host([size="m"]) ::slotted([rows~="15s"]), :host([size="l"]) ::slotted([rows~="15s"]){ grid-row-end: span 15; }
:host([size="s"]) ::slotted([start-row~="15s"]), :host([size="m"]) ::slotted([start-row~="15s"]), :host([size="l"]) ::slotted([start-row~="15s"]){ grid-row-start: 15; }
:host([size="s"]) ::slotted([rows~="16s"]), :host([size="m"]) ::slotted([rows~="16s"]), :host([size="l"]) ::slotted([rows~="16s"]){ grid-row-end: span 16; }
:host([size="s"]) ::slotted([start-row~="16s"]), :host([size="m"]) ::slotted([start-row~="16s"]), :host([size="l"]) ::slotted([start-row~="16s"]){ grid-row-start: 16; }
:host([size="m"]) ::slotted([start-row~="0m"]){ grid-row-start: auto; }
:host([size="m"]) ::slotted([rows~="1m"]), :host([size="l"]) ::slotted([rows~="1m"]){ grid-row-end: span 1; }
:host([size="m"]) ::slotted([start-row~="1m"]), :host([size="l"]) ::slotted([start-row~="1m"]){ grid-row-start: 1; }
:host([size="m"]) ::slotted([rows~="2m"]), :host([size="l"]) ::slotted([rows~="2m"]){ grid-row-end: span 2; }
:host([size="m"]) ::slotted([start-row~="2m"]), :host([size="l"]) ::slotted([start-row~="2m"]){ grid-row-start: 2; }
:host([size="m"]) ::slotted([rows~="3m"]), :host([size="l"]) ::slotted([rows~="3m"]){ grid-row-end: span 3; }
:host([size="m"]) ::slotted([start-row~="3m"]), :host([size="l"]) ::slotted([start-row~="3m"]){ grid-row-start: 3; }
:host([size="m"]) ::slotted([rows~="4m"]), :host([size="l"]) ::slotted([rows~="4m"]){ grid-row-end: span 4; }
:host([size="m"]) ::slotted([start-row~="4m"]), :host([size="l"]) ::slotted([start-row~="4m"]){ grid-row-start: 4; }
:host([size="m"]) ::slotted([rows~="5m"]), :host([size="l"]) ::slotted([rows~="5m"]){ grid-row-end: span 5; }
:host([size="m"]) ::slotted([start-row~="5m"]), :host([size="l"]) ::slotted([start-row~="5m"]){ grid-row-start: 5; }
:host([size="m"]) ::slotted([rows~="6m"]), :host([size="l"]) ::slotted([rows~="6m"]){ grid-row-end: span 6; }
:host([size="m"]) ::slotted([start-row~="6m"]), :host([size="l"]) ::slotted([start-row~="6m"]){ grid-row-start: 6; }
:host([size="m"]) ::slotted([rows~="7m"]), :host([size="l"]) ::slotted([rows~="7m"]){ grid-row-end: span 7; }
:host([size="m"]) ::slotted([start-row~="7m"]), :host([size="l"]) ::slotted([start-row~="7m"]){ grid-row-start: 7; }
:host([size="m"]) ::slotted([rows~="8m"]), :host([size="l"]) ::slotted([rows~="8m"]){ grid-row-end: span 8; }
:host([size="m"]) ::slotted([start-row~="8m"]), :host([size="l"]) ::slotted([start-row~="8m"]){ grid-row-start: 8; }
:host([size="m"]) ::slotted([rows~="9m"]), :host([size="l"]) ::slotted([rows~="9m"]){ grid-row-end: span 9; }
:host([size="m"]) ::slotted([start-row~="9m"]), :host([size="l"]) ::slotted([start-row~="9m"]){ grid-row-start: 9; }
:host([size="m"]) ::slotted([rows~="10m"]), :host([size="l"]) ::slotted([rows~="10m"]){ grid-row-end: span 10; }
:host([size="m"]) ::slotted([start-row~="10m"]), :host([size="l"]) ::slotted([start-row~="10m"]){ grid-row-start: 10; }
:host([size="m"]) ::slotted([rows~="11m"]), :host([size="l"]) ::slotted([rows~="11m"]){ grid-row-end: span 11; }
:host([size="m"]) ::slotted([start-row~="11m"]), :host([size="l"]) ::slotted([start-row~="11m"]){ grid-row-start: 11; }
:host([size="m"]) ::slotted([rows~="12m"]), :host([size="l"]) ::slotted([rows~="12m"]){ grid-row-end: span 12; }
:host([size="m"]) ::slotted([start-row~="12m"]), :host([size="l"]) ::slotted([start-row~="12m"]){ grid-row-start: 12; }
:host([size="m"]) ::slotted([rows~="13m"]), :host([size="l"]) ::slotted([rows~="13m"]){ grid-row-end: span 13; }
:host([size="m"]) ::slotted([start-row~="13m"]), :host([size="l"]) ::slotted([start-row~="13m"]){ grid-row-start: 13; }
:host([size="m"]) ::slotted([rows~="14m"]), :host([size="l"]) ::slotted([rows~="14m"]){ grid-row-end: span 14; }
:host([size="m"]) ::slotted([start-row~="14m"]), :host([size="l"]) ::slotted([start-row~="14m"]){ grid-row-start: 14; }
:host([size="m"]) ::slotted([rows~="15m"]), :host([size="l"]) ::slotted([rows~="15m"]){ grid-row-end: span 15; }
:host([size="m"]) ::slotted([start-row~="15m"]), :host([size="l"]) ::slotted([start-row~="15m"]){ grid-row-start: 15; }
:host([size="m"]) ::slotted([rows~="16m"]), :host([size="l"]) ::slotted([rows~="16m"]){ grid-row-end: span 16; }
:host([size="m"]) ::slotted([start-row~="16m"]), :host([size="l"]) ::slotted([start-row~="16m"]){ grid-row-start: 16; }
:host([size="l"]) ::slotted([start-row~="0l"]){ grid-row-start: auto; }
:host([size="l"]) ::slotted([rows~="1l"]){ grid-row-end: span 1; }
:host([size="l"]) ::slotted([start-row~="1l"]){ grid-row-start: 1; }
:host([size="l"]) ::slotted([rows~="2l"]){ grid-row-end: span 2; }
:host([size="l"]) ::slotted([start-row~="2l"]){ grid-row-start: 2; }
:host([size="l"]) ::slotted([rows~="3l"]){ grid-row-end: span 3; }
:host([size="l"]) ::slotted([start-row~="3l"]){ grid-row-start: 3; }
:host([size="l"]) ::slotted([rows~="4l"]){ grid-row-end: span 4; }
:host([size="l"]) ::slotted([start-row~="4l"]){ grid-row-start: 4; }
:host([size="l"]) ::slotted([rows~="5l"]){ grid-row-end: span 5; }
:host([size="l"]) ::slotted([start-row~="5l"]){ grid-row-start: 5; }
:host([size="l"]) ::slotted([rows~="6l"]){ grid-row-end: span 6; }
:host([size="l"]) ::slotted([start-row~="6l"]){ grid-row-start: 6; }
:host([size="l"]) ::slotted([rows~="7l"]){ grid-row-end: span 7; }
:host([size="l"]) ::slotted([start-row~="7l"]){ grid-row-start: 7; }
:host([size="l"]) ::slotted([rows~="8l"]){ grid-row-end: span 8; }
:host([size="l"]) ::slotted([start-row~="8l"]){ grid-row-start: 8; }
:host([size="l"]) ::slotted([rows~="9l"]){ grid-row-end: span 9; }
:host([size="l"]) ::slotted([start-row~="9l"]){ grid-row-start: 9; }
:host([size="l"]) ::slotted([rows~="10l"]){ grid-row-end: span 10; }
:host([size="l"]) ::slotted([start-row~="10l"]){ grid-row-start: 10; }
:host([size="l"]) ::slotted([rows~="11l"]){ grid-row-end: span 11; }
:host([size="l"]) ::slotted([start-row~="11l"]){ grid-row-start: 11; }
:host([size="l"]) ::slotted([rows~="12l"]){ grid-row-end: span 12; }
:host([size="l"]) ::slotted([start-row~="12l"]){ grid-row-start: 12; }
:host([size="l"]) ::slotted([rows~="13l"]){ grid-row-end: span 13; }
:host([size="l"]) ::slotted([start-row~="13l"]){ grid-row-start: 13; }
:host([size="l"]) ::slotted([rows~="14l"]){ grid-row-end: span 14; }
:host([size="l"]) ::slotted([start-row~="14l"]){ grid-row-start: 14; }
:host([size="l"]) ::slotted([rows~="15l"]){ grid-row-end: span 15; }
:host([size="l"]) ::slotted([start-row~="15l"]){ grid-row-start: 15; }
:host([size="l"]) ::slotted([rows~="16l"]){ grid-row-end: span 16; }
:host([size="l"]) ::slotted([start-row~="16l"]){ grid-row-start: 16; }

  </style>`

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
        let gridGap = window.getComputedStyle(element).gridColumnGap;
        element.style.gridColumnGap = 0;
        let elementWidth = element.clientWidth;
        element.style.gridColumnGap = gridGap;
        let prev = null;
        let last = Object.keys(element.breakpoints)[Object.keys(element.breakpoints).length - 1];
        for (let breakpoint in element.breakpoints) {
            if (elementWidth >= element.breakpoints[breakpoint] || prev === null) {
                prev = {
                    boundary: element.breakpoints[breakpoint],
                    size: breakpoint
                };
            }
            if (elementWidth < element.breakpoints[breakpoint] || last === breakpoint) {
                let oldSize = element.getAttribute('size');
                if (oldSize !== prev.size) {
                    element.dispatchEvent(new CustomEvent('sizechange', { detail: {
                            size: prev.size,
                            pixelBoundary: prev.boundary,
                            prevSize: oldSize
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
