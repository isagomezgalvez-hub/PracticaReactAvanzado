import { shallow } from 'enzyme';
import { AuthButton } from './AuthButton';

describe('AuthButton ', () => {
	
	const props = {
		isLogged: true,
		onLogout: jest.fn(),
	};

	const render = () => shallow(<AuthButton {...props} />);

	test('should render', () => {
		const wrapper = render()
		expect(wrapper.exists()).toBe(true)
	})
	test('should render snapshot when isLogged', () => {
		const wrapper = render()
		expect(wrapper).toMatchSnapshot();
	});

	test('should render snapshot when is not Logged', () => {
		const wrapper = render()
		wrapper.setProps({ isLogged: false });
		expect(wrapper).toMatchSnapshot();
	});

	test('should call onLogout', () => {
		const wrapper = render()
		wrapper.find('ConfirmationButton').props().onConfirm();
		expect(props.onLogout).toHaveBeenCalled();
	});
});