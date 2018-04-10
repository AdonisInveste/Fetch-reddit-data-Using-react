/* This is the insert point of the react project */

import React from 'react'
import reactDOM, {render} from 'react-dom'
import {Fetch} from './components/Fetch'


// react document object model renders component instance
render(<Fetch />, document.getElementById('app'))


/*
Create react setup

Create app dir
Enter app dir
Use npm init to create package.json document,
THIS document contains meta data about the application created.
It audits the modules installed for the app
Install react - npm install --save react - access it in documents using,
var react = require('react')
Install react document object model


Use babel - JS compile to convert JSx into JS
Install babel
Configure babel
  Create a babel config document .babelrc

*/
