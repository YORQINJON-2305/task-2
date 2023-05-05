import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";
import logoWhite from "../../assets/images/logo-white.svg";
import {UserOutlined, IdcardOutlined, SettingOutlined, LogoutOutlined} from "@ant-design/icons";
import { Button } from "antd";

export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div>
				<Link className='logo-link' to='/'>
					<img className='site-logo' src={logoWhite} alt='Light logo' />
				</Link>
				<ul className='nav-list'>
					<li className='nav-item'>
						<NavLink
							className={({ isActive }) =>
								isActive ? "sidebar-link link-active" : "sidebar-link"
							}
							to='/'
						>
              <IdcardOutlined style={{marginRight: "5px"}} />
							Admin Control
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							className={({ isActive }) =>
								isActive ? "sidebar-link link-active" : "sidebar-link"
							}
							to='/client-control'
						>
						  <UserOutlined style={{marginRight: "5px"}}/>
							Client Control
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							className={({ isActive }) =>
								isActive ? "sidebar-link link-active" : "sidebar-link"
							}
							to='/settings'
						>
              <SettingOutlined style={{marginRight: "5px"}} />
							Settings
						</NavLink>
					</li>
				</ul>
			</div>
			<Button className='copyright-text' type="dashed" danger><LogoutOutlined /> Log out</Button>
		</div>
	);
};
