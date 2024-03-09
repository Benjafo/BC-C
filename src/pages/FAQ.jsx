import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

    const FAQData = [
        {
            question: 'What types of coin collections do you purchase?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            panel: 'question1'
        },
        {
            question: 'How can I trust that you will provide a fair assessment and offer for my coin collection?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            panel: 'question2'
        },
        {
            question: 'What expertise do you have in evaluating coin collections?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            panel: 'question3'
        },
        {
            question: 'How long does the evaluation process typically take?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            panel: 'question4'
            
        },
        {
            question: 'What happens to my coin collection after I sell it to you?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            panel: 'question5'
            
        }
    ]

    const FAQs = <div className="faq-page">
        <h1>Frequently Asked Questions</h1>
        {FAQData.map((faq) => (
            <Accordion sx={{backgroundColor:'black'}} expanded={expanded === faq.panel} key={faq.panel} onChange={changePanel(faq.panel)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
                    <p className='faq-question'>{faq.question}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='faq-answer'>{faq.answer}</p>
                </AccordionDetails>
            </Accordion>
        ))}
    </div>
    const image = <img src={junk} alt="Junk Silver Coins" />

    return <Page primaryContent={FAQs} secondaryContent={image} />
}

export default FAQ