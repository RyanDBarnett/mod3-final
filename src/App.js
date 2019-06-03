import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setPresidents } from './actions';

class App extends Component {

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

const mapStateToProps = (state) => ({
  presidents: state.presidents
})

const mapDispatchToProps = (dispatch) => ({
  setPresidents: (presidents) => dispatch(setPresidents(presidents))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
