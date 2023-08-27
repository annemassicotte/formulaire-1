import { useState } from "react";
import BsForm from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Input from "./Input";

const Form = () => {
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	});

	const onChange = (newValue, id) => {
		setFormData({
			...formData,
			[id]: newValue,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();

		alert(JSON.stringify(formData, null, 2));
	};

	return (
		<BsForm onSubmit={onSubmit}>
			<Row className="d-flex gap-3">
				<Input value={formData.firstname} id="firstname" onChange={onChange} />

				<Input value={formData.lastname} id="lastname" onChange={onChange} />

				<Input
					type="email"
					value={formData.email}
					id="email"
					onChange={onChange}
				/>

				<Input
					type="password"
					value={formData.password}
					id="password"
					onChange={onChange}
				/>
			</Row>

			<Button
				type="submit"
				onSubmit={onSubmit}
				className="mt-3 container-fluid bg-success border-success">
				Claim your free trial
			</Button>
		</BsForm>
	);
};

export default Form;
