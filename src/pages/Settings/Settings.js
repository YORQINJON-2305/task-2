import { PlusOutlined } from "@ant-design/icons";
import "./settings.css";
import { Button, Modal } from "antd";
import { useRef, useState } from "react";
import axios from "axios";

export const Settings = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [clientModal, setClientModal] = useState(false);

	// ADMIN REF
	const adminNameRef = useRef();
	const adminLastNameRef = useRef();
	const adminRoleRef = useRef();

	// CLIENT REF
	const clientNameRef = useRef();
	const clientLastNameRef = useRef();
	const clientLocationRef = useRef();
	const clientAgeRef = useRef();
	const clientCourseRef = useRef();

	// NEW ADMIN SUBMIT
	const handleNewAdminSubmit = (evt) => {
		axios
			.post("https://6420342c82bea25f6dfc0e94.mockapi.io/rc/users", {
				first_name: adminNameRef.current.value,
				last_name: adminLastNameRef.current.value,
				role: adminRoleRef.current.value,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	// NEW CLIENT SUBMIT
	const handleNewClientSubmit = (evt) => {
		axios
			.post("https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients", {
				first_name: clientNameRef.current.value,
				last_name: clientLastNameRef.current.value,
				location: clientLocationRef.current.value,
				age: clientAgeRef.current.value,
				course: clientCourseRef.current.value,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	const showModal = () => {
		setIsModalOpen(true);
	};

	const showClientModal = () => {
		setClientModal(true);
	};

	const handleOk = () => {
		handleNewAdminSubmit();
		setIsModalOpen(false);
	};

	const handleOkClient = () => {
		handleNewClientSubmit();
		setClientModal(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
		setClientModal(false);
	};

	return (
		<div className='setting-wrap'>
			<div className='setting-list'>
				<Button
					onClick={showModal}
					style={{
						padding: "40px 50px 70px 50px",
						fontSize: "24px",
						marginRight: "30px",
					}}
				>
					<PlusOutlined />
					New Admin
				</Button>

				<Button
					onClick={showClientModal}
					style={{ padding: "40px 50px 70px 50px", fontSize: "24px" }}
				>
					<PlusOutlined />
					New Client
				</Button>

				{/* NEW ADMIN MODAL */}
				<Modal
					title='New Admin'
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
				>
					<form onSubmit={handleNewAdminSubmit}>
						<label>
							First Name
							<input
								className='new-user-input'
								type='text'
								ref={adminNameRef}
								placeholder='First Name'
							/>
						</label>
						<label>
							Last Name
							<input
								className='new-user-input'
								type='text'
								ref={adminLastNameRef}
								placeholder='Last Name'
							/>
						</label>
						<label>
							Role
							<select className='new-user-input' ref={adminRoleRef}>
								<option value='admin'>Admin</option>
								<option value='operator'>Operator</option>
								<option value='manager'>Manager</option>
								<option value='tutor'>Tutor</option>
							</select>
						</label>
					</form>
				</Modal>

				{/* NEW CLIENT MODAL */}
				<Modal
					title='New Client'
					open={clientModal}
					onOk={handleOkClient}
					onCancel={handleCancel}
				>
					<form onSubmit={handleNewClientSubmit}>
						<label>
							First Name
							<input
								className='new-user-input'
								type='text'
								ref={clientNameRef}
								placeholder='First Name'
							/>
						</label>
						<label>
							Last Name
							<input
								className='new-user-input'
								type='text'
								ref={clientLastNameRef}
								placeholder='Last Name'
							/>
						</label>
						<label>
							Age
							<input
								className='new-user-input'
								type='number'
								ref={clientAgeRef}
								placeholder='Age'
							/>
						</label>
						<label>
							Course
							<select className='new-user-input' ref={clientCourseRef}>
								<option value='uzbek'>Uzbek</option>
								<option value='rus'>Rus</option>
								<option value='ingliz'>Ingliz</option>
							</select>
						</label>
						<label>
							Location
							<select className='new-user-input' ref={clientLocationRef}>
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
					</form>
				</Modal>
			</div>
		</div>
	);
};
