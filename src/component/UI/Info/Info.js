import React, { useContext } from "react";
import "./Info.css";
import {AuthContext} from "../../../context/auth/authContext";

export const Info = () => {

	const auth = useContext(AuthContext)

	return (
		<div className={'info-layout'}>
			<div className={'info'}>
				<div className={'info-text'}>
					<p>Hello, you entered as:</p>
					<p className={'email'}>{auth.email}</p>
				</div>
				<button onClick={() => auth.logout()} >
					Logout
				</button>
			</div>
		</div>
	)
}