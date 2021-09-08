import {AUTH_LOGIN ,AUTH_LOGOUT} from "../types";

export default function authReducer(state, action) {
	switch (action.type) {
		case AUTH_LOGIN: return {...state, token: action.token, userId: action.userId}
		case AUTH_LOGOUT: return {...state, token: null, userId: null}
		default: return state
	}
}