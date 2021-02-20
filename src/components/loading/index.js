import React from 'react';
import {Spinner, ReleaseBody, LockBody, Picture} from './styles/loading';

export default function Loading({src, ...restOfProps}) {
    return (
        <Spinner {...restOfProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`}/>
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody({...restOfProps}) {
    return <ReleaseBody {...restOfProps}/>
}