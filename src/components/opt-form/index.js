import React from 'react';
import {Container, Input, Text, Button} from './styles/opt-form';

export default function OptForm({children, ...restOfProps}) {
    return (
        <Container {...restOfProps}>{children}</Container>
    )
}

OptForm.Input = function OptFormInput({...restOfProps}) {
    return <Input {...restOfProps}/>
}

OptForm.Text = function OptFormText({children, ...restOfProps}) {
    return (
        <Text {...restOfProps}>{children}</Text>
    )
}

OptForm.Button = function OptFormButton({children, ...restOfProps}) {
    return (
        <Button {...restOfProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="try now" />
        </Button>
    )
}