import gold from '../assets/gold.png'
import Page from './Page'

const Home = () => {
  const title = <h1>Simple, quick, and trustworthy collection liquidation</h1>
  const image = <img src={gold} alt="Gold Coin" />
  return <Page primaryContent={title} secondaryContent={image} />
}

export default Home