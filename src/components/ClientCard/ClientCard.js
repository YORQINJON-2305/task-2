import "./clientCard.css";
import { Avatar, Button, Modal } from "antd";
import axios from "axios";
import { useRef, useState } from "react";
import { GrLocation } from "react-icons/gr";

export const ClientCard = ({ data, getClients }) => {
	const { first_name, last_name, location, age, course, id } = data;
	const [isModalOpen, setIsModalOpen] = useState(false);

	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const locationRef = useRef();
	const ageRef = useRef();
	const courseRef = useRef();

	const handleEditSubmit = (evt) => {
		console.log(evt);
		axios
			.put(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients/${id}`, {
				first_name: firstNameRef.current.value,
				last_name: lastNameRef.current.value,
				location: locationRef.current.value,
				age: ageRef.current.value,
				course: courseRef.current.value,
			})
			.then((res) => {
				if (res.status === 200) {
					setIsModalOpen(false);
					getClients();
				}
			})
			.catch((err) => console.log(err));
	};

	const handleDeleteClient = () => {
		axios
			.delete(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients/${id}`)
			.then((res) => {
				if (res.status === 200) {
					getClients();
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
			<li className='client-item'>
				<Avatar
					style={{ textTransform: "uppercase", marginBottom: "10px" }}
					size={64}
				>
					{first_name.charAt(0) + last_name.charAt(0)}
				</Avatar>
				<div className='client-item-name-wrap'>
					<strong className='client-name'>{first_name}</strong>
					<strong className='client-surname'>{last_name}</strong>
				</div>
				<div className='client-item-info-wrap'>
					<p className='client-item-location'>
						<GrLocation /> {location}
					</p>
					<p className='client-item-age'>Age: {age}</p>
				</div>
				<p className='client-item-course'>{course}</p>
				<div className='client-item-btn-wrap'>
					<Button
						style={{ marginRight: "10px" }}
						type='primary'
						danger
						onClick={handleDeleteClient}
					>
						Delete
					</Button>
					<Button type='primary' ghost onClick={showModal}>
						Edit
					</Button>
				</div>
			</li>

			<Modal
				title='Client Information Edit'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<form onSubmit={(evt) => handleEditSubmit(evt)} required>
					<label>
						First Name
						<input
							className='client-input'
							ref={firstNameRef}
							placeholder='First name'
							defaultValue={first_name}
						/>
					</label>
					<label>
						Last Name
						<input
							className='client-input'
							ref={lastNameRef}
							placeholder='Last name'
							defaultValue={last_name}
						/>
					</label>
					<label>
						Age
						<input
							className='client-input'
							type='number'
							ref={ageRef}
							defaultValue={age}
							placeholder='Age'
						/>
					</label>
					<label>
						Location
						<select className='client-input' ref={locationRef}>
							<option value='Namangan'>Namangan</option>
							<option value='Andijon'>Andijon</option>
							<option value='Fargona'>Farg'ona</option>
							<option value='Toshkent'>Toshkent</option>
							<option value='Buxoro'>Buxoro</option>
							<option value='Samarqand'>Samarqand</option>
							<option value='Sirdaryo'>Sirdaryo</option>
							<option value='Surxondaryo'>Surxondaryo</option>
							<option value='Navoiy'>Navoiy</option>
							<option value='Jizzax'>Jizzax</option>
							<option value='Xorazm'>Xorazm</option>
							<option value='Qashqadaryo'>Qashqadaryo</option>
							<option value='Qoraqlpogiston'>Qoraqalpog'iston</option>
						</select>
					</label>
					<label>
						Course
						<select className='client-input' ref={courseRef}>
							<option value='uzbek'>Uzbek</option>
							<option value='rus'>Rus</option>
							<option value='english'>Ingliz</option>
						</select>
					</label>
				</form>
			</Modal>
		</>
	);
};
