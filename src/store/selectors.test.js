import { getAdvertsLoaded } from './selectors';


describe('getAdvertsLoaded', () => {
	test('should return advert', () => {
		const state = {adverts: { loaded: true, data: [],}};
		expect(getAdvertsLoaded(state)).toBe(true);
	});
});