import React, { Fragment } from 'react';

export default ({test, actionTest}) => (
	<Fragment>
	<div>
		{test}
	</div>
	<button onClick = {e => actionTest()}>inc</button>
	</Fragment>
);