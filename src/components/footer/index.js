import React from 'react';
import {Container, Title, Text, Row, Column, Link, Break} from './styles/footer'

export default function Footer({children, ...restOfProps}) {
    return <Container {...restOfProps}>{children}</Container>
}

Footer.Row = function FooterRow({children, ...restOfProps}) {
    return <Row {...restOfProps}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...restOfProps}) {
    return <Column {...restOfProps}>{children}</Column>
}

Footer.Link = function FooterLink({children, ...restOfProps}) {
    return <Link {...restOfProps}>{children}</Link>
}

Footer.Title = function FooterTitle({children, ...restOfProps}) {
    return <Title {...restOfProps}>{children}</Title>
}

Footer.Break = function FooterBreak({...restOfProps}) {
    return <Break {...restOfProps}/>
}

Footer.Text = function FooterText({children, ...restOfProps}) {
    return <Text {...restOfProps}>{children}</Text>
}