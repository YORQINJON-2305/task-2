import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import { AdminControl } from "../pages/AdminControl/AdminControl";
import { ClientControl } from "../pages/ClientControl/ClientControl";
import { Settings } from "../pages/Settings/Settings";

export const PrivateApp = () => {
	return (
		<>
			<Sidebar />

			<div style={{marginLeft: "300px"}}>
				<Routes>
					<Route path='/' element={<AdminControl />} />
					<Route path='/client-control' element={<ClientControl />} />
					<Route path='/settings' element={<Settings/>} />
				</Routes>
			</div>
		</>
	);
};
