import React from 'react';
import {
    Container, 
    Base, 
    Input, 
    Submit, 
    Error, 
    Title, 
    Text, 
    TextDisclaimer, 
    Link
} from './styles/form';

export default function Form({ children, ...restOfProps}) {
    return <Container {...restOfProps}>{children}</Container>
}

Form.Input = function FormInput({children, ...restOfProps}) {
    return <Input {...restOfProps}>{children}</Input>
}

Form.Submit = function FormSubmit({children, ...restOfProps}) {
    return <Submit {...restOfProps}>{children}</Submit>
}

Form.Error = function FormError({children, ...restOfProps}) {
    return <Error {...restOfProps}>{children}</Error>
}

Form.Base = function FormBase({children, ...restOfProps}) {
    return <Base {...restOfProps}>{children}</Base>
}

Form.Title = function FormTitle({children, ...restOfProps}) {
    return <Title {...restOfProps}>{children}</Title>
}

Form.Text = function FormText({children, ...restOfProps}) {
    return <Text {...restOfProps}>{children}</Text>
}

Form.TextDisclaimer = function FormTextDisclaimer({children, ...restOfProps}) {
    return <TextDisclaimer {...restOfProps}>{children}</TextDisclaimer>
}

Form.Link = function FormLink({children, ...restOfProps}) {
    return <Link {...restOfProps}>{children}</Link>
}