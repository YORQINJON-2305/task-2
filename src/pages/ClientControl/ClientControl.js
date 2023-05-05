import React, { useEffect, useState } from "react";
import axios from "axios";
import { ClientCard } from "../../components/ClientCard/ClientCard";
import { Spin } from "antd";
import "./clientControl.css"

export const ClientControl = () => {
	const [data, setData] = useState([]);

  const getClients = async () => {
    const data = await axios.get("https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients");
    setData(data.data)
    console.log(data);
  }

 
	useEffect(() => {
		getClients()
	}, []);

	return (
		<div className='client-page'>
			<div className='container'>
				{data.length ? (
					<ul className="client-list">
						{data.map((item) => (
							<ClientCard key={item.id} data={item} getClients={getClients}/>
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
