import React from 'react';
import {Container, Item, Inner, Pane, Title, SubTitle, Image} from './styles/jumbotron'

export default function Jumbotron({children, direction = 'row', ...restOfProps}) {
    return (
        <Item {...restOfProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restOfProps}) {
    return <Container {...restOfProps}>{children}</Container>
}
Jumbotron.Pane = function JumbotronPane({children, ...restOfProps}) {
    return <Pane {...restOfProps}>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({children, ...restOfProps}) {
    return <Title {...restOfProps}>{children}</Title>
}
Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restOfProps}) {
    return <SubTitle {...restOfProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage({...restOfProps}) {
    return <Image {...restOfProps} />
}