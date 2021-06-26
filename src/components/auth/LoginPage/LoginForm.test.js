import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from './LoginForm';


describe('LoginForm', ()=>{
	const props = {
		isLoading: false,
		onSubmit: jest.fn(),
	}
	const render = () => shallow(<LoginForm {...props} />);
	test('should render',()=>{
		const wrapper = render()
		expect(wrapper.exists()).toBe(true)
	})
	test('snapshot testing of LoginForm', ()=>{
		const wrapper= render()
		expect(wrapper).toMatchSnapshot();
	})

	test('should submit credentials - test acción del store', ()=>{
		const credentials = { email: 'isa', password: 'password', remember:false}
		const wrapper = render();

		const usernameField = wrapper.find('.loginForm-field').at(0);
		usernameField.props().onChange({target:{name: 'email', value: credentials.email}})

		const passwordField = wrapper.find('.loginForm-field').at(0);
		usernameField.props().onChange({ target: {name:'password', value: credentials.password }  })

		const form = wrapper.find('form');
		form.simulate('submit', {preventDefault: ()=> {}});

		expect(wrapper.find('.loginForm-submit').props().disabled).toBe(false)
		expect(props.onSubmit).toHaveBeenCalledWith(credentials);
		
	} )

	
})