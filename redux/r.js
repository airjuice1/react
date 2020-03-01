import * as c from './c';

export const test = (state = 14, action) => {
	switch (action.type) {

		case  c.TEST:
			return state + 1;
		break;
	
		default:
			return state;
	}
}