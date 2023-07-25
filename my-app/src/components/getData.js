import React, { Component } from 'react';
import axios from 'axios';


class getData extends Component {
    state = {
        text: 'this.props.text'
      };
      render() {
        return this.state.text;
      }

//   state = {
//     dates: []
//   }
//     componentDidMount() {
    
//     axios.get('http://127.0.0.1:5000/test')
//     .then(response => {
//         res => res.json()
//         .then((data) => {
//             this.setState({ input: data })
//         })
//     })
//     return (
        
//     )
//   }
}

export default getData;