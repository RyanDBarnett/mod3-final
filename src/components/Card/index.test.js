import React from 'react'; 
import { shallow } from 'enzyme';
import Card from './';

describe('Card', () => {
  it('should match the snapshot with all data passed in correctly', () => { 
    const president = {
      birth_year: 1732,
      death_year: 1799,
      left_office: "1797-03-04",
      number: 1,
      party: "No Party",
      president: "George Washington",
      took_office: "1789-04-30"
    }
    const wrapper = shallow(<Card {...president} />); 

    expect(wrapper).toMatchSnapshot(); 
  });
}); 