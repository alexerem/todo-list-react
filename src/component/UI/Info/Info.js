import React, { useContext } from "react";
import "./Info.css";
import {AuthContext} from "../../../context/auth/authContext";

export const Info = () => {

	const auth = useContext(AuthContext)

	return (
		<div className={'info'}>
			<p>{auth.email}</p>
		</div>
	)
}