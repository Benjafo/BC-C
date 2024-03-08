import plat from '../assets/plat.png'
import Page from '../Page'
import './References.css'

const References = () => {
    const references = <div>
        <h1>References</h1>
        <div className="reference-list">
            <div className="reference">
                <p className="reference-content">&emsp;"Ben sold my Grandfather's coin collection for me. He helped to assess what was worth selling. The coins sold quickly, and his communication was excellent! It was a very positive experience."</p>
                <p>Kristi Bates - (978) 496-5947</p>
            </div>
            <div className="reference">
                <p className="reference-content">&emsp;"A crazy big shout out to Ben Foley for his expertise and certification to sell all of those coins that are taking up space in our basements. Got any of those?? We did, and in 24 hours we got a great return! A great, honest guy! Can't say enough! Got some coins taking up space? Call Ben!"</p>
                <p>Ann Cashman - (978) 394-2208</p>
            </div>
            <div className="reference">
                <p className="reference-content">&emsp;"Ben helped me sell my collection of coins 2 summers ago. I did not have the time to learn how to appraise them and to sell them for a fair price. I did not want to just take them to a coin shop because we all know we lose more money that way. I am so glad that Ben helped me because he was so easy to work with, fair, honest, and knowledgeable in numismatics. He took inventory which he listed on a spreadsheet and kept track of what sold and at what price. He shared the sheet with me online which was so convenient. He also uses Venmo which was a fast and easy way for us to make transactions. The total price he got for my collection was what I was hoping for!"</p>
                <p>Mary Philpot - (978) 317-8212</p>
            </div>
        </div>
    </div>
    const image = <img src={plat} alt="Platinum Coin" />
    return <Page primaryContent={references} secondaryContent={image} />
}

export default References