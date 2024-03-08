import Page from '../Page'
import gold from '../assets/gold.png'
import './Contact.css'

const Contact = () => {
    const form = <div className="contact-form">
        <h1>Contact</h1>
        <p>For all inquiries, please fill out the form below. Please allow up to one day for a response.</p>
        <form method="GET">
            <div className="inputs">
                <div className="form-split">
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" required />
                        <br/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name="email" required />
                        <br/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name="phone" />
                        <br/>
                    </div>
                </div>
                <div className="form-split">
                    <label htmlFor="message">Message</label>
                    <input type="text" name="message" required />
                    <br/>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    const image = <img src={gold} alt="Gold Coin" />
    return <Page primaryContent={image} secondaryContent={form} />
}

export default Contact