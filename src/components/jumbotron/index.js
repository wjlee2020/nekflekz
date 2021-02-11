import React from 'react';
import {Container, Inner} from './styles/jumbotron'

function Jumbotron({children, direction = 'row', ...restOfProps}) {
    return (
        <Inner direction={direction}>
            {children}
        </Inner>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restOfProps}) {
    return <Container {...restOfProps}>{children}</Container>
}

export default Jumbotron;