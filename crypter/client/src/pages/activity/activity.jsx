import React, { useState } from 'react'

import { Container, Heading, ActivityFilters, ActivityFilter, Filter, SelectionToggle, Checkmark, FiltersContainer } from './activityStyles'

import SubNavigation from '../../components/subNavigation/subNavigation'

//!   Component Testing

import { BurnPopup, RemovePopup, ReportPopup, TransferPopup } from '../../components/popups/popup'

//!   Component Testing

const Filters = ({checked, data, selectors, action}) => {
    
    return (
        <div>
            {
                data.map((item, i) => (
                    <Filter onClick={() => action(item)} key={i}>
                        <Checkmark onClick={(e) => {e.preventDefault()}} >
                            <input type="checkbox" name="" id="" checked={checked || selectors.includes(item) ? 1 : 0} readOnly={true} />
                            <span></span>
                        </Checkmark>
                        <p>{item}</p>
                    </Filter>
                ))
            }
        </div>
    )
}


const Activity = () => {
    const [activity, setActivity] = useState('myActivity')
    const [selector, setSelector] = useState([])
    const data = ['Sales', 'Listings', 'Bids', 'Burns', 'Followings', 'Likes', 'Purchase', 'Transfers']


    const handleFilterClick = (type) => {
        if(selector.includes(type)){
            setSelector(selector.filter(item => item !== type))
            return ''
        }
        setSelector([...selector, type])
        return ''
    }

    const handleSelectorClick = (type) => {
        if(selector === type){
            setSelector([])
        }
        else{
            setSelector(type)
        }
        return ''
    }

    return (
        <div>
            <TransferPopup />
            <SubNavigation page='Activity' />
            <Container>
                <div>
                    <Heading>
                        <h1>Activity</h1>
                        <p>Mark all as read</p>
                    </Heading>
                    <ActivityFilters>
                        <ActivityFilter activeActivity={activity === 'myActivity' ? 1 : 0} onClick={() => setActivity('myActivity')}  >My Activity</ActivityFilter>
                        <ActivityFilter activeActivity={activity === 'following' ? 1 : 0} onClick={() => setActivity('following')}  >Following</ActivityFilter>
                        <ActivityFilter activeActivity={activity === 'allActivity' ? 1 : 0} onClick={() => setActivity('allActivity')}  >All Activity</ActivityFilter>
                    </ActivityFilters>
                    <div>
                    
                    </div>
                </div>
                <FiltersContainer>
                    <h2>Filters</h2>
                    <Filters checked={selector === 'all' ? true : false} selectors={selector} data={data} action={handleFilterClick} />
                    <Container>
                        <SelectionToggle selector={ selector === data ? 1 : 0} onClick={() => handleSelectorClick(data)} >Select All</SelectionToggle>
                        <SelectionToggle selector={ selector === [] ? 1 : 0} onClick={() => handleSelectorClick([])} >Unselect All</SelectionToggle>
                    </Container>
                </FiltersContainer>
            </Container>

        </div>
    )
}

export default Activity
