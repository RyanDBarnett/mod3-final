import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setPresidents } from '../actions';

class App extends Component {
  constructor() {
    super()
    this.state = {
      presidents: []
    }
  }

  componentDidMount = async () => {
    const url = 'http://localhost:3001/api/v1/presidents';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  render = () => {
    return (
      <div className="App">
        
      </div>
    ); 
  }
}

const mapDispatchToProps = (dispatch) => {
  setPresidents: (presidents) => dispatch(setPresidents(presidents))
}

export default coonnect(null, mapDispatchToProps)(App);
