import React from 'react';
import {Container, Title, SubTitle} from './styles/feature';

export default function Feature({children, ...restOfProps}) {
    return (
        <Container {...restOfProps}>{children}</Container>
    )
}

Feature.Title = function FeatureTitle({children, ...restOfProps}) {
    return <Title {...restOfProps}>{children}</Title>
}

Feature.SubTitle = function FeatureSubTitle({children, ...restOfProps}) {
    return <SubTitle {...restOfProps}>{children}</SubTitle>
}