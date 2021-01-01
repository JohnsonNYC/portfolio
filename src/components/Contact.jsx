import React, {useState} from 'react';
import Navbar from './Navbar';
import './Contact.css';
import { Parallax } from 'react-parallax'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import pdf from '../JohnsonResume.pdf'

import background from '../png/Johnson Portrait 2.jpg'

const Contact = () => {
    // eslint-disable-next-line
    const [numPages, setNumPages] = useState(null);
    // eslint-disable-next-line
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className='contact'>
            <Parallax bgImage={background} strength={200}>
                <div id='contact-banner'>
                    <Navbar />
                    <div className='contact-description-wrapper'>
                        <p className='contact-banner-text'>Past Experiences</p>
                    </div>
                </div>
            </Parallax>
            <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                className='resume-container'
            >
                <h2 id='blog-header' className='subtitle'> Resume </h2>
                <Page className='resume' pageNumber={pageNumber} height='800'/>
            </Document>
        </div>
    );
}

export default Contact;
