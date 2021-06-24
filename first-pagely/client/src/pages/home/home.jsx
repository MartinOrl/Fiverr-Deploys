import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import {Toggles, OverflowContainer, HeroBackground, RowContainer, Container, NameShadow, SectionName, LoadMore, CollectionPreview, Seller, LiveAuction } from './homeStyles'

import TopSeller from '../../components/topSeller/topSeller'
import Genre from '../../components/genre/genre'
import NFTCard from '../../components/nft/nft'
import Timer from '../../components/timer/timer'

import herobg from '../../assets/herobg.png'
import arrow from '../../assets/arrow.png'
import addImage from '../../assets/addImage.png'

import { collectionsData, genres, liveAuctions, nftsData, topSellers } from '../../testData'


const Home = () => {
    const [loadMore, setLoadMore] = useState(1)
    // const [ filters, setFilters ] = useState([])
    const history = useHistory()
    return (
        <div>
            <HeroBackground src={herobg} />
            <Container> 
                <h1>Top Sellers</h1>
                <OverflowContainer>
                    <RowContainer overflow='true'>
                        <div>
                            <img src={addImage} alt="" />
                        </div>
                        {
                            topSellers.map(seller => (
                                <TopSeller key={seller.id} data={seller} />
                            ))
                        }
                    </RowContainer>
                </OverflowContainer>
            </Container>
            <Container>
                <h1>Genres</h1>
                <OverflowContainer>
                    <RowContainer wrap='true' overflowable="true" >
                        {
                            genres.map((name, i) => (
                                <Genre key={i} name={name} action={() => {return ''}}/>
                            ))
                        }
                    </RowContainer>
                </OverflowContainer>
            </Container>
            <Container>
                <h1>Live Auctions</h1>
                <OverflowContainer>
                    <RowContainer wrap='true' justify='space-between' overflowable="true">
                        {
                            liveAuctions.map((auction, i) => (
                                <LiveAuction key={auction.id} onClick={() => history.push(`/nft/${auction.id}`)}>
         
                                    <div>
                                        <img src={auction.imgUrl} alt="" />
                                        <div></div>
                                    </div>
                                    <h1>{auction.name}</h1>
                                    <span></span>
                                    <p>Highest 1/1</p>
                                    <Timer end={auction.endDate} />
                                    <p>{auction.price ? `${auction.price} wETH` : '-'}</p>
                                </LiveAuction>
                            ))
                        }

                    </RowContainer>
                </OverflowContainer>
            </Container>
            <Container>
                    <SectionName>
                        <h1>Top Sellers</h1>
                        <NameShadow>Top Sellers</NameShadow>
                    </SectionName>
                    <OverflowContainer>
                        <RowContainer overflow='true'>
                            {
                                topSellers.map(seller => (
                                    <Seller key={seller.id} onClick={() => history.push('/profile')} >
                                        <img src={seller.profileUrl} alt="" />
                                        <h1>{seller.name}</h1>
                                        <p>{seller.ammount ? `${seller.ammount} ETH` : '-'}</p>
                                    </Seller>
                                ))
                            }
                        </RowContainer>
                    </OverflowContainer>
                    <Toggles>
                        <p>&lt;</p>
                        <p>&gt;</p>
                    </Toggles>
            </Container>
            <Container>
                <SectionName>
                    <h1>Explore</h1>
                    <NameShadow>Explore</NameShadow>
                </SectionName>
                <RowContainer wrap='true' width='90%' nft="true">

                    {
                        nftsData.map((nft, i) => {
                            if(i+1 <= 8*loadMore){
                                return <NFTCard key={nft.id}  {...nft} link={`/nft/${nft.id}`} />
                            }
                            return ''
                        })
                    }
                    
                
                </RowContainer>
                {
                    nftsData.length > 8*loadMore ? (<LoadMore onClick={() => setLoadMore(loadMore+1)}>Load More <span><img src={arrow} alt="" /></span></LoadMore>) : ''
                }
            </Container>
            <Container>
                <SectionName>
                    <h1>Collections</h1>
                    <NameShadow>Collections</NameShadow>
                </SectionName>
                <OverflowContainer>
                    <RowContainer wrap='true' justify='space-evenly' width='90%' overflowable='true'>
                        {
                            collectionsData.map(collection => (
                                <CollectionPreview key={collection.id}>
                                    <img src={collection.mainImg} alt="" />
                                    <div>
                                        {
                                            collection.others.map((item, i) => (
                                                <img src={item.imgUrl} alt="" key={i} />
                                            ))
                                        }
                                    </div>
                                    <div></div>
                                    <div></div>
                                </CollectionPreview>
                            ))
                        }
                    </RowContainer>
                </OverflowContainer>
            </Container>
        </div>
    )
}

export default Home;
