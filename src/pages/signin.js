import React, {useState} from 'react';
import {Form} from '../components';
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer';

export default function Signin() {
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    
    const isDisabled = emailAddress === '' | password === '';

    const handleSignin = e => {
        e.preventDefault();
        // call firebase to auth
        // if error, pop error state
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input 
                            required
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value)}
                        />
                        <Form.Input 
                            required
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="password"
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit 
                            type="submit"
                            disabled={isDisabled}>
                            Sign In
                        </Form.Submit>
                        <Form.Text>
                            New Here? <Form.Link to="/signup">Sign Up Here!</Form.Link>
                        </Form.Text>
                        <Form.TextDisclaimer>This page is protected by Google reCAPTCHA.</Form.TextDisclaimer>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}