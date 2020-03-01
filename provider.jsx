import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import App from './components/app';
import Store from './redux/s';

export default ({store}) => (
	<Provider store = {Store}>
		<App />
	</Provider>
);