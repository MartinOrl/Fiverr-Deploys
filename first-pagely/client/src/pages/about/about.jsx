import React from 'react'

import { AboutContainer ,AboutHeroContainer, TeamMember, Holder, Background, SectionTitle } from './aboutStyles'

import HeaderImg from '../../components/headerImg/headerImg'

import aboutImg from '../../assets/aboutImg.png'
import person from '../../assets/person.png'
import { teamMembers } from '../../testData'
import FAQQuestion from '../../components/faqQuestion/faqQuestion'





const About = () => {
    return (
        <AboutContainer>
            <HeaderImg />
            <div>
                <SectionTitle>About Us</SectionTitle>
                <AboutHeroContainer>
                    <img src={aboutImg} alt="" />
                    <div>
                        <SectionTitle>Our Company</SectionTitle>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati libero. Consectetur, est maiores at eaque nam expedita ipsa labore eos minima! Possimus vitae culpa minus assumenda. Commodi, sit perspiciatis!
                        Iure placeat officiis voluptates sapiente exercitationem! Voluptatibus tenetur totam voluptatum laboriosam! Itaque nulla laudantium deserunt officia sequi quibusdam perspiciatis repellendus voluptates. Ut eum nisi laboriosam, neque itaque eius tenetur provident.
                        </p>
                    </div>
                </AboutHeroContainer>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rerum quaerat repudiandae possimus aut dolore incidunt ea molestiae. Quis asperiores, fuga, fugit dignissimos doloremque dolores ipsum, excepturi ratione ducimus adipisci sed molestiae earum sit! Aperiam nihil voluptas mollitia, deleniti error, itaque dolore laboriosam dolorem exercitationem perferendis beatae, eligendi vero nulla pariatur fugiat iure reiciendis libero eos. Praesentium natus repudiandae nam!
                </p>
                <SectionTitle>Our Team</SectionTitle>
                <div style={{position: 'relative', zIndex:'2'}}>
                    <Holder>
                        {
                            teamMembers.map(member => (
                                <TeamMember key={member.id}>
                                    <img src={person} alt="" />
                                    <h1>{member.name}</h1>
                                    <span></span>
                                    <p>{member.position}</p>
                                    <p>{member.description}</p>
                                    <div></div>
                                    <div></div>
                                </TeamMember>
                            ))
                        }
                    </Holder>
                    <SectionTitle>Frequently Asked Questions</SectionTitle>
                    <Holder>
                        <FAQQuestion />
                        <FAQQuestion />
                        <FAQQuestion />
                        <FAQQuestion />
                        <FAQQuestion />
                        <FAQQuestion />
                    </Holder>
                    <Background />
                </div>
            </div>
        </AboutContainer>
    )
}

export default About;
