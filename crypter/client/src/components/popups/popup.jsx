import React from 'react'

import { GlobalContainer, Container, Button, StyledInput, StyledTextArea, Label } from './popupStyles'

export const TransferPopup = () => {
    return (
        <GlobalContainer>
            <Container>
                <div>
                    <h1>Transfer Token</h1>
                    <h3>X</h3>
                </div>
                <p>You can transfer tokens from your address to another</p>
                <h2 style={{marginBottom: '0'}}>Receiver address</h2>
                <StyledInput type="text" name="address" id="address" placeholder='Paste address' />
                <Button >Continue</Button>
                <Button type="cancel" >Cancel</Button>
            </Container>
        </GlobalContainer>

    )
}



export const BurnPopup = () => {
    return (
        <GlobalContainer>
            <Container>
                <div>
                    <h1>Burn Token</h1>
                    <h3>X</h3>
                </div>
                <p>Are you sure to burn this token? This action cannot be undone. Token will be transfered to zero address</p>
                <Button type='burn'>Continue</Button>
                <Button type="cancel" >Cancel</Button>
            </Container>
        </GlobalContainer>
    )
}


export const RemovePopup = () => {
    return (
        <GlobalContainer>
            <Container>
                <div>
                    <h1>Remove from sale</h1>
                    <h3>X</h3>
                </div>
                <p>Do you really want to remove your item from sale? You can put it on sale anytime</p>
                <Button >Continue</Button>
                <Button type="cancel" >Cancel</Button>
            </Container>
        </GlobalContainer>
        
    )
}


export const ReportPopup = () => {
    return (
        <GlobalContainer>
            <Container>
                <div>
                    <h1>Report</h1>
                    <h3>X</h3>
                </div>
                <p>Describe why you think this item should be removed from marketplace</p>
                <Label htmlFor="message">MESSAGE</Label>
                <StyledTextArea name="message" id="message" cols="30" rows="10" placeholder='Tell us about yourself'></StyledTextArea>
                <Button >Send Now</Button>
                <Button type="cancel" >Cancel</Button>
            </Container>
        </GlobalContainer>

    )
}

