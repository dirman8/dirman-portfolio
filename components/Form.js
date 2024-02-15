import { useState, useEffect } from "react";
import { send } from "emailjs-com";
import styles from "./Form.module.css";

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [subject, setSubject] = useState("");

	const onSubmit = (e) => {
		// e.preventDefault();

		const emailParams = {
			from_name: name,
			from_email: email,
			subject: subject,
			message: message,
		};

		console.log("emailParams :", emailParams);

		send("service_5ch3d9w", "template_wlu1smt", emailParams, "PuysGjU5g0IrqkFUK").then((response) => {
			console.log("Email sent successfully!", response);
		});
		return null;
	};

	const handleChange = (e) => {
		switch (e.currentTarget.id) {
			case "name":
				setName(e.currentTarget.value);
				break;
			case "email":
				setEmail(e.currentTarget.value);
				break;
			case "subject":
				setSubject(e.currentTarget.value);
				break;
			case "message":
				setMessage(e.currentTarget.value);
				break;
			default:
				return null;
		}
	};

	return (
		<div id="contact" className="bg-darkPurple flex flex-col w-full mt-10 md:px-16">
			<div className="font-futuramdbt pb-4 text-center text-3xl sm:text-4xl font-medium text-white ">CONTACT</div>
			<form className="flex flex-col pb-5" onSubmit={onSubmit}>
				<div className="w-5/12 mx-auto sm:flex-row">
					<input className={styles.input} id="name" name="name" type="text" placeholder="Name" onChange={handleChange} />
					<input className={styles.input} id="email" name="email" type="text" placeholder="Your Email" onChange={handleChange} />
					<input className={styles.input} id="subject" name="subject" type="text" placeholder="Subject" onChange={handleChange} />
					<textarea className={`${styles.input} h-40`} id="message" name="message" type="text" placeholder="Message" onChange={handleChange} />
					<button className={`${styles.input} ${styles.submit}`} id="submit" type="submit" value="Submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
