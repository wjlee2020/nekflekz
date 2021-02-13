import React from 'react';
import {FaqsContainer} from '../containers/faqs'
import {JumbotronContainer} from '../containers/jumbotron';
import {FooterContainer} from '../containers/footer'

export function Home() {
    return (
        <>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    )
}