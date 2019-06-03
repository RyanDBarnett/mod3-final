import App from './'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './'
import { setPresidents, hasErrored, isLoading } from '../../actions';

describe('App', () => {
  it.skip('should match the snapshot', () => { 
    const reduxStore = {
      presidents: ['George', 'Jefferson'],
      error: '',
      loading: false
    }
    const wrapper = shallow(
      render(
        <Provider store={reduxStore}>
          <App />
        </Provider>, document.getElementById('root')
      )
    ); 

    expect(wrapper).toMatchSnapshot(); 
  });

  describe('mapStateToProps', () => {
    it('should return an object with the todos array', () => {
      const mockState = {
        presidents: ['Dwight', 'Bill', 'Obama'],
        loading: false,
        error: '',
        senators: ['Bob', 'Steve']
      }
      const expected = {
        presidents: ['Dwight', 'Bill', 'Obama'],
        loading: false,
        error: ''
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a setPresident action when componentDidMount is called', () => {
      const presidents = ['Dwight', 'Bill', 'Obama'];
      const mockDispatch = jest.fn()
      const actionToDispatch = setPresidents(presidents)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setPresidents(presidents)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});
