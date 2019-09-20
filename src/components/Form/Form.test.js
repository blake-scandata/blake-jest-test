import React from 'react';
import Form from './Form';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test("Form doesn't display data before submit", () => {
    const wrapper = shallow(<Form />);
    wrapper.find("#nameInput").simulate('change', {target: {value: 'Blake Herrera'}});
    wrapper.find("#phoneInput").simulate('change', {target: {value: '1234567890'}});
    wrapper.find("#addressInput").simulate('change', {target: {value: '3323 Marcasite Drive, Round Rock TX 78681'}});
    expect(wrapper.find('#testData').exists()).toBeFalsy(); //no submit
});

test("Form displays data on submit", () => {
    const wrapper = shallow(<Form />);
    wrapper.find("#nameInput").simulate('change', {target: {value: 'Blake Herrera'}});
    wrapper.find("#phoneInput").simulate('change', {target: {value: '1234567890'}});
    wrapper.find("#addressInput").simulate('change', {target: {value: '3323 Marcasite Drive, Round Rock TX 78681'}});
    wrapper.find('#submitButton').simulate('click');
    expect(wrapper.find('#testData').exists()).toBeTruthy(); //with submit
});

test("Form hides data on change", () => {
    const wrapper = shallow(<Form />);
    wrapper.find("#nameInput").simulate('change', {target: {value: 'Blake Herrera'}});
    wrapper.find("#phoneInput").simulate('change', {target: {value: '1234567890'}});
    wrapper.find("#addressInput").simulate('change', {target: {value: '3323 Marcasite Drive, Round Rock TX 78681'}});
    wrapper.find('#submitButton').simulate('click');
    expect(wrapper.find('#testData').exists()).toBeTruthy(); //with submit
    wrapper.find("#addressInput").simulate('change', {target: {value: 'changed'}}); //changed
    expect(wrapper.find('#testData').exists()).toBeFalsy(); //no resubmit
});