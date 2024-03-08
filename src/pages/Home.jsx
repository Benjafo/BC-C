import silver from '../assets/silver.png'
import Page from '../Page'

const Home = () => {
  const title = <h1>Simple, quick, and trustworthy collection liquidation</h1>
  const image = <img src={silver} alt="Silver Coin" />
  return <Page primaryContent={title} secondaryContent={image} />
}

export default Home