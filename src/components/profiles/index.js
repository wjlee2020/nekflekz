import React from 'react';
import {Container, Title, List, Item, Picture, Name} from './styles/profiles';

export default function Profiles({children, ...restOfProps}) {
    return (
        <Container {...restOfProps}>{children}</Container>
    )
}

Profiles.Title = function ProfilesTitle({children, ...restOfProps}) {
    return <Title {...restOfProps}>{children}</Title>
}

Profiles.List = function ProfilesList({children, ...restOfProps}) {
    return <List {...restOfProps}>{children}</List>
} 

Profiles.User = function ProfilesUser({children, ...restOfProps}) {
    return <Item {...restOfProps}>{children}</Item>
}

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` :
    '/images/misc/loading.gif'} />;
}

Profiles.Name = function ProfilesName({children, ...restOfProps}) {
    return <Name {...restOfProps}>{children}</Name>
}