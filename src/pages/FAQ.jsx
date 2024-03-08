import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React from 'react';
import Page from '../Page';
import junk from '../assets/junk.png';
import './FAQ.css';

const FAQ = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const changePanel = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const faq = <div>
        <Accordion className="accordion" expanded={expanded === 'panel1'} onChange={changePanel('panel1')}>
            <AccordionSummary>
                <p>What types of coin collections do you purchase?</p>
            </AccordionSummary>
            <AccordionDetails>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </p>
            </AccordionDetails>
        </Accordion>
        <Accordion className="accordion" expanded={expanded === 'panel2'} onChange={changePanel('panel2')}>
            <AccordionSummary>
                <p>How can I trust that you will provide a fair offer for my coin collection?</p>
            </AccordionSummary>
            <AccordionDetails>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </p>
            </AccordionDetails>
        </Accordion>
        <Accordion className="accordion" expanded={expanded === 'panel3'} onChange={changePanel('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <p>How long does the appraisal and purchase process take?</p>
            </AccordionSummary>
            <AccordionDetails>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </p>
            </AccordionDetails>
        </Accordion>
    </div>
    const image = <img src={junk} alt="Junk Silver Coins" />

    return <Page primaryContent={faq} secondaryContent={image} />
}

export default FAQ