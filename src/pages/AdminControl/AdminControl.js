import React, { useEffect, useState } from "react";
import "./adminControl.css"
import axios from "axios";
import { Spin } from "antd";
import { AdminCard } from "../../components/AdminCard/AdminCard";

export const AdminControl = () => {
	const [data, setData] = useState([]);

  const getAdmins = async () => {
    const data = await axios.get("https://6420342c82bea25f6dfc0e94.mockapi.io/rc/users");
    setData(data.data)
  }

 
	useEffect(() => {
		getAdmins()
	}, []);

	return (
		<div className='client-page'>
			<div className='container'>
				{data.length ? (
					<ul className="client-list">
						{data.map((item) => (
							<AdminCard key={item.id} data={item} getAdmins={getAdmins}/>
						))}
					</ul>
				) : (
					<div className="loading-wrap">
            <Spin size="large"/>
          </div>
				)}
			</div>
		</div>
	);
};
