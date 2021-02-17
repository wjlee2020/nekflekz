import React, { useState, useContext } from 'react';
import {Header} from '../components';
import * as ROUTES from '../constants/routes';
import {FirebaseContext} from '../context/firebase';
import {SelectProfileContainer} from './profiles';
import {FooterContainer} from './footer';

export function BrowseContainer() {
    const [profile, setProfile] = useState({})
    const [category, setCategory] = useState('shows')
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    const {firebase} = useContext(FirebaseContext)

    const user = {
        displayName: "Paul",
        photoURL: "1"
    };

    return profile.displayName ? (
        <>
            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.png" alt="logo" />
                        <Header.Link 
                            active={category === 'shows' ? 'true' : 'false'}
                            onClick={() => setCategory('shows')}>
                            Shows
                        </Header.Link>
                        <Header.Link 
                            active={category === 'movies' ? 'true' : 'false'}
                            onClick={() => setCategory('movies')}>
                            Movies
                        </Header.Link>
                    </Header.Group>

                    <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </Header.Frame>
                
                <Header.Feature>
                    <Header.FeatureCallOut>Watch The Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                    City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                    futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                </Header.Feature>
                <Header.PlayButton>Play</Header.PlayButton>
            </Header>
            <FooterContainer />
        </> )
            : (<SelectProfileContainer user={user} setProfile={setProfile} />)
}