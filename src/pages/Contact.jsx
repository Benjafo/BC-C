import silver from '../assets/silver.png'
import './Contact.css'
import Page from './Page'

const Contact = () => {
    const form = <div className="contact-form">
        <h1>Contact</h1>
        <p>For all inquiries, please fill out the form below. Please allow up to one day for a response.</p>
        <form method="GET">
            <div className="inputs">
                <div className="form-split">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required />
                    <br/>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" required />
                    <br/>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" />
                </div>
                <div className="form-split">
                    <label htmlFor="message">Message</label>
                    <input type="text" name="message" required />
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    const image = <img src={silver} alt="Silver Coin" />
    return <Page primaryContent={image} secondaryContent={form} />
}

export default Contact