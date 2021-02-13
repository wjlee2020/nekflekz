import React, {useState, useContext, createContext} from 'react';
import {Container, Frame, Inner, Title, Header, Body, Item} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({children, ...restOfProps}) {
    return (
        <Container {...restOfProps}>
            <Inner>
              {children}
            </Inner>
        </Container>
    )
}
Accordion.Frame = function AccordionFrame({children, ...restOfProps}) {
    return <Frame {...restOfProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({children, ...restOfProps}) {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}> 
        <Item {...restOfProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Title = function AccordionTitle({children, ...restOfProps}) {
    return <Title {...restOfProps}>{children}</Title>
}

Accordion.Header = function AccordionHeader({children, ...restOfProps}) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext)

    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restOfProps}>
            {children}
            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="close icon" />
            ) : (
                <img src="/images/icons/add.png" alt="open icon" />
            )}
        </Header>
    )
}

Accordion.Body = function AccordionBody({children, ...restOfProps}) {
    const {toggleShow} = useContext(ToggleContext)

    return toggleShow ? <Body {...restOfProps}>{children}</Body> : null;
}

