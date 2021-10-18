import React from 'react'
import styled from 'styled-components'

const EmailMessage = () => {
    return (
        <>
        <Container>
            <Message>
                <p>message sent!!!</p>
            </Message>
        </Container>
            
        </>
    )
}

export default EmailMessage

const Container = styled.div`
height: 0;
width: 0;

`;
const Message = styled.div`
height: 0;
width: 0;
`;

