import React from 'react';
import {Link as ReachRouterLink} from 'react-router-dom';
import {Background, Container, Logo, ButtonLink} from './styles/header';

export default function Header({bg = true, children, ...restOfProps}) {
    return bg ? <Background {...restOfProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({children, ...restOfProps}) {
    return <Container {...restOfProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({to, ...restOfProps}) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restOfProps} />
        </ReachRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({children, ...restOfProps}) {
    return <ButtonLink {...restOfProps}>{children}</ButtonLink>
    
}