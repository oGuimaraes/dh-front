import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;200,300,np400;700&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style:none;
  }

  button {
    cursor: pointer;
  }

  .Toastify__toast--error {
    background: #1C889C;
 }

  .MuiTableCell-head {
    color: rgba(255, 255, 255, 0.87) !important;
    font-weight: 600 !important;
    line-height: 1.5rem;
    height: 20px !important;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #0c515e !important;
  }

  .Mui-focused{
    fieldset {
    border-color: #0c515e !important
    }
  }

  .MuiTable-root {
    width: calc(100% + 1px) !important;
  }

  .MuiFormControl-root {
    width: 100% !important ;

    label {
      color: #09323a !important;
      font-size: 14px;
    }
  }

  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(13px, -12px) scale(0.92) !important;
  }

  input {
    :disabled {
      background-color: rgba(50, 50, 50, 0.10);
    }
  }

  .buttonDefault {
    font-size: 12px;
    border: none;
    width: 140px;
    color: #fff;
    height: auto;
    cursor: pointer;
    background-color: #0f6171;
    border-radius: 4px;
    height: 36px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    transition: 0.2s;
    text-transform: uppercase;
    :hover {
      background: #0c515e;
    }
  }

  .MuiFormHelperText-root {
    color: #f50057 !important;
  }

  .MuiTableCell-head {
    text-align: center !important;
  }

  .MuiTableRow-root {
    td {
      text-align: center !important;
    }
  }

  .centerGrid {
    display: flex !important;
    align-self: flex-end !important;
  }

  .MuiInputLabel-shrink {
    transform: translate(-1px, 0px) scale(0.95) !important;
    transform-origin: top left;
  }

  .MuiInputLabel {
    color: red !important;
  }

  #demo-customized-select-label {
    margin-top: -12px;
    margin-left: 13px;
    z-index: 1;
  }

  .MuiInputBase-formControl {
    margin-top: 0 !important;
  }

  .MuiMenuItem-root {
    font-size: 13px !important;
  }


  #customized-hook-demo {
    background: #c7e3ea !important;
    height: 36px;
  }

  .sc-fujyUd {
    background: #c7e3ea !important
  }


  .align-flexend {
    display: flex;
    align-items: center;
    margin-bottom: 7px;
  }
  
  .brotherOfAutoselect{
    margin-top: 7px !important;
    width: 100%;
  }

  .MuiOutlinedInput-multiline {
    background: rgba(255,255,255,0.4) !important;
    margin-top: 0 !important;
  }

  .makeStyles-textField-10 {
    margin: 0 !important;
  }

  .MuiOutlinedInput-multiline {
    background: rgba(255,255,255,0.4) !important;
    margin-top: 0 !important;
  }

  .MuiInputBase-multiline.Mui-disabled {
    background: rgba(50,50,50,0.10) !important;
  }

  .checkboxSection {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imIwjr svg {
    font-size: 16px;
  }

  .MuiSelect-select.Mui-disabled {
    background-color: #96beca !important;
    border: 1px #898989 solid;
  }

  .disabled  span {
    color: #174048;
  }

  .etDGsl {
    height: 36px !important;
  }

  .phrases{
    font-size: 20px;
    font-style: italic;
    text-align: center;
    color: #0c515e;
    margin-top: 60px;
  }
`;
