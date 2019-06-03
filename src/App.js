import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setPresidents, isLoading, hasErrored } from './actions';

class App extends Component {

  componentDidMount = async () => {
    const url = 'http://localhost:3001/api/v1/presidents';
    try {
      this.props.isLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      this.props.setPresidents(data);
      this.props.isLoading(false);
    } catch (error) {
      this.props.hasErrored(error);
    }
  }

  render = () => {
    return (
      <div className="App">
        
      </div>
    ); 
  }
}

const mapStateToProps = (state) => ({
  presidents: state.presidents,
  isLoading: state.isLoading,
  error: state.error
})

const mapDispatchToProps = (dispatch) => ({
  setPresidents: (presidents) => dispatch(setPresidents(presidents)),
  isLoading: (boolean) => dispatch(isLoading(boolean)),
  hasErrored: (error) => dispatch(hasErrored(error))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
