import {injectGlobal} from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.7;
    color: #ccc;
    text-align: left;
    background-color: #1e1e1e;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }
`;