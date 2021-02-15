import React from 'react';
import {Feature, OptForm} from '../components'
import {FaqsContainer} from '../containers/faqs'
import {JumbotronContainer} from '../containers/jumbotron';
import {FooterContainer} from '../containers/footer'
import {HeaderContainer} from '../containers/header'

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unliminted movies, TV shows, and anime.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    )
}