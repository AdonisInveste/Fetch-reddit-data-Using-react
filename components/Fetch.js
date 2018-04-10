import React, {Component} from 'react'
import reactDOM, {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




import {FetchComponent} from './FetchComponent';
var fetch = require('node-fetch')

export const Fetch = () => {
  const FetchAPI = 
  <MuiThemeProvider>
                     <div>
                       {<FetchComponent/>}
                     </div>
    </MuiThemeProvider>
  return FetchAPI ;
}