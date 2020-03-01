import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/a';
import Test from '../components/test';

const mapStateToProps = state => ({
	test:state.test,
});

// const mapActionToProps = dispatch => {
// 	const { actionTest } = bindActionCreators(action, dispatch);

// 	return {
// 		actionTest,
// 	}
// }

// export default connect(mapStateToProps, mapActionToProps)(Test);
export default connect(mapStateToProps, actions)(Test);