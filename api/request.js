export default class request {

	_base_url = '';

	_request_param = {
		method: 'POST',
	}

	async get1() {
		return this.getData('1');
	}

	async get2() {
		return this.getData('2');
	}

	getData = async (api) => {
		
		const req = await fetch(`${this._base_url}/${api}`);

		if (!req.ok) {
			throw new Error('huy');
		}

		const res = await req.json();

		return res;
	}
}