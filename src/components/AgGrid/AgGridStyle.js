import { createGlobalStyle } from 'styled-components';

// base style sheet for ag-grid-belham
export default createGlobalStyle`
    .ag-hidden {
      display: none !important;
    }
    
    .ag-invisible {
      visibility: hidden !important;
    }
    
    .ag-faded {
      opacity: 0.3;
    }
    
    .ag-width-half {
      display: inline-block;
      width: 50% !important;
    }
    
    .ag-unselectable {
      user-select: none !important;
    }
    
    .ag-selectable {
      user-select: text !important;
    }
    
    .ag-select-agg-func-popup {
      position: absolute;
    }
    
    .ag-input-text-wrapper {
      display: flex;
      align-items: center;
      height: 100%;
      line-height: normal;
      position: relative;
    }
    
    .ag-shake-left-to-right {
      animation-direction: alternate;
      animation-duration: 0.2s;
      animation-iteration-count: infinite;
      animation-name: ag-shake-left-to-right;
    }
    
    @-webkit-keyframes ag-shake-left-to-right {
      from {
        padding-left: 6px;
        padding-right: 2px;
      }
      to {
        padding-left: 2px;
        padding-right: 6px;
      }
    }
    
    @keyframes ag-shake-left-to-right {
      from {
        padding-left: 6px;
        padding-right: 2px;
      }
      to {
        padding-left: 2px;
        padding-right: 6px;
      }
    }
    
    .ag-root-wrapper {
      position: relative;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      box-sizing: border-box;
    }
    
    .ag-root-wrapper *, .ag-root-wrapper *:before, .ag-root-wrapper *:after {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    
    .ag-root-wrapper.ag-layout-normal {
      height: 100%;
    }
    
    .ag-root-wrapper-body {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      height: 100%;
    }
    
    .ag-root {
      cursor: default;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      height: 100%;
    }
    
    .ag-root.ag-layout-normal, .ag-root.ag-layout-auto-height {
      overflow: hidden;
      min-width: 0;
    }
    
    .ag-header-viewport,
    .ag-floating-top-viewport,
    .ag-body-viewport,
    .ag-pinned-left-cols-viewport,
    .ag-center-cols-viewport,
    .ag-pinned-right-cols-viewport,
    .ag-floating-bottom-viewport,
    .ag-body-horizontal-scroll-viewport,
    .ag-virtual-list-viewport {
      position: relative;
      height: 100%;
      min-width: 0px;
      overflow: hidden;
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
    }
    
    .ag-body-viewport {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    
    .ag-body-viewport.ag-layout-normal {
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
    }
    
    .ag-body-viewport:not(.ag-layout-print).ag-force-vertical-scroll {
      overflow-y: scroll;
    }
    
    .ag-pinned-left-cols-viewport, .ag-pinned-right-cols-viewport {
      -webkit-box-flex: 1000;
      -ms-flex-positive: 1000;
      flex-grow: 1000;
    }
    
    .ag-center-cols-viewport {
      width: 100%;
      overflow-x: auto;
    }
    
    .ag-body-horizontal-scroll-viewport {
      overflow-x: scroll;
    }
    
    .ag-virtual-list-viewport {
      overflow: auto;
      width: 100%;
    }
    
    .ag-header-container,
    .ag-floating-top-container,
    .ag-body-container,
    .ag-pinned-right-cols-container,
    .ag-center-cols-container,
    .ag-pinned-left-cols-container,
    .ag-floating-bottom-container,
    .ag-body-horizontal-scroll-container,
    .ag-full-width-container,
    .ag-floating-bottom-full-width-container,
    .ag-virtual-list-container {
      position: relative;
    }
    
    .ag-header-container, .ag-floating-top-container, .ag-floating-bottom-container {
      height: 100%;
      white-space: nowrap;
    }
    
    .ag-body-viewport .ag-center-cols-clipper {
      min-height: 100%;
    }
    
    .ag-body-viewport.ag-layout-auto-height .ag-center-cols-clipper, .ag-body-viewport.ag-layout-auto-height .ag-center-cols-container {
      min-height: 50px;
    }
    
    .ag-body-viewport .ag-center-cols-container {
      display: block;
    }
    
    .ag-body-viewport.ag-layout-print {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
    }
    
    .ag-body-viewport.ag-layout-print .ag-center-cols-clipper {
      min-width: 100%;
    }
    
    .ag-pinned-right-cols-container {
      display: block;
    }
    
    .ag-body-horizontal-scroll-container {
      height: 100%;
    }
    
    .ag-full-width-container,
    .ag-floating-top-full-width-container,
    .ag-floating-bottom-full-width-container {
      position: absolute;
      top: 0px;
      left: 0px;
      pointer-events: none;
    }
    
    .ag-full-width-container {
      width: 100%;
    }
    
    .ag-floating-bottom-full-width-container, .ag-floating-top-full-width-container {
      display: inline-block;
      overflow: hidden;
      height: 100%;
      width: 100%;
    }
    
    .ag-virtual-list-container {
      overflow: hidden;
    }
    
    
    .ag-center-cols-clipper {
      flex: 1;
      min-width: 0;
      width: 100%;
      overflow: hidden;
    }
    
    .ag-body-horizontal-scroll {
      min-height: 0;
      min-width: 0;
      width: 100%;
      display: flex;
      position: relative;
    }
    
    .ag-layout-print .ag-body-horizontal-scroll {
      display: none;
    }
    
    .ag-horizontal-left-spacer, .ag-horizontal-right-spacer {
      height: 100%;
      min-width: 0;
      flex-grow: 1000;
      overflow-x: scroll;
    }
    
    .ag-horizontal-left-spacer.ag-scroller-corner, .ag-horizontal-right-spacer.ag-scroller-corner {
      overflow-x: hidden;
    }
    
    .ag-header, .ag-pinned-left-header, .ag-pinned-right-header {
      display: inline-block;
      overflow: hidden;
    }
    
    .ag-header .ag-header-cell-sortable, .ag-pinned-left-header .ag-header-cell-sortable, .ag-pinned-right-header .ag-header-cell-sortable {
      cursor: pointer;
    }
    
    .ag-header {
      display: flex;
      width: 100%;
      white-space: nowrap;
    }
    
    .ag-pinned-left-header {
      height: 100%;
    }
    
    .ag-pinned-right-header {
      height: 100%;
    }
    
    .ag-header-overlay {
      display: block;
      position: absolute;
    }
    
    .ag-header-cell {
      display: inline-block;
      height: 100%;
      position: absolute;
      vertical-align: bottom;
      overflow: visible;
    }
    
    .ag-header-group-cell-label {
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
    }
    
    .ag-header-cell-label {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .ag-header-cell-resize {
      position: absolute;
      z-index: 4;
      cursor: col-resize;
      height: 100%;
      width: 4px;
    }
    
    .ag-header-expand-icon {
      padding-left: 4px;
    }
    
    .ag-header-cell-menu-button {
      float: right;
    }
    
    .ag-primary-cols-header-panel .ag-column-name-filter {
      flex-grow: 1;
      flex-shrink: 1;
    }
    
    .ag-primary-cols-header-panel .ag-primary-cols-filter-wrapper {
      width: 100%;
    }
    
    .ag-primary-cols-header-panel {
      display: flex;
      flex-direction: row;
    }
    
    .ag-column-moving .ag-cell {
      transition: left 0.2s;
    }
    
    .ag-column-moving .ag-header-cell {
      transition: left 0.2s;
    }
    
    .ag-column-moving .ag-header-group-cell {
      transition: left 0.2s, width 0.2s;
    }
    
    .ag-column-drop {
      width: 100%;
    }
    
    .ag-column-drop-vertical {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      height: 50px;
      overflow: hidden;
    }
    
    .ag-column-drop-vertical .ag-column-drop-list {
      flex-grow: 1;
      height: 20px;
      overflow-x: auto;
    }
    
    .ag-column-drop-vertical .ag-column-drop-cell {
      display: flex;
    }
    
    .ag-column-drop-vertical .ag-column-drop-cell .ag-column-drop-cell-text {
      overflow: hidden;
      flex: 1;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .ag-column-drop-vertical .ag-column-drop-empty-message {
      display: block;
    }
    
    .ag-column-drop-vertical .ag-column-drop-cell-button {
      line-height: 16px;
    }
    
    .ag-ltr .ag-column-drop-vertical .ag-column-drop-cell-button {
      float: right;
    }
    
    .ag-rtl .ag-column-drop-vertical .ag-column-drop-cell-button {
      float: left;
    }
    
    .ag-column-drop-horizontal {
      white-space: nowrap;
      overflow: hidden;
    }
    
    .ag-column-drop-horizontal .ag-column-drop-cell {
      display: inline-block;
    }
    
    .ag-column-drop-horizontal .ag-column-drop-empty-message {
      display: inline-block;
    }
    
    .ag-column-drop-horizontal .ag-column-drop-list {
      height: 100%;
    }
    
    .ag-column-select-indent {
      display: inline-block;
    }
    
    .ag-column-panel {
      display: flex;
      min-height: 400px;
      flex-direction: column;
      flex-grow: 1;
      overflow-x: hidden;
      max-height: 100vh;
    }
    
    .ag-row-animation .ag-row {
      transition: top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;
      transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s;
      transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;
    }
    
    .ag-row-no-animation .ag-row {
      transition: background-color 0.1s;
    }
    
    .ag-row {
      white-space: nowrap;
      width: 100%;
    }
    
    .ag-row-position-absolute {
      position: absolute;
    }
    
    .ag-row-position-relative {
      position: relative;
    }
    
    .ag-full-width-row {
      overflow: hidden;
      pointer-events: all;
    }
    
    .ag-row-inline-editing {
      z-index: 1;
    }
    
    .ag-cell {
      display: inline-block;
      overflow: hidden;
      position: absolute;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .ag-cell-with-height {
      height: 100%;
    }
    
    .ag-cell-edit-input {
      height: 100%;
      width: 100%;
      line-height: normal;
    }
    
    .ag-group-cell-entire-row {
      display: inline-block;
      height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }
    
    .ag-footer-cell-entire-row {
      display: inline-block;
      height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }
    
    .ag-set-filter-item {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .ag-filter-filter {
      width: 100%;
    }
    
    .ag-filter .ag-filter-checkbox {
      pointer-events: none;
    }
    
    .ag-filter-select {
      margin: 4px 4px 0 4px;
      width: 110px;
    }
    
    .ag-floating-filter-body input {
      height: 19px;
      margin: 0;
      width: 100%;
    }
    
    .ag-floating-filter-full-body input {
      height: 19px;
      margin: 0;
      width: 100%;
    }
    
    .ag-floating-filter-full-body input[type="range"] {
      height: 100%;
    }
    
    .ag-floating-filter {
      display: inline-block;
      position: absolute;
    }
    
    .ag-floating-filter-body {
      height: 20px;
      margin-right: 25px;
    }
    
    .ag-floating-filter-full-body {
      height: 100%;
      width: 100%;
    }
    
    .ag-floating-filter-full-body .ag-react-container {
      height: 100%;
    }
    
    .ag-floating-filter-input {
      width: 100%;
    }
    
    .ag-floating-filter-input:-moz-read-only {
      background-color: #eee;
    }
    
    .ag-floating-filter-input:read-only {
      background-color: #eee;
    }
    
    .ag-floating-filter-menu {
      position: absolute;
      user-select: none;
    }
    
    .ag-dnd-ghost {
      background: #e5e5e5;
      border: 1px solid black;
      cursor: move;
<!--      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;-->
      font-size: 14px;
      line-height: 1.4;
      overflow: hidden;
      padding: 3px;
      position: absolute;
      text-overflow: ellipsis;
      user-select: none;
    }
    
    .ag-dnd-ghost-icon {
      display: inline-block;
      padding: 2px;
    }
    
    .ag-dnd-ghost-label {
      display: inline-block;
    }
    
    .ag-overlay {
      height: 100%;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 100%;
    }
    
    .ag-overlay-panel {
      display: table;
      height: 100%;
      pointer-events: none;
      width: 100%;
    }
    
    .ag-overlay-wrapper {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
    }
    
    .ag-overlay-no-rows-wrapper.ag-layout-auto-height {
      padding-top: 30px;
    }
    
    .ag-popup-backdrop {
      height: 100%;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;
    }
    
    .ag-popup-editor {
      position: absolute;
      user-select: none;
    }
    
    .ag-virtual-list-item {
      position: absolute;
      width: 100%;
    }
    
    .ag-virtual-list-item span:empty:not(.ag-icon) {
      border-left: 1px solid transparent;
    }
    
    .ag-floating-top {
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      position: relative;
      display: flex;
    }
    
    .ag-pinned-left-floating-top {
      display: inline-block;
      overflow: hidden;
      position: relative;
      min-width: 0px;
      flex-grow: 1000;
    }
    
    .ag-pinned-right-floating-top {
      display: inline-block;
      overflow: hidden;
      position: relative;
      min-width: 0px;
      flex-grow: 1000;
    }
    
    .ag-floating-bottom {
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      position: relative;
      display: flex;
    }
    
    .ag-pinned-left-floating-bottom {
      display: inline-block;
      overflow: hidden;
      position: relative;
      min-width: 0px;
      flex-grow: 1000;
    }
    
    .ag-pinned-right-floating-bottom {
      display: inline-block;
      overflow: hidden;
      position: relative;
      min-width: 0px;
      flex-grow: 1000;
    }
    
    .ag-tooltip {
      position: absolute;
      pointer-events: none;
      z-index: 99999;
    }
    
    .ag-value-slide-out {
      margin-right: 5px;
      opacity: 1;
      transition: opacity 3s, margin-right 3s;
      transition-timing-function: linear;
    }
    
    .ag-value-slide-out-end {
      margin-right: 10px;
      opacity: 0;
    }
    
    .ag-opacity-zero {
      opacity: 0 !important;
    }
    
    .ag-menu {
      max-height: 100%;
      overflow-y: auto;
      position: absolute;
      user-select: none;
    }
    
    .ag-menu-column-select-wrapper {
      height: 265px;
      overflow: auto;
      width: 200px;
    }
    
    .ag-menu-list {
      border-collapse: collapse;
      display: table;
    }
    
    .ag-menu-option {
      display: table-row;
    }
    
    .ag-menu-option-text {
      display: table-cell;
      white-space: nowrap;
    }
    
    .ag-menu-option-shortcut {
      display: table-cell;
    }
    
    .ag-menu-option-icon {
      display: table-cell;
    }
    
    .ag-menu-option-popup-pointer {
      display: table-cell;
    }
    
    .ag-menu-separator {
      display: table-row;
    }
    
    .ag-menu-separator-cell {
      display: table-cell;
    }
    
    .ag-menu-column-select-wrapper .ag-column-select-panel {
      height: 100%;
    }
  
    .loading-filter {
      background-color: #e6e6e6;
      height: 100%;
      padding: 5px;
      position: absolute;
      top: 34px;
      width: 100%;
      z-index: 1;
    }
    
    .ag-details-row {
      height: 100%;
      width: 100%;
    }
    
    .ag-details-grid {
      height: 100%;
      width: 100%;
    }
    
    .ag-header-group-cell {
      display: inline-block;
      height: 100%;
      overflow: hidden;
      position: absolute;
      text-overflow: ellipsis;
    }
    
    .ag-status-bar {
      display: flex;
      justify-content: space-between;
    }
    
    .ag-status-bar .ag-status-panel {
      display: inline-flex;
    }
    
    .ag-status-bar-left {
      display: inline-flex;
    }
    
    .ag-status-bar-center {
      display: inline-flex;
    }
    
    .ag-status-bar-right {
      display: inline-flex;
    }
   
    .ag-ltr .ag-row-group-indent-4 {
      padding-left: 40px;
    }
    
    .ag-ltr .ag-row-group-indent-5 {
      padding-left: 50px;
    }
    
    .ag-ltr .ag-row-group-indent-6 {
      padding-left: 60px;
    }
    
    .ag-ltr .ag-row-group-indent-7 {
      padding-left: 70px;
    }
    
    .ag-ltr .ag-row-group-indent-8 {
      padding-left: 80px;
    }
    
    .ag-ltr .ag-row-group-indent-9 {
      padding-left: 90px;
    }
   
    .ag-ltr .ag-row-group-indent-10 {
      padding-left: 100px;
    }
   
    .ag-ltr .ag-row-group-indent-11 {
      padding-left: 110px;
    }
    
    .ag-ltr .ag-row-group-indent-12 {
      padding-left: 120px;
    }
    
    .ag-ltr .ag-row-group-indent-13 {
      padding-left: 130px;
    }
    
    .ag-ltr .ag-row-group-indent-14 {
      padding-left: 140px;
    }
    
    .ag-ltr .ag-row-group-indent-15 {
      padding-left: 150px;
    }
    
    .ag-ltr .ag-row-group-indent-16 {
      padding-left: 160px;
    }
    
    .ag-ltr .ag-row-group-indent-17 {
      padding-left: 170px;
    }
    
    .ag-ltr .ag-row-group-indent-18 {
      padding-left: 180px;
    }
    
    .ag-ltr .ag-row-group-indent-19 {
      padding-left: 190px;
    }
    
    .ag-ltr .ag-row-group-indent-20 {
      padding-left: 200px;
    }
    
    .ag-ltr .ag-row-group-indent-21 {
      padding-left: 210px;
    }
    
    .ag-ltr .ag-row-group-indent-22 {
      padding-left: 220px;
    }
    
    .ag-ltr .ag-row-group-indent-23 {
      padding-left: 230px;
    }
    
    .ag-ltr .ag-row-group-indent-24 {
      padding-left: 240px;
    }
    
    .ag-ltr .ag-row-group-indent-25 {
      padding-left: 250px;
    }
    
    .ag-ltr .ag-row-group-indent-26 {
      padding-left: 260px;
    }
    
    .ag-ltr .ag-row-group-indent-27 {
      padding-left: 270px;
    }
    
    .ag-ltr .ag-row-group-indent-28 {
      padding-left: 280px;
    }
    
    .ag-ltr .ag-row-group-indent-29 {
      padding-left: 290px;
    }
    
    .ag-ltr .ag-row-group-indent-30 {
      padding-left: 300px;
    }
    
    .ag-ltr .ag-row-group-indent-31 {
      padding-left: 310px;
    }
    
    .ag-ltr .ag-row-group-indent-32 {
      padding-left: 320px;
    }
    
    .ag-ltr .ag-row-group-indent-33 {
      padding-left: 330px;
    }
    
    .ag-ltr .ag-row-group-indent-34 {
      padding-left: 340px;
    }
      
    .ag-ltr .ag-row-group-indent-35 {
      padding-left: 350px;
    }
    
    .ag-ltr .ag-row-group-indent-36 {
      padding-left: 360px;
    }
    
    .ag-ltr .ag-row-group-indent-37 {
      padding-left: 370px;
    }
    
    .ag-ltr .ag-row-group-indent-38 {
      padding-left: 380px;
    }
    
    .ag-ltr .ag-row-group-indent-39 {
      padding-left: 390px;
    }
    
    .ag-ltr .ag-row-group-indent-40 {
      padding-left: 400px;
    }
    
    .ag-ltr .ag-row-group-indent-41 {
      padding-left: 410px;
    }
    
    .ag-ltr .ag-row-group-indent-42 {
      padding-left: 420px;
    }
    
    .ag-ltr .ag-row-group-indent-43 {
      padding-left: 430px;
    }
    
    .ag-ltr .ag-row-group-indent-44 {
      padding-left: 440px;
    }
    
    .ag-ltr .ag-row-group-indent-45 {
      padding-left: 450px;
    }
    
    .ag-ltr .ag-row-group-indent-46 {
      padding-left: 460px;
    }
    
    .ag-ltr .ag-row-group-indent-47 {
      padding-left: 470px;
    }
    
    .ag-ltr .ag-row-group-indent-48 {
      padding-left: 480px;
    }
    
    .ag-ltr .ag-row-group-indent-49 {
      padding-left: 490px;
    }
    
    .ag-ltr {
      direction: ltr;
    }
    
    .ag-ltr .ag-body, .ag-ltr .ag-floating-top, .ag-ltr .ag-floating-bottom, .ag-ltr .ag-header, .ag-ltr .ag-body-viewport, .ag-ltr .ag-body-horizontal-scroll {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
    }
    
    .ag-ltr .ag-header-cell-resize {
      right: -4px;
    }
    
    .ag-ltr .ag-pinned-right-header .ag-header-cell-resize {
      left: -4px;
    }
    
    .ag-ltr .ag-header-select-all {
      float: left;
    }
    
    .ag-body .ag-pinned-left-cols-viewport, .ag-body .ag-body-viewport, .ag-body .ag-pinned-right-cols-viewport {
      -webkit-overflow-scrolling: touch;
    }
    
   
    .ag-header,
    .ag-row,
    .ag-header-cell,
    .ag-header-group-cell,
    .ag-rich-select-value,
    .ag-root {
      box-sizing: border-box;
    }
    
    &.ag-dnd-ghost,
    .ag-cell-inline-editing,
    .ag-popup-editor,
    .ag-select-agg-func-popup,
    .ag-overlay-loading-center {
      border: 1px solid ${(props) => props.theme.agGridBorderColor};
    }
    
    
    .ag-ltr .ag-toolpanel-indent-1 {
      padding-left: 20px;
    }
    
    .ag-ltr .ag-row-group-indent-1 {
      padding-left: 28px;
    }
    
    .ag-ltr .ag-row-group-indent-2 {
      padding-left: 56px;
    }
    
    .ag-ltr .ag-row-group-indent-3 {
      padding-left: 84px;
    }
    
    .ag-ltr .ag-row-group-indent-4 {
      padding-left: 112px;
    }
    
    .ag-ltr .ag-row-group-indent-5 {
      padding-left: 140px;
    }

    .ag-ltr .ag-row-group-indent-6 {
      padding-left: 168px;
    }
    
    .ag-ltr .ag-row-group-indent-7 {
      padding-left: 196px;
    }
    
    .ag-ltr .ag-row-group-indent-8 {
      padding-left: 224px;
    }
    
    .ag-ltr .ag-row-group-indent-9 {
      padding-left: 252px;
    }
    
    .ag-ltr .ag-row-group-indent-10 {
      padding-left: 280px;
    }
    
    .ag-ltr .ag-row-group-indent-11 {
      padding-left: 308px;
    }
    
    .ag-ltr .ag-row-group-indent-12 {
      padding-left: 336px;
    }
   
    .ag-ltr .ag-row-group-indent-13 {
      padding-left: 364px;
    }

    .ag-ltr .ag-row-group-indent-14 {
      padding-left: 392px;
    }
    
    .ag-ltr .ag-row-group-indent-15 {
      padding-left: 420px;
    }

    .ag-ltr .ag-row-group-indent-16 {
      padding-left: 448px;
    }
    
    .ag-ltr .ag-row-group-indent-17 {
      padding-left: 476px;
    }
    
    .ag-ltr .ag-row-group-indent-18 {
      padding-left: 504px;
    }
    
    .ag-ltr .ag-toolpanel-indent-19 {
      padding-left: 380px;
    }
    
    .ag-ltr .ag-row-group-indent-19 {
      padding-left: 532px;
    }
    
    .ag-ltr .ag-row-group-indent-20 {
      padding-left: 560px;
    }

    .ag-ltr .ag-row-group-indent-21 {
      padding-left: 588px;
    }
    
    .ag-ltr .ag-toolpanel-indent-22 {
      padding-left: 440px;
    }
    
    .ag-ltr .ag-row-group-indent-22 {
      padding-left: 616px;
    }
    
    .ag-ltr .ag-row-group-indent-23 {
      padding-left: 644px;
    }
    
    .ag-ltr .ag-row-group-indent-24 {
      padding-left: 672px;
    }
    
    .ag-ltr .ag-toolpanel-indent-25 {
      padding-left: 500px;
    }
    
    .ag-ltr .ag-row-group-indent-25 {
      padding-left: 700px;
    }
    
    .ag-ltr .ag-row-group-indent-26 {
      padding-left: 728px;
    }
    
    .ag-ltr .ag-row-group-indent-27 {
      padding-left: 756px;
    }
    
    .ag-ltr .ag-row-group-indent-28 {
      padding-left: 784px;
    }
    
    .ag-ltr .ag-row-group-indent-29 {
      padding-left: 812px;
    }
    
    .ag-ltr .ag-row-group-indent-30 {
      padding-left: 840px;
    }
    
    .ag-ltr .ag-row-group-indent-31 {
      padding-left: 868px;
    }
    
    .ag-ltr .ag-row-group-indent-32 {
      padding-left: 896px;
    }
    
    .ag-ltr .ag-row-group-indent-33 {
      padding-left: 924px;
    }
    
    .ag-ltr .ag-row-group-indent-34 {
      padding-left: 952px;
    }
    
    .ag-ltr .ag-row-group-indent-35 {
      padding-left: 980px;
    }
    
    .ag-ltr .ag-row-group-indent-36 {
      padding-left: 1008px;
    }
    
    .ag-ltr .ag-row-group-indent-37 {
      padding-left: 1036px;
    }
    
    .ag-ltr .ag-row-group-indent-38 {
      padding-left: 1064px;
    }
    
    .ag-ltr .ag-row-group-indent-39 {
      padding-left: 1092px;
    }
    
    .ag-ltr .ag-row-group-indent-40 {
      padding-left: 1120px;
    }
    
    .ag-ltr .ag-row-group-indent-41 {
      padding-left: 1148px;
    }
    
    .ag-ltr .ag-row-group-indent-42 {
      padding-left: 1176px;
    }
    
    .ag-ltr .ag-row-group-indent-43 {
      padding-left: 1204px;
    }
    
    .ag-ltr .ag-row-group-indent-44 {
      padding-left: 1232px;
    }
    
    .ag-ltr .ag-row-group-indent-45 {
      padding-left: 1260px;
    }
    
    .ag-ltr .ag-row-group-indent-46 {
      padding-left: 1288px;
    }
    
    .ag-ltr .ag-row-group-indent-47 {
      padding-left: 1316px;
    }
    
    .ag-ltr .ag-row-group-indent-48 {
      padding-left: 1344px;
    }
    
    .ag-ltr .ag-row-group-indent-49 {
      padding-left: 1372px;
    }
    
    .ag-ltr .ag-row-group-leaf-indent {
      margin-left: 28px;
    }
    
    .ag-ltr .ag-cell-first-right-pinned:not(.ag-cell-focus) {
      border-left: 1px solid ${(props) => props.theme.agGridBorderColor};
    }  
    
    .ag-ltr .ag-cell-last-left-pinned:not(.ag-cell-focus) {
      border-right: 1px solid ${(props) => props.theme.agGridBorderColor};
    }
    
    .ag-value-change-delta {
      padding-right: 2px;
    }
    
    .ag-value-change-delta-up {
      color: #43a047;
    }
    
    .ag-value-change-delta-down {
      color: #e53935;
    }
    
    .ag-value-change-value {
      background-color: transparent;
      border-radius: 1px;
      padding-left: 1px;
      padding-right: 1px;
      transition: background-color 1s;
    }
    
    .ag-value-change-value-highlight {
      background-color: rgba(22, 160, 133, 0.5);
      transition: background-color 0.1s;
    }
    
    .ag-header {
      background: ${(props) => props.theme.agGridHeaderBackground};
    }
    
    .ag-header-row {
      border-bottom: 1px solid ${(props) => props.theme.agGridBorderColor};
      box-sizing: border-box;
      position: absolute;
    }
    
    .ag-row {
      border-bottom: 1px solid ${(props) => props.theme.agGridBorderColor};
      box-sizing: border-box;
    }
    
    .ag-row-odd {
      background-color: #fcfdfe;
    }
    
    .ag-row-even {
      background-color: white;
    }
    
    .ag-row-hover {
      background-color: #ecf0f1;
    }
    
    .ag-numeric-cell {
      text-align: right;
    }
    
    .ag-header-cell-label {
      display: flex;
      float: left;
      height: 100%;
      width: 100%;
    }
    
    .ag-header-cell-label span {
      height: 100%;
    }
    
    .ag-header-cell-label > span {
      float: left;
    }
    
    .ag-header-cell-label .ag-header-icon {
      background-position-y: 10px;
      background-size: 14px 14px;
      height: 100%;
      margin: 0;
      margin-left: 4px;
      opacity: 0.87;
    }
    
    .ag-header-cell-label .ag-header-cell-text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #565a5c;
      letter-spacing: 0;
    }
    
    .ag-numeric-header .ag-header-cell-label {
      flex-direction: row-reverse;
      float: right;
    }
    
    .ag-numeric-header .ag-header-cell-label > span {
      float: right;
    }
    
    .ag-numeric-header .ag-header-cell-menu-button {
      float: left;
    }
    
    .ag-header-group-text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 500;
    }
    
    .ag-column-drag {
      background-color: transparent;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy41IDIuNXYxbTAgMnYxbTAgMnYxbTMtN3YxbTAgMnYxbTAgMnYxbTMtN3YxbTAgMnYxbTAgMnYxbTMtN3YxbTAgMnYxbTAgMnYxIiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48L3N2Zz4=);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 16px 16px;
      height: 16px;
      opacity: 0.87;
      width: 16px;
      background-position-x: left;
      background-position-y: 4px !important;
      height: 100%;
      min-width: 20px;
    }
    
    .ag-cell-focus {
      border: 1px solid #00b5e2;
      outline: initial;
    }
    
    .ag-header-cell-resize {
      position: absolute;
      right: -4px;
      width: 8px;
    }
    
    .ag-header-cell-resize::after {
      border-right: 1px solid ${(props) => props.theme.agGridBorderColor};
      box-sizing: content-box;
      content: "resize";
      display: block;
      height: 16px;
      margin-top: 8px;
      overflow: hidden;
      text-indent: 4px;
      width: 4px;
    }
   
    .ag-menu {
      background: white;
      border-radius: 2px;
      box-shadow: none;
      padding: 4px;
      padding: 0;
      z-index: 1;
    }
    
    .ag-menu .ag-menu-list {
      cursor: default;
      margin-bottom: 4px;
      margin-top: 4px;
      width: 100%;
    }
    
    .ag-menu .ag-menu-option {
      line-height: 16px;
      padding-left: 8px;
      padding-right: 8px;
    }
    
    .ag-menu .ag-menu-option > span {
      display: table-cell;
      vertical-align: middle;
    }
    
    .ag-menu .ag-menu-option-active {
      background: #ecf0f1;
    }
    
    .ag-menu .ag-menu-option-disabled {
      opacity: 0.5;
    }
    
    .ag-menu .ag-menu-option-icon {
      padding-left: 4px;
      padding-right: 4px;
    }
    
    .ag-menu .ag-menu-option-icon span {
      height: 16px;
      line-height: 0;
      margin-top: 4px;
    }
    
    .ag-menu .ag-menu-option-shortcut {
      padding-left: 8px;
    }
    
    .ag-menu .ag-menu-separator {
      margin-left: -4px;
    }
    
    .ag-menu .ag-menu-separator > span {
      background-image: url("data:image/svg+xml;utf8,<svg width='1' height='8px' viewBox='0 0 1 8px' xmlns='http://www.w3.org/2000/svg'> <line x1='0' y1='4px' x2='1' y2='4px' stroke-width='1' stroke='#CCC'/> </svg>");
      height: 8px;
    }
    
    .ag-menu .ag-menu-option-popup-pointer {
      width: 24px;
    }
    
    &.ag-dnd-ghost {
      background: white;
      border-radius: 2px;
      box-shadow: none;
      padding: 4px;
      border: 1px solid ${(props) => props.theme.agGridBorderColor};
      color: rgba(0, 0, 0, 0.54);
      height: 32px !important;
      line-height: 32px;
      margin: 0;
      padding: 0 8px;
      transform: translateY(8px);
      z-index: 5;
    }
    
    &.ag-dnd-ghost span,
    &.ag-dnd-ghost div {
      float: left;
      height: 100%;
      margin: 0;
      padding: 0;
    }
    
    &.ag-dnd-ghost .ag-dnd-ghost-icon {
      margin-right: 4px;
      opacity: 0.87;
    }
    
    .ag-column-select-header label .ag-filter-checkbox {
      float: left;
      margin-right: 4px;
    }
    
    .ag-group-child-count {
        margin-left: 4px;
    }
    
    .ag-group-child-count::before {
      content: " ";
    }
    
    .ag-column-panel {
      border-right: 0;
    }
     
    .ag-filter-icon:empty {
      background-color: transparent;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy41IDMuNWg5di41ODZhMSAxIDAgMCAxLS4yOTMuNzA3TDkuMjkzIDcuNzA3QTEgMSAwIDAgMCA5IDguNDE0VjEwbC0yIDEuNVY4LjQxNGExIDEgMCAwIDAtLjI5My0uNzA3TDMuNzkzIDQuNzkzYTEgMSAwIDAgMS0uMjkzLS43MDdWMy41eiIgc3Ryb2tlPSIjN0Y4QzhEIiBmaWxsPSJub25lIi8+PC9zdmc+);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 16px 16px;
      height: 16px;
      opacity: 0.87;
      width: 16px;
    }
    
    .ag-numeric-header .ag-header-cell-label .ag-header-icon {
      margin-left: 0;
      margin-right: 4px;
    }
    
    .ag-cell-range-selected:not(.ag-cell-focus) {
      background-color: rgba(0, 145, 234, 0.2);
    }
    
    .ag-cell-label-container {
      height: 100%;
    }
    
    .ag-header-group-cell-label {
      height: 100%;
    }
    
    .ag-header-group-cell-label span {
      float: left;
      height: 100%;
    }
    
    .ag-header-select-all {
      height: 100%;
      margin-right: 12px;
    }
    
    .ag-header-select-all span {
      height: 100%;
    }
    
    .ag-header-select-all:not(.ag-hidden) + .ag-cell-label-container {
      float: left;
      width: calc(100% - 16px - 12px);
    }
    
    .ag-selection-checkbox span,
    .ag-group-expanded span,
    .ag-group-contracted span {
      margin-right: 12px;
    }
    
    .ag-group-contracted i,
    .ag-group-expanded i {
        vertical-align: middle;
        color: ${(props) => props.theme.agGridHeaderSortIconColor};
    }
    
    .ag-selection-checkbox span {
      position: relative;
      top: 2px;
    }
    
    .ag-column-drop-cell .ag-column-drop-cell-button:hover {
      opacity: 0.87;
    }
    
    .ag-column-drop-cell .ag-column-drag {
      margin-left: 8px;
      margin-top: 2px;
      width: 16px;
    }
    
    .ag-cell-data-changed {
      background-color: rgba(22, 160, 133, 0.5) !important;
    }
    
    .ag-cell-data-changed-animation {
      background-color: transparent;
      transition: background-color 1s;
    }
    
    .ag-status-bar {
      background: white;
      border-top: 0;
      color: rgba(0, 0, 0, 0.38);
      display: flex;
      justify-content: flex-end;
    }
    
    .ag-status-bar .ag-status-bar-item {
      margin-right: 8px;
    }
    
    .ag-status-bar .ag-status-bar-item span:nth-child(1)::after {
      content: ":";
    }
    
    .ag-details-row {
      box-sizing: border-box;
    }
   
    .sass-variables::after {
      content: '{ "autoSizePadding": "12px", "headerHeight": "32px", "groupPaddingSize": "28px", "footerPaddingAddition": "16px", "virtualItemHeight": "28px", "aggFuncPopupHeight": "98px", "checkboxIndentWidth": "20px", "leafNodePadding": "12px", "rowHeight": "28px", "gridSize": "4px", "iconSize": "16px" }';
      display: none;
    }
    
    .ag-header {
      border-bottom: 1px solid ${(props) => props.theme.agGridBorderColor};
    }
    
    .ag-cell-highlight {
      background-color: #00b9e4 !important;
    }
    
    .ag-header-cell-resize {
      right: -3px;
    }
    
    .ag-rtl .ag-header .ag-header-cell-resize {
      left: -4px;
    }
    
    .ag-row {
      border-bottom-color: #d9dcde;
    }
    
    .ag-row-drag {
      background-position-y: center;
    }
    
    .ag-column-drag {
      background-position-y: center;
    }
    
    .ag-column-drop-cell {
      height: 24px !important;
    }
    
    .ag-column-drop-cell .ag-column-drop-cell-button {
      box-sizing: border-box;
      height: calc(100% - 4px);
      margin-bottom: 2px;
      margin-top: 2px;
    }
    
    .ag-column-drop-cell .ag-column-drop-cell-button:hover {
      opacity: 1;
    }
    
    .ag-column-drop-vertical .ag-column-drop-cell {
      margin-left: 8px;
      margin-right: 8px;
    }
    
    .ag-column-drop-vertical .ag-column-drop-cell .ag-column-drop-cell-text {
      line-height: 24px;
      margin-left: 8px;
    }
    
    .ag-column-drop-horizontal {
      background-color: #f5f7f7;
      height: 32px;
    }
    
    .ag-column-drop-horizontal .ag-column-drop-empty-message {
      line-height: 32px;
    }
    
    .ag-column-drop-horizontal .ag-column-drop-cell-text {
      line-height: 24px;
      margin-left: 8px;
    }
    
    .ag-root {
      border: none;
    }
    
    .ag-tab {
      box-sizing: initial;
    }
    
    .ag-filter .ag-filter-value {
      line-height: 20px;
    }
    
    .ag-icon-expanded,
    .ag-icon-contracted {
      transform: translateY(2px);
    }
    
    .ag-menu-option {
      height: 28px;
      line-height: 28px;
    }
    
    .ag-popup-editor,
    .ag-menu {
      background-color: white;
    }
    
    .ag-details-row {
      background-color: white;
    }
    
    .ag-cell-range-selected-1:not(.ag-cell-focus) {
      background-color: rgba(0, 145, 234, 0.3);
    }
    
    .ag-cell-range-selected-2:not(.ag-cell-focus) {
      background-color: rgba(0, 145, 234, 0.4);
    }
    
    .ag-cell-range-selected-3:not(.ag-cell-focus) {
      background-color: rgba(0, 145, 234, 0.5);
    }
    
    .ag-cell-range-selected-4:not(.ag-cell-focus) {
      background-color: rgba(0, 145, 234, 0.6);
    }
    
    .ag-header-cell-moving {
      background-color: white;
    }
    
    // OVERRIDES
    
    .ag-body-viewport {
      max-width: 100%;
    }
    
    .ag-header-cell-text,
    .ag-header-group-text,
    .ag-header-cell-label {
      flex: 1;
    }
    
    .ag-header-cell-label {
      font-weight: 500;
    }
    
    .ag-ltr .ag-row-group-leaf-indent {
      margin-left: 5px;
    }
    
    .ag-header-cell-resize {
      z-index: 0;
    
      &::after {
        border-right: 1px solid ${(props) => props.theme.agGridBorderColor};
      }
    }
    
    .ag-root {
      border: none;
      overflow: hidden;
      width: 100%;
    }
    
    .ag-row-group-indent-0 {
        display: flex;
    }
    
    .ag-theme-balham .ag-pinned-left-header {
      border-right: 1px solid ${(props) => props.theme.agGridBorderColor};
    
      .ag-header-cell-resize::after {
        border: none;
      }
    }
    
    .ag-theme-balham .ag-pinned-right-header {
      border-left: 1px solid ${(props) => props.theme.agGridBorderColor};
    
      .ag-header-cell-resize::after {
        border: none;
      }
    }
    
    .ag-menu {
      box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
    }
    
    .ag-root-wrapper {
      transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .ag-header-icon {
      display: flex;
    
      i.mdi {
        font-size: 0.75em;
        width: 2.75em;
        color: @blue1;
        vertical-align: middle;
        text-align: right;
    
        &:before {
          font-size: 18px;
        }
      }
    }
    
    .ag-header-cell,
    .ag-header-group-cell,
    .ag-cell {
      padding-left: 0.75em;
      padding-right: 0.75em;
      
      &.text-right {
        text-align: right;
      }
      
      &.text-center {
        text-align: center;
      }
    }
    
    .ag-cell,
    .ag-cell-value {
      color: ${(props) => props.theme.agGridBodyTextColor};
    }
    
    
    .ag-tool-panel {
      display: none;
    }
    
    .ag-sort-ascending-icon,
    .ag-sort-descending-icon { 
        color: ${(props) => props.theme.agGridHeaderSortIconColor};
    }
`;
