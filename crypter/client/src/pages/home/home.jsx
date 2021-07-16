import React from 'react'

import PopularSeller from '../../components/popularSeller/popularSeller'

import { popularSellers } from '../../testData'

const Home = () => {
    return (
        <div>
            {
                popularSellers.map(seller => (
                    <PopularSeller {...seller} />
                ))
            }
        </div>
    )
}

export default Home
