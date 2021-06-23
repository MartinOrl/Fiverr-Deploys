import React, { useState } from 'react'

import SelectableContainer from '../../components/selectableContainer/selectableContainer'
import HeaderImg from '../../components/headerImg/headerImg'
import Checkbox from '../../components/checkbox/checkbox'

import { PageContainer, MethodsContainer, ColumnDetails, Summary, Section, SummarySection, LocalNav, Listening, Instructions } from './sellMethodStyles'

const SellMethod = () => {
    const [method, setMethod] = useState('')
    return (
        <div>
            <HeaderImg />
            <LocalNav>
                <img src="" alt="" />
                <div>
                    <p>Collections</p>
                    <h1>Name NFT</h1>
                </div>
            </LocalNav>
            <PageContainer>
                
                <ColumnDetails>
                    <h1>Select your sell method</h1>
                    <MethodsContainer>
                        <SelectableContainer active={method === 'price'} action={() => setMethod('price')} count={3}>
                            <h1>Set Price</h1>
                            <p>Sell at a fixed or declining price</p>
                        </SelectableContainer>
                        <SelectableContainer active={method === 'bid'} action={() => setMethod('bid')} count={3}>
                            <h1>Highest Bid</h1>
                            <p>Auction to the highest bidder</p>
                        </SelectableContainer>
                        <SelectableContainer active={method === 'bundle'} action={() => setMethod('bundle')} count={3}>
                            <h1>Bundle</h1>
                            <p>Group this item with others to sell</p>
                        </SelectableContainer>
                    </MethodsContainer>
                    <Section>
                        <div>
                            <h1>Price</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum ipsum, autem quasi consequuntur recusandae.</p>
                        </div>
                        <Checkbox />
                    </Section>
                    <Section>
                        <div>
                            <h1>Include ending price</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum ipsum, autem quasi consequuntur recusandae.</p>
                        </div>
                        <Checkbox />
                    </Section>
                    <Section>
                        <div>
                            <h1>Schedule for a future time</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum ipsum, autem quasi consequuntur recusandae.</p>
                        </div>
                        <Checkbox />
                    </Section>
                    <Section>
                        <div>
                            <h1>Privacy</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum ipsum, autem quasi consequuntur recusandae.</p>
                        </div>
                        <Checkbox />
                    </Section>
                    <Instructions>
                        <div>
                            <h1>Instructions</h1>
                            <p>&gt;</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati amet voluptatum natus inventore earum a molestias libero nemo maxime odio corporis recusandae laboriosam quaerat expedita esse, commodi rem, magnam iure dolorem architecto animi nihil?</p>
                    </Instructions>
                </ColumnDetails>
                <Summary>
                    <h1>Summary</h1>
                    <Listening>
                        <h1>Listening</h1>
                        <p>Your item will be listed for <span><img src="" alt="" /></span> 0.2</p>
                        <p>Post your listening</p>
                    </Listening>
                    <SummarySection>
                        <div>
                            <h1>Bounties</h1>
                            <p>Edit</p>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, consectetur iste laborum similique soluta incidunt. Ut, qui dignissimos debitis cumque, quaerat voluptate aut rem repudiandae ex, itaque nobis sint at libero impedit similique laborum aperiam?</p>
                    </SummarySection>
                    <SummarySection>
                        <h1>Fees</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, consectetur iste laborum similique soluta incidunt. Ut, qui dignissimos debitis cumque, quaerat voluptate aut rem repudiandae ex, itaque nobis sint at libero impedit similique laborum aperiam?</p>
                    </SummarySection>
                </Summary>
            </PageContainer>

        </div>
    )
}

export default SellMethod
