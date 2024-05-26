import emailjs from 'emailjs-com';
import Page from '../Page';
import gold from '../assets/gold.png';
import './Contact.css';

const Contact = () => {

    const SERVICE_ID = "service_k8405m7"
    const TEMPLATE_ID = "template_9ijfb73"
    const PUBLIC_KEY = "XfPdtDGppIXiPye7f"

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((res) =>  console.log('Message Sent Successfully', res),
                (error) => console.log(error.text));
        e.target.reset()
    };

    const form = <div className="contact-form">
        <h1>Contact</h1>
        <p>For all inquiries, please fill out the form below. Please allow up to one day for a response.</p>
        <form onSubmit={handleOnSubmit}>
            <div className="inputs">
                <div className="form-split">
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" required />
                        <br />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name="email" required />
                        <br />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name="phone" />
                        <br />
                    </div>
                </div>
                <div className="form-split">
                    <label htmlFor="message">Message</label>
                    <input type="text" name="message" required />
                    <br />
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    const image = <img src={gold} alt="Gold Coin" />
    return <Page primaryContent={image} secondaryContent={form} />
}

export default Contact