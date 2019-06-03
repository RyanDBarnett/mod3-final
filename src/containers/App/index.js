import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setPresidents, isLoading, hasErrored } from '../../actions';
import Card from '../../components/Card';

class App extends Component {

  componentDidMount = async () => {
    const url = 'http://localhost:3001/api/v1/presidents';
    try {
      this.props.isLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        this.props.isLoading(false);
        throw Error(response.statusText)
      }
      const data = await response.json();
      this.props.isLoading(false);
      this.props.setPresidents(data);
    } catch (error) {
      this.props.hasErrored(error.message);
    }
  }

  render = () => {
    const {presidents, loading, error} = this.props
    const cards = presidents.map((president, index) => {
      return <Card {...president} key={index} />
    })
    return (
      <div className="App">
        <h1>Presidents and Assholes</h1>
        <div className="cards-container">
          {cards}
        </div>
        <p>Loading: {loading ? 'true' : 'false'}</p>
        <p>Error: {error}</p>
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
