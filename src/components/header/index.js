import React, {useState} from 'react';
import {Link as ReachRouterLink} from 'react-router-dom';
import {
    Group, 
    Background, 
    Link, 
    Text, 
    Container, 
    Logo, 
    ButtonLink, 
    Feature, 
    FeatureCallOut, 
    PlayButton,
    Search,
    SearchIcon,
    SearchInput,
    Picture, 
    Dropdown,
    Profile
    } from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restOfProps }) {
    return <FeatureCallOut {...restOfProps}>{children}</FeatureCallOut>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restOfProps}) {
    return <PlayButton {...restOfProps}>{children}</PlayButton>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restOfProps}) {
    const [searchActive, setSearchActive] = useState(false)
    return (
        <Search {...restOfProps}>
            <SearchIcon 
                onClick={() => setSearchActive(!searchActive)}>
                <img src="/images/icons/search.png" alt="search" />
            </SearchIcon>
            <SearchInput 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="search shows and movies"
                active={searchActive}
            />
        </Search>
    )
}

Header.Picture = function HeaderPicture({src, ...restOfProps}) {
    return <Picture src={`/images/users/${src}.png`} {...restOfProps} />
}

Header.Dropdown = function HeaderDropdown({children, ...restOfProps}) {
    return <Dropdown {...restOfProps}>{children}</Dropdown>
}

Header.Profile = function HeaderProfile({children, ...restOfProps}) {
    return <Profile {...restOfProps}>{children}</Profile>
}