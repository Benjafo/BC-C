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
        <p>&nbsp;&#8226;&nbsp;Fourth year student at Rochester Institute of Technology Studying web development</p>
        <p>&nbsp;&#8226;&nbsp;Software engineer at the <a href="https://www.whoi.edu" target="_blank">Woods Hole Oceanographic Institution</a></p>
        <p>&nbsp;&#8226;&nbsp;Head of Online Sales & Trader at Numismatic Investments LLC</p>
        <p>&nbsp;&#8226;&nbsp;Software/web developer for six years & coin and bullion trader for eight years</p>
    </div>
    return (
        <Page primaryContent={services} secondaryContent={about} />
    )
}

export default About
