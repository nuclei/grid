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
  ::slotted([columns~="1"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="1s"]), :host([size="m"]) ::slotted([columns~="1s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="1m"]), :host([size="l"]) ::slotted([columns~="1s"]), :host([size="l"]) ::slotted([columns~="1m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="1l"]){ grid-column-end: span 1; }
  ::slotted([columns~="2"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="2s"]), :host([size="m"]) ::slotted([columns~="2s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="2m"]), :host([size="l"]) ::slotted([columns~="2s"]), :host([size="l"]) ::slotted([columns~="2m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="2l"]){ grid-column-end: span 2; }
  ::slotted([columns~="3"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="3s"]), :host([size="m"]) ::slotted([columns~="3s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="3m"]), :host([size="l"]) ::slotted([columns~="3s"]), :host([size="l"]) ::slotted([columns~="3m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="3l"]){ grid-column-end: span 3; }
  ::slotted([columns~="4"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="4s"]), :host([size="m"]) ::slotted([columns~="4s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="4m"]), :host([size="l"]) ::slotted([columns~="4s"]), :host([size="l"]) ::slotted([columns~="4m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="4l"]){ grid-column-end: span 4; }
  ::slotted([columns~="5"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="5s"]), :host([size="m"]) ::slotted([columns~="5s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="5m"]), :host([size="l"]) ::slotted([columns~="5s"]), :host([size="l"]) ::slotted([columns~="5m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="5l"]){ grid-column-end: span 5; }
  ::slotted([columns~="6"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="6s"]), :host([size="m"]) ::slotted([columns~="6s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="6m"]), :host([size="l"]) ::slotted([columns~="6s"]), :host([size="l"]) ::slotted([columns~="6m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="6l"]){ grid-column-end: span 6; }
  ::slotted([columns~="7"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="7s"]), :host([size="m"]) ::slotted([columns~="7s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="7m"]), :host([size="l"]) ::slotted([columns~="7s"]), :host([size="l"]) ::slotted([columns~="7m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="7l"]){ grid-column-end: span 7; }
  ::slotted([columns~="8"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="8s"]), :host([size="m"]) ::slotted([columns~="8s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="8m"]), :host([size="l"]) ::slotted([columns~="8s"]), :host([size="l"]) ::slotted([columns~="8m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="8l"]){ grid-column-end: span 8; }
  ::slotted([columns~="9"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="9s"]), :host([size="m"]) ::slotted([columns~="9s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="9m"]), :host([size="l"]) ::slotted([columns~="9s"]), :host([size="l"]) ::slotted([columns~="9m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="9l"]){ grid-column-end: span 9; }
  ::slotted([columns~="10"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="10s"]), :host([size="m"]) ::slotted([columns~="10s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="10m"]), :host([size="l"]) ::slotted([columns~="10s"]), :host([size="l"]) ::slotted([columns~="10m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="10l"]){ grid-column-end: span 10; }
  ::slotted([columns~="11"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="11s"]), :host([size="m"]) ::slotted([columns~="11s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="11m"]), :host([size="l"]) ::slotted([columns~="11s"]), :host([size="l"]) ::slotted([columns~="11m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="11l"]){ grid-column-end: span 11; }
  ::slotted([columns~="12"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="12s"]), :host([size="m"]) ::slotted([columns~="12s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="12m"]), :host([size="l"]) ::slotted([columns~="12s"]), :host([size="l"]) ::slotted([columns~="12m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="12l"]){ grid-column-end: span 12; }
  ::slotted([columns~="13"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="13s"]), :host([size="m"]) ::slotted([columns~="13s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="13m"]), :host([size="l"]) ::slotted([columns~="13s"]), :host([size="l"]) ::slotted([columns~="13m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="13l"]){ grid-column-end: span 13; }
  ::slotted([columns~="14"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="14s"]), :host([size="m"]) ::slotted([columns~="14s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="14m"]), :host([size="l"]) ::slotted([columns~="14s"]), :host([size="l"]) ::slotted([columns~="14m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="14l"]){ grid-column-end: span 14; }
  ::slotted([columns~="15"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="15s"]), :host([size="m"]) ::slotted([columns~="15s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="15m"]), :host([size="l"]) ::slotted([columns~="15s"]), :host([size="l"]) ::slotted([columns~="15m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="15l"]){ grid-column-end: span 15; }
  ::slotted([columns~="16"]), :host([size="s"]):host([size="s"]) ::slotted([columns~="16s"]), :host([size="m"]) ::slotted([columns~="16s"]), :host([size="m"]):host([size="m"]) ::slotted([columns~="16m"]), :host([size="l"]) ::slotted([columns~="16s"]), :host([size="l"]) ::slotted([columns~="16m"]), :host([size="l"]):host([size="l"]) ::slotted([columns~="16l"]){ grid-column-end: span 16; }

  ::slotted([rows~="1"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="1s"]), :host([size="m"]) ::slotted([rows~="1s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="1m"]), :host([size="l"]) ::slotted([rows~="1s"]), :host([size="l"]) ::slotted([rows~="1m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="1l"]){ grid-row-end: span 1; }
  ::slotted([rows~="2"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="2s"]), :host([size="m"]) ::slotted([rows~="2s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="2m"]), :host([size="l"]) ::slotted([rows~="2s"]), :host([size="l"]) ::slotted([rows~="2m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="2l"]){ grid-row-end: span 2; }
  ::slotted([rows~="3"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="3s"]), :host([size="m"]) ::slotted([rows~="3s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="3m"]), :host([size="l"]) ::slotted([rows~="3s"]), :host([size="l"]) ::slotted([rows~="3m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="3l"]){ grid-row-end: span 3; }
  ::slotted([rows~="4"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="4s"]), :host([size="m"]) ::slotted([rows~="4s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="4m"]), :host([size="l"]) ::slotted([rows~="4s"]), :host([size="l"]) ::slotted([rows~="4m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="4l"]){ grid-row-end: span 4; }
  ::slotted([rows~="5"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="5s"]), :host([size="m"]) ::slotted([rows~="5s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="5m"]), :host([size="l"]) ::slotted([rows~="5s"]), :host([size="l"]) ::slotted([rows~="5m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="5l"]){ grid-row-end: span 5; }
  ::slotted([rows~="6"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="6s"]), :host([size="m"]) ::slotted([rows~="6s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="6m"]), :host([size="l"]) ::slotted([rows~="6s"]), :host([size="l"]) ::slotted([rows~="6m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="6l"]){ grid-row-end: span 6; }
  ::slotted([rows~="7"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="7s"]), :host([size="m"]) ::slotted([rows~="7s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="7m"]), :host([size="l"]) ::slotted([rows~="7s"]), :host([size="l"]) ::slotted([rows~="7m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="7l"]){ grid-row-end: span 7; }
  ::slotted([rows~="8"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="8s"]), :host([size="m"]) ::slotted([rows~="8s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="8m"]), :host([size="l"]) ::slotted([rows~="8s"]), :host([size="l"]) ::slotted([rows~="8m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="8l"]){ grid-row-end: span 8; }
  ::slotted([rows~="9"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="9s"]), :host([size="m"]) ::slotted([rows~="9s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="9m"]), :host([size="l"]) ::slotted([rows~="9s"]), :host([size="l"]) ::slotted([rows~="9m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="9l"]){ grid-row-end: span 9; }
  ::slotted([rows~="10"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="10s"]), :host([size="m"]) ::slotted([rows~="10s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="10m"]), :host([size="l"]) ::slotted([rows~="10s"]), :host([size="l"]) ::slotted([rows~="10m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="10l"]){ grid-row-end: span 10; }
  ::slotted([rows~="11"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="11s"]), :host([size="m"]) ::slotted([rows~="11s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="11m"]), :host([size="l"]) ::slotted([rows~="11s"]), :host([size="l"]) ::slotted([rows~="11m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="11l"]){ grid-row-end: span 11; }
  ::slotted([rows~="12"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="12s"]), :host([size="m"]) ::slotted([rows~="12s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="12m"]), :host([size="l"]) ::slotted([rows~="12s"]), :host([size="l"]) ::slotted([rows~="12m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="12l"]){ grid-row-end: span 12; }
  ::slotted([rows~="13"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="13s"]), :host([size="m"]) ::slotted([rows~="13s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="13m"]), :host([size="l"]) ::slotted([rows~="13s"]), :host([size="l"]) ::slotted([rows~="13m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="13l"]){ grid-row-end: span 13; }
  ::slotted([rows~="14"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="14s"]), :host([size="m"]) ::slotted([rows~="14s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="14m"]), :host([size="l"]) ::slotted([rows~="14s"]), :host([size="l"]) ::slotted([rows~="14m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="14l"]){ grid-row-end: span 14; }
  ::slotted([rows~="15"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="15s"]), :host([size="m"]) ::slotted([rows~="15s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="15m"]), :host([size="l"]) ::slotted([rows~="15s"]), :host([size="l"]) ::slotted([rows~="15m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="15l"]){ grid-row-end: span 15; }
  ::slotted([rows~="16"]), :host([size="s"]):host([size="s"]) ::slotted([rows~="16s"]), :host([size="m"]) ::slotted([rows~="16s"]), :host([size="m"]):host([size="m"]) ::slotted([rows~="16m"]), :host([size="l"]) ::slotted([rows~="16s"]), :host([size="l"]) ::slotted([rows~="16m"]), :host([size="l"]):host([size="l"]) ::slotted([rows~="16l"]){ grid-row-end: span 16; }

  ::slotted([start-column~="0"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="0s"]), :host([size="m"]) ::slotted([start-column~="0s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="0m"]), :host([size="l"]) ::slotted([start-column~="0s"]), :host([size="l"]) ::slotted([start-column~="0m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="0l"]){ grid-column-start: auto; }
  ::slotted([start-column~="1"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="1s"]), :host([size="m"]) ::slotted([start-column~="1s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="1m"]), :host([size="l"]) ::slotted([start-column~="1s"]), :host([size="l"]) ::slotted([start-column~="1m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="1l"]){ grid-column-start: 1; }
  ::slotted([start-column~="2"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="2s"]), :host([size="m"]) ::slotted([start-column~="2s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="2m"]), :host([size="l"]) ::slotted([start-column~="2s"]), :host([size="l"]) ::slotted([start-column~="2m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="2l"]){ grid-column-start: 2; }
  ::slotted([start-column~="3"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="3s"]), :host([size="m"]) ::slotted([start-column~="3s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="3m"]), :host([size="l"]) ::slotted([start-column~="3s"]), :host([size="l"]) ::slotted([start-column~="3m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="3l"]){ grid-column-start: 3; }
  ::slotted([start-column~="4"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="4s"]), :host([size="m"]) ::slotted([start-column~="4s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="4m"]), :host([size="l"]) ::slotted([start-column~="4s"]), :host([size="l"]) ::slotted([start-column~="4m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="4l"]){ grid-column-start: 4; }
  ::slotted([start-column~="5"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="5s"]), :host([size="m"]) ::slotted([start-column~="5s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="5m"]), :host([size="l"]) ::slotted([start-column~="5s"]), :host([size="l"]) ::slotted([start-column~="5m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="5l"]){ grid-column-start: 5; }
  ::slotted([start-column~="6"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="6s"]), :host([size="m"]) ::slotted([start-column~="6s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="6m"]), :host([size="l"]) ::slotted([start-column~="6s"]), :host([size="l"]) ::slotted([start-column~="6m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="6l"]){ grid-column-start: 6; }
  ::slotted([start-column~="7"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="7s"]), :host([size="m"]) ::slotted([start-column~="7s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="7m"]), :host([size="l"]) ::slotted([start-column~="7s"]), :host([size="l"]) ::slotted([start-column~="7m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="7l"]){ grid-column-start: 7; }
  ::slotted([start-column~="8"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="8s"]), :host([size="m"]) ::slotted([start-column~="8s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="8m"]), :host([size="l"]) ::slotted([start-column~="8s"]), :host([size="l"]) ::slotted([start-column~="8m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="8l"]){ grid-column-start: 8; }
  ::slotted([start-column~="9"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="9s"]), :host([size="m"]) ::slotted([start-column~="9s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="9m"]), :host([size="l"]) ::slotted([start-column~="9s"]), :host([size="l"]) ::slotted([start-column~="9m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="9l"]){ grid-column-start: 9; }
  ::slotted([start-column~="10"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="10s"]), :host([size="m"]) ::slotted([start-column~="10s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="10m"]), :host([size="l"]) ::slotted([start-column~="10s"]), :host([size="l"]) ::slotted([start-column~="10m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="10l"]){ grid-column-start: 10; }
  ::slotted([start-column~="11"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="11s"]), :host([size="m"]) ::slotted([start-column~="11s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="11m"]), :host([size="l"]) ::slotted([start-column~="11s"]), :host([size="l"]) ::slotted([start-column~="11m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="11l"]){ grid-column-start: 11; }
  ::slotted([start-column~="12"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="12s"]), :host([size="m"]) ::slotted([start-column~="12s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="12m"]), :host([size="l"]) ::slotted([start-column~="12s"]), :host([size="l"]) ::slotted([start-column~="12m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="12l"]){ grid-column-start: 12; }
  ::slotted([start-column~="13"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="13s"]), :host([size="m"]) ::slotted([start-column~="13s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="13m"]), :host([size="l"]) ::slotted([start-column~="13s"]), :host([size="l"]) ::slotted([start-column~="13m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="13l"]){ grid-column-start: 13; }
  ::slotted([start-column~="14"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="14s"]), :host([size="m"]) ::slotted([start-column~="14s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="14m"]), :host([size="l"]) ::slotted([start-column~="14s"]), :host([size="l"]) ::slotted([start-column~="14m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="14l"]){ grid-column-start: 14; }
  ::slotted([start-column~="15"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="15s"]), :host([size="m"]) ::slotted([start-column~="15s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="15m"]), :host([size="l"]) ::slotted([start-column~="15s"]), :host([size="l"]) ::slotted([start-column~="15m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="15l"]){ grid-column-start: 15; }
  ::slotted([start-column~="16"]), :host([size="s"]):host([size="s"]) ::slotted([start-column~="16s"]), :host([size="m"]) ::slotted([start-column~="16s"]), :host([size="m"]):host([size="m"]) ::slotted([start-column~="16m"]), :host([size="l"]) ::slotted([start-column~="16s"]), :host([size="l"]) ::slotted([start-column~="16m"]), :host([size="l"]):host([size="l"]) ::slotted([start-column~="16l"]){ grid-column-start: 16; }

  ::slotted([start-row~="0"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="0s"]), :host([size="m"]) ::slotted([start-row~="0s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="0m"]), :host([size="l"]) ::slotted([start-row~="0s"]), :host([size="l"]) ::slotted([start-row~="0m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="0l"]){ grid-row-start: auto; }
  ::slotted([start-row~="1"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="1s"]), :host([size="m"]) ::slotted([start-row~="1s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="1m"]), :host([size="l"]) ::slotted([start-row~="1s"]), :host([size="l"]) ::slotted([start-row~="1m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="1l"]){ grid-row-start: 1; }
  ::slotted([start-row~="2"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="2s"]), :host([size="m"]) ::slotted([start-row~="2s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="2m"]), :host([size="l"]) ::slotted([start-row~="2s"]), :host([size="l"]) ::slotted([start-row~="2m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="2l"]){ grid-row-start: 2; }
  ::slotted([start-row~="3"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="3s"]), :host([size="m"]) ::slotted([start-row~="3s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="3m"]), :host([size="l"]) ::slotted([start-row~="3s"]), :host([size="l"]) ::slotted([start-row~="3m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="3l"]){ grid-row-start: 3; }
  ::slotted([start-row~="4"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="4s"]), :host([size="m"]) ::slotted([start-row~="4s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="4m"]), :host([size="l"]) ::slotted([start-row~="4s"]), :host([size="l"]) ::slotted([start-row~="4m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="4l"]){ grid-row-start: 4; }
  ::slotted([start-row~="5"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="5s"]), :host([size="m"]) ::slotted([start-row~="5s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="5m"]), :host([size="l"]) ::slotted([start-row~="5s"]), :host([size="l"]) ::slotted([start-row~="5m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="5l"]){ grid-row-start: 5; }
  ::slotted([start-row~="6"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="6s"]), :host([size="m"]) ::slotted([start-row~="6s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="6m"]), :host([size="l"]) ::slotted([start-row~="6s"]), :host([size="l"]) ::slotted([start-row~="6m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="6l"]){ grid-row-start: 6; }
  ::slotted([start-row~="7"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="7s"]), :host([size="m"]) ::slotted([start-row~="7s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="7m"]), :host([size="l"]) ::slotted([start-row~="7s"]), :host([size="l"]) ::slotted([start-row~="7m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="7l"]){ grid-row-start: 7; }
  ::slotted([start-row~="8"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="8s"]), :host([size="m"]) ::slotted([start-row~="8s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="8m"]), :host([size="l"]) ::slotted([start-row~="8s"]), :host([size="l"]) ::slotted([start-row~="8m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="8l"]){ grid-row-start: 8; }
  ::slotted([start-row~="9"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="9s"]), :host([size="m"]) ::slotted([start-row~="9s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="9m"]), :host([size="l"]) ::slotted([start-row~="9s"]), :host([size="l"]) ::slotted([start-row~="9m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="9l"]){ grid-row-start: 9; }
  ::slotted([start-row~="10"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="10s"]), :host([size="m"]) ::slotted([start-row~="10s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="10m"]), :host([size="l"]) ::slotted([start-row~="10s"]), :host([size="l"]) ::slotted([start-row~="10m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="10l"]){ grid-row-start: 10; }
  ::slotted([start-row~="11"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="11s"]), :host([size="m"]) ::slotted([start-row~="11s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="11m"]), :host([size="l"]) ::slotted([start-row~="11s"]), :host([size="l"]) ::slotted([start-row~="11m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="11l"]){ grid-row-start: 11; }
  ::slotted([start-row~="12"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="12s"]), :host([size="m"]) ::slotted([start-row~="12s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="12m"]), :host([size="l"]) ::slotted([start-row~="12s"]), :host([size="l"]) ::slotted([start-row~="12m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="12l"]){ grid-row-start: 12; }
  ::slotted([start-row~="13"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="13s"]), :host([size="m"]) ::slotted([start-row~="13s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="13m"]), :host([size="l"]) ::slotted([start-row~="13s"]), :host([size="l"]) ::slotted([start-row~="13m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="13l"]){ grid-row-start: 13; }
  ::slotted([start-row~="14"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="14s"]), :host([size="m"]) ::slotted([start-row~="14s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="14m"]), :host([size="l"]) ::slotted([start-row~="14s"]), :host([size="l"]) ::slotted([start-row~="14m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="14l"]){ grid-row-start: 14; }
  ::slotted([start-row~="15"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="15s"]), :host([size="m"]) ::slotted([start-row~="15s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="15m"]), :host([size="l"]) ::slotted([start-row~="15s"]), :host([size="l"]) ::slotted([start-row~="15m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="15l"]){ grid-row-start: 15; }
  ::slotted([start-row~="16"]), :host([size="s"]):host([size="s"]) ::slotted([start-row~="16s"]), :host([size="m"]) ::slotted([start-row~="16s"]), :host([size="m"]):host([size="m"]) ::slotted([start-row~="16m"]), :host([size="l"]) ::slotted([start-row~="16s"]), :host([size="l"]) ::slotted([start-row~="16m"]), :host([size="l"]):host([size="l"]) ::slotted([start-row~="16l"]){ grid-row-start: 16; }

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
