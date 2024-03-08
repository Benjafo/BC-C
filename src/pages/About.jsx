import Page from '../Page'
import profile from '../assets/profile.jpg'
import './About.css'

const About = () => {
    const services = <div className="about">
        <h1>Service Offered</h1>
        <p>My goal is to make selling a collection as easy and smooth as possible. Two options are offered, giving you flexibility depending on what you are looking for. Consignment and outright sale are both available. With consignment, the more popular option, I will sell your inventory and you will receive a competitive final realization depending on the value of the inventory. If a single sale sounds more appealing, I can also put together an offer for the entire collection at once.</p>
    </div>
    const about = <div className="about">
        <img src={profile} alt='profile picture' />
        <h1>Ben Foley</h1>
        <p>&nbsp;&#8226;&nbsp;Graduate of Westford Academy Class of 2021</p>
        <p>&nbsp;&#8226;&nbsp;Web developer and third year student at Rochester Institute of Technology Studying Web and Mobile computing</p>
        <p>&nbsp;&#8226;&nbsp;Trader at wholesale bullion and numismatics shop Numismatic Investments LLC in Stoneham for two years</p>
        <p>&nbsp;&#8226;&nbsp;Numismatics and bullion trader for five years</p>
    </div>
    return (
        <Page primaryContent={services} secondaryContent={about} />
    )
}

export default About
