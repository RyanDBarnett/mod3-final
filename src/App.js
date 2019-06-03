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
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json();
      this.props.setPresidents(data);
      this.props.isLoading(false);
    } catch (error) {
      this.props.hasErrored(error.message);
    }
  }

  render = () => {
    return (
      <div className="App">
        <p>Loading: {this.props.loading ? 'true' : 'false'}</p>
        <p>Error: {this.props.error}</p>
      </div>
    ); 
  }
}

const mapStateToProps = (state) => ({
  presidents: state.presidents,
  loading: state.loading,
  error: state.error
})

const mapDispatchToProps = (dispatch) => ({
  setPresidents: (presidents) => dispatch(setPresidents(presidents)),
  isLoading: (boolean) => dispatch(isLoading(boolean)),
  hasErrored: (error) => dispatch(hasErrored(error))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
