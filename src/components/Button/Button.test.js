import React from 'react';
import Button from './Button';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test("Button shows text on click", () => {
    const wrapper = shallow(<Button />); //creates an instance of the button component
    wrapper.find('#testButton').simulate('click'); //finds button by id attribute, simulates click event
    expect(wrapper.find('#testModal').exists()).toBeTruthy(); //tests if modal div has rendered after click event
});

test("Button hides after another click", () => {
    const wrapper = shallow(<Button />);
    wrapper.find('#testButton').simulate('click');
    expect(wrapper.find('#testModal').exists()).toBeTruthy(); //shows after first click
    wrapper.find('#testButton').simulate('click');
    expect(wrapper.find('#testModal').exists()).toBeFalsy(); //hides after second click
});