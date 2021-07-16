import React, { useState } from 'react'

import { Option, Heading, Container, QuestionContainer } from './faqStyles'
import { questionsData } from './questions'


import homeIcon from '../../assets/home.png'
import supportIcon from '../../assets/support.png'
import hostingIcon from '../../assets/bolt.png'
import productIcon from '../../assets/pen.png'
import chevron from '../../assets/chevron.png'



const Question = ({title, text, collapse, action, id}) => {
    let state = collapse ? '' : id
    return(
        <QuestionContainer collapse={collapse}>
            <div onClick={() => action(state)}>
                <h1>{title}</h1>
                <img src={chevron} alt="" />
            </div>
            <div>
                <p>{text}</p>
                <p>Learn more</p>
            </div>
        </QuestionContainer>
    )
}



const FAQ = () => {
    const [collapsed, setCollapsed] = useState('')
    const [faqCategory, setCategory] = useState('general')
    console.log(questionsData.filter(data => data.category === faqCategory))

    return (
        <div>
            <Heading>
                <p>LEARN HOW TO GET STARTED</p>
                <h1>Frequently Asked Questions</h1>
                <p>Join Stacks community now to get free updates and a lot of freebies are waiting for you or <span>Contact Support</span></p>
            </Heading>
            <Container>
                <div>
                    <Option active={faqCategory === 'general' ? 'true' : ''} onClick={() => setCategory('general')} >
                        <img src={homeIcon} alt="" />
                        <p>General</p>
                    </Option>
                    <Option active={faqCategory === 'support' ? 'true' : ''} onClick={() => setCategory('support')} >
                        <img src={supportIcon} alt="" />
                        <p>Support</p>
                    </Option>
                    <Option active={faqCategory === 'hosting' ? 'true' : ''} onClick={() => setCategory('hosting')} >
                        <img src={hostingIcon} alt="" />
                        <p>Hosting</p>
                    </Option>
                    <Option active={faqCategory === 'product' ? 'true' : ''} onClick={() => setCategory('product')} >
                        <img src={productIcon} alt="" />
                        <p>Product</p>
                    </Option>

                </div>
                <div>
                    {
                        questionsData.filter(data => data.category === faqCategory)[0].items.map(data => (
                            <Question {...data} key={data.id} collapse={collapsed === data.id} action={setCollapsed} />
                        ))
                    }
                
                </div>
            </Container>
        </div>
    )
}

export default FAQ
