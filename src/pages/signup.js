import React, {useState, useContext} from 'react';
import {FirebaseContext} from '../context/firebase';
import {useHistory} from 'react-router-dom';
import {Form} from '../components';
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Signup() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext)

    const [error, setError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    
    const isDisabled = firstName === '' | emailAddress === '' | password === '';

    const handleSignup = e => {
        e.preventDefault();
        // post to firebase to save data
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5 ) + 1,
                })
                .then(() => {
                    history.push(ROUTES.BROWSE)
                })
                // if error, pop error state
            ).catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up, Here!</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input 
                            placeholder="First Name"
                            value={firstName}
                            onChange={({target}) => setFirstName(target.value)}
                        />
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
                            placeholder="Password"
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit 
                            type="submit"
                            disabled={isDisabled}>
                            Sign Up
                        </Form.Submit>
                        <Form.Text>
                            Already Have an Account? <Form.Link to="/signin">Sign In.</Form.Link>
                        </Form.Text>
                        <Form.TextDisclaimer>This page is protected by Google reCAPTCHA.</Form.TextDisclaimer>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}