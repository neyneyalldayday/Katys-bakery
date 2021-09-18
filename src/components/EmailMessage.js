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

const Container = styled.div``;
const Message = styled.div``;

