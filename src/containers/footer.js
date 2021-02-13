import React from 'react';
import {Footer} from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Contacts?</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQs</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to Watch</Footer.Link>
                    <Footer.Link href="#">Corpate Info</Footer.Link>
                    <Footer.Link href="#">Nekflekz Originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Help Center</Footer.Link>
                    <Footer.Link href="#">Careers</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Contact Me</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Your Account</Footer.Link>
                    <Footer.Link href="#">Redeem Gifts</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Commercial Transactions</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Media Center</Footer.Link>
                    <Footer.Link href="#">Buy Gift Cards</Footer.Link>
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break/>
            <Footer.Text>Nekflekz So.Ko</Footer.Text>
        </Footer>
    )
}