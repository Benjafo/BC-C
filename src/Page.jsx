import './Page.css';

const Page = ( props ) => {
    return (
        <div className="page">
            <div className="split-page">
                { props.primaryContent }
            </div>
            <div className="container">
                <hr style={{ border: '2px solid white', width: '0', height: '75vh' }} />
            </div>
            <div className="split-page">
                { props.secondaryContent }
            </div>
        </div>
    )
}

export default Page