import React, {Component} from 'react'
import reactDOM, {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card } from 'material-ui/Card'

var fetch = require('node-fetch')

export class FetchComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redditObjects: []
        }
    }
    componentDidMount() {
        fetch('https://www.reddit.com/r/todayilearned/top.json?count=')
        .then(res => res.json())
        .then((redditObject)  => {this.setState({redditObjects:redditObject.data.children});
            // console.log(this.state.pings);
        })
    }
    render() {
        const {redditObjects} =  this.state
        // console.log(pings)
        // const mapSet = pings.map((ping) => {
        //     {ping}
        //     console.log(ping.data.id)
        // } )
        // for(let Q=0; Q<pings.length; Q++) {
        // console.log(pings[Q].data)
        // }
        return ( 
/***
 * Ideas For Fetching data
 * When user hovers over link it gives a summary of the information attached to that link
 *  FetchComponent could be abstracted-?
 */
            <div >
            {redditObjects.map(redditObjectproperty  => 
             <div key={redditObjectproperty.data.id} >
             <li style={{marginTop:30}}>
            <a href={redditObjectproperty.data.url}>
                    {redditObjectproperty.data.author}
            </a>
            </li>
            </div>
        )}
            </div>
            )
    }
}

