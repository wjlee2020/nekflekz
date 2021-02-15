import React from 'react';
import {OptForm} from '../components'
import {FaqsContainer} from '../containers/faqs'
import {JumbotronContainer} from '../containers/jumbotron';
import {FooterContainer} from '../containers/footer'
import {HeaderContainer} from '../containers/header'
export function Home() {
    return (
        <>
            <HeaderContainer>
                <OptForm>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    <OptForm.Input placeholder="Email Address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                </OptForm>
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    )
}