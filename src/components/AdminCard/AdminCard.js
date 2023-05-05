import "./adminCard.css";
import { Avatar, Button, Modal } from "antd";
import axios from "axios";
import { useRef, useState } from "react";

export const AdminCard = ({ data, getAdmins }) => {
	const { first_name, last_name, role, id } = data;
	const [isModalOpen, setIsModalOpen] = useState(false);

	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const roleRef = useRef();

	const handleEditSubmit = (evt) => {
		// evt.preventDefault();

		axios
			.put(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/users/${id}`, {
				first_name: firstNameRef.current.value,
				last_name: lastNameRef.current.value,
				role: roleRef.current.value,
			})
			.then((res) => {
				if (res.status === 200) {
					setIsModalOpen(false);
					getAdmins();
				}
			})
			.catch((err) => console.log(err));
	};

	const handleDeleteAdmin = () => {
		axios
			.delete(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/users/${id}`)
			.then((res) => {
				if (res.status === 200) {
					getAdmins();
				}
			})
			.catch((err) => console.log(err));
	};

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		handleEditSubmit();
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<li className='admin-item'>
				<Avatar
					style={{ textTransform: "uppercase", marginBottom: "10px" }}
					size={64}
				>
					{first_name.charAt(0) + last_name.charAt(0)}
				</Avatar>
				<div className='admin-item-name-wrap'>
					<strong className='admin-name'>{first_name}</strong>
					<strong className='admin-surname'>{last_name}</strong>
				</div>
				<p className='admin-item-role'>{role}</p>
				<div className='admin-item-btn-wrap'>
					<Button
						style={{ marginRight: "10px" }}
						type='primary'
						danger
						onClick={handleDeleteAdmin}
					>
						Delete
					</Button>
					<Button type='primary' ghost onClick={showModal}>
						Edit
					</Button>
				</div>
			</li>

			<Modal
				title='Admin Information Edit'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<form onSubmit={handleEditSubmit}>
					<label>
						First Name
						<input
							className='admin-input'
							ref={firstNameRef}
							placeholder='First name'
							defaultValue={first_name}
						/>
					</label>
					<label>
						Last Name
						<input
							className='admin-input'
							ref={lastNameRef}
							placeholder='Last name'
							defaultValue={last_name}
						/>
					</label>
					<label>
						Role
						<select
							className='admin-input'
							ref={roleRef}
							defaultChecked={role}
							required
						>
							<option value='admin'>Admin</option>
							<option value='operator'>Operator</option>
							<option value='manager'>Manager</option>
							<option value='tutor'>Tutor</option>
						</select>
					</label>
				</form>
			</Modal>
		</>
	);
};
