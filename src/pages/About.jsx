import profile from '../assets/profile.jpg'
import './About.css'
import Page from './Page'

const About = () => {
    const about = <div className="about">
        <div className="about-details">
            <h1>Ben Foley</h1>
            <p>Graduate of Westford Academy Class of 2021</p>
            <p>Web developer and third year student at Rochester Institute of Technology Studying Web and Mobile computing</p>
            <p>Trader at wholesale bullion and numismatics shop Numismatic Investments LLC in Stoneham for two years</p>
            <p>Numismatist and bullion trader for four years</p>
        </div>
        <img src={profile} alt='profile picture' />
    </div>
    const services = <div>
        <h1>Service Offered</h1>
        <p>My goal is to make selling a collection as easy and smooth as possible. Two options are offered, giving you flexibility depending on what you are looking for. Consignment and outright sale are both available. With consignment, the more popular option, I will sell your inventory and you will receive a competitive final realization depending on the value of the inventory. If a single sale sounds more appealing, I can also put together an offer for the entire collection at once.</p>
    </div>
    return (
        <Page primaryContent={about} secondaryContent={services} />
    )
}

export default About
