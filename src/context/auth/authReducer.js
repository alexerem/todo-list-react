import {AUTH_LOGIN ,AUTH_LOGOUT} from "../types";

export default function authReducer(state, action) {
	switch (action.type) {
		case AUTH_LOGIN: return {...state, token: action.payload }
		case AUTH_LOGOUT: return {...state, token: null}
		default: return state
	}
}