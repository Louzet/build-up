import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from './../actions/users';

class Home extends Component {
	static propTypes = {
		users: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.props.getUsers();
	}

	render() {
		return (
			<div>
				<h2>Home</h2>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	users: state.userReducer.users
});

export default connect(mapStateToProps, { getUsers })(Home);
