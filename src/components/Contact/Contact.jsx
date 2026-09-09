import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../../assets/css/Contact.css";
import { emailHref, links } from "../../data/links";

const contactDetails = [
	[faEnvelope, "Email", links.email, emailHref],
	[faLinkedin, "LinkedIn", "Connect via LinkedIn", links.linkedin],
	[faGithub, "GitHub", "View my GitHub profile", links.github],
	[faLocationDot, "Location", "Bangladesh"]
];

export default function Contact() {
	const [status, setStatus] = useState("");
	const [messageLength, setMessageLength] = useState(0);
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}
		const data = new FormData(form);
		const subject = data.get("subject");
		const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
		const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(links.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
		setStatus("Gmail compose opened with your message ready to send.");
	};

	return (
		<section className="contact-section" id="contact">
			<div className="contact-decoration contact-decoration-line" aria-hidden="true" />
			<div className="contact-content">
				<header className="contact-header">
					<span>Get In Touch</span>
					<h2>Let's <strong>Work Together</strong></h2>
					<p>Have a project, opportunity, or just want to connect?<br />I&apos;d be happy to hear from you.</p>
				</header>
				<div className="contact-layout">
					<div className="contact-details">
						{contactDetails.map(([icon, label, value, href]) => (
							<div className="contact-detail" key={label}>
								<span className="contact-detail-icon" aria-hidden="true"><FontAwesomeIcon icon={icon} /></span>
								<div><b>{label}</b>{href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{value}</a> : <p>{value}</p>}</div>
							</div>
						))}
					</div>
					<form className="contact-form" onSubmit={handleSubmit} noValidate>
						<label className="contact-field"><span>Your Name</span><input type="text" name="name" placeholder="Your Name" autoComplete="name" required /></label>
						<label className="contact-field"><span>Your Email</span><input type="email" name="email" placeholder="Your Email" autoComplete="email" required /></label>
						<label className="contact-field"><span>Subject</span><input type="text" name="subject" placeholder="Subject" required /></label>
						<label className="contact-field contact-message-field"><span>Your Message</span><textarea name="message" placeholder="Tell me about your project..." rows="3" maxLength="500" onChange={(event) => setMessageLength(event.target.value.length)} required /><small>{messageLength}/500</small></label>
						<button className="contact-submit" type="submit"><span>Send Message</span><FontAwesomeIcon icon={faPaperPlane} /></button>
						{status && <p className="contact-form-status" role="status">{status}</p>}
					</form>
				</div>
			</div>
		</section>
	);
}
