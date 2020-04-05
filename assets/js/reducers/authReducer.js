const initialState = {
	token: localStorage.getItem('AuthorizationToken'),
	isAuthenticated: false,
	isLoading: false,
	user: null,
}

export default function (state = initialState, action) {
	switch (action.type) {
		default:
			return state
	}
}
