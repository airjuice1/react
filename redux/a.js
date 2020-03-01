import * as c from './c';

export const actionTest = payload => {
	return {
		type: c.TEST,
		payload
	}
};