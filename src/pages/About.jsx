import Page from '../Page'
import profile from '../assets/profile.jpg'
import './About.css'

const About = () => {
    const services = <div className="about">
        <h1>Service Offered</h1>
        <p>My goal is to make selling a collection as easy and smooth as possible. I purchase collections of any size of all gold and silver coins, old United States coins and paper money, and bullion (gold, silver, and platinum) at a fair and reasonable market rate.</p>
    </div>
    const about = <div className="about">
        <img src={profile} alt='profile picture' />
        <h1>About <menu type="context"></menu></h1>
        <p>&nbsp;&#8226;&nbsp;Graduate of Westford Academy Class of 2021</p>
        <p>&nbsp;&#8226;&nbsp;Web developer and fourth year student at Rochester Institute of Technology Studying web development</p>
        <p>&nbsp;&#8226;&nbsp;Trader at wholesale bullion and numismatics shop Numismatic Investments LLC in Stoneham for two years</p>
        <p>&nbsp;&#8226;&nbsp;Solo numismatics and bullion trader for six years</p>
    </div>
    return (
        <Page primaryContent={services} secondaryContent={about} />
    )
}

export default About
