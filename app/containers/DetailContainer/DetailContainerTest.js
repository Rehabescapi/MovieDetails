import React from 'react';
import DetailContainer from './DetailContainer';
import renderer from 'react-test-renderer';

import  {shallow }  from 'enzyme'


describe ( 'Detail container', () => { 

  it('should load', () => {
   const subject = shallow(<DetailContainer />)

   expect(subject).toMatchSnapshot()
  })

})

/*



test('render a label', () => {
    const wrapper = shallow(
        <Label>Hello Jest!</Label>
    );
    expect(wrapper).toMatchSnapshot();
});*/
