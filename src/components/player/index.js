import React, {useState, useContext, createContext} from 'react';
import ReactDOM from 'react-dom';
import {Container, Overlay, Inner, Button, Close} from './styles/player';

export const PlayerContext = createContext();

export default function Player({children, ...restOfProps}) {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PlayerContext.Provider value={{showPlayer, setShowPlayer}} {...restOfProps}>
            <Container {...restOfProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({...restOfProps}) {
    const {showPlayer, setShowPlayer} = useContext(PlayerContext);
    return showPlayer ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)}>
            <Inner>
                <video id="netflix-player" controls>
                    <source src="/videos/bunny.mp4" type="video/mp4" />
                </video>
                <Close />
            </Inner>
        </Overlay>,
        document.body
    ) : null;
}

Player.Button = function PlayerButton({...restOfProps}) {
    const {showPlayer, setShowPlayer} = useContext(PlayerContext);

    return <Button onClick={()=> setShowPlayer(!showPlayer)}>Play</Button>
}