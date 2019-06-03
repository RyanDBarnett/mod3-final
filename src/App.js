import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setPresidents } from '../actions/index.js';

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
    this.props.setPresidents(data);
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

export default connect(null, mapDispatchToProps)(App);
