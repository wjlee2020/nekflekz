import React, {useState} from 'react';
import {Container, Frame, Inner, Title, Header, Body, Item} from './styles/accordion';

export default function Accordion({children, ...restOfProps}) {
    const [isClicked, setIsClicked] = useState(false);

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
    return <Item {...restOfProps}>{children}</Item>
}

Accordion.Title = function AccordionTitle({children, ...restOfProps}) {
    return <Title {...restOfProps}>{children}</Title>
}

Accordion.Header = function AccordionHeader({children, ...restOfProps}) {
    return <Header {...restOfProps}>{children}</Header>
}

Accordion.Body = function AccordionBody({children, ...restOfProps}) {
    return <Body {...restOfProps}>{children}</Body>
}

