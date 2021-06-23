import React, { Component } from 'react'

import {SearchBarContainer, StyledInput, SearchButton, SearchIcon} from './searchBarStyles'

import magnifySmall from '../../../assets/magnifySmall.png'
import magnifyBig from '../../../assets/magnifyBig.png'

export default class SearchBar extends Component {
    constructor(){
        super()
        this.state = {
            search: ''
        }
    }
    render() {
        return (
            <SearchBarContainer>
                <SearchIcon src={magnifySmall} alt="" />
                <StyledInput  placeholder="Search Anything" onChange={(e) => this.setState({search: e.target.value})}/>
                <SearchButton src={magnifyBig} alt="" />
            </SearchBarContainer>
        )
    }
}
