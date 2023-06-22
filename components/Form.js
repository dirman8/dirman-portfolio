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
		// send("service_5ch3d9w", "template_wlu1smt", formState, "PuysGjU5g0IrqkFUK");
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
		<div className="w-full pt-24 pb-32 md:px-16">
			<div className="pb-4 text-center text-4xl font-medium text-white ">CONTACT</div>
			<div className="flex justify-center w-full md:px-16">
				<form className="flex flex-col max-w-3xl w-full pb-5 bg-darkPurple" onSubmit={onSubmit}>
					<div className="w-5/6 m-auto flex flex-col justify-between sm:flex-row">
						<span className={styles.leftContainer}>
							<input className={styles.input} id="name" name="name" type="text" placeholder="Name" onChange={handleChange} />
							<input className={styles.input} id="email" name="email" type="text" placeholder="Your Email" onChange={handleChange} />
							<input className={styles.input} id="subject" name="subject" type="text" placeholder="Subject" onChange={handleChange} />
						</span>
						<span className={styles.rightContainer}>
							<textarea className={styles.input} id="message" name="message" type="text" placeholder="Message" onChange={handleChange} />
						</span>
					</div>
					<div className="text-center m-auto w-5/6">
						<input className={`${styles.input} ${styles.submit}`} id="submit" type="submit" value="Submit" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
