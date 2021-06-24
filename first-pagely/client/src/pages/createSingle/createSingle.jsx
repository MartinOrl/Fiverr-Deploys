import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading'

import { PriceContainer, ChangesButton, CreateButton, Currency, ButtonContainer, Subtext, SectionHeading, CollectionChoice, BonusInfo ,PageContainer, ColumnDetails, ColumnPreview, PageTitle, Row, Section, SectionTitle, SectionDescription, FileUploadContainer, Selections, StyledInput } from './createSingleStyles'

import HeaderImg from '../../components/headerImg/headerImg'
import SelectableContainer from '../../components/selectableContainer/selectableContainer'
import Checkbox from '../../components/checkbox/checkbox'

import testImg from '../../assets/ether.png'
import { useHistory } from 'react-router-dom'

import priceTag from '../../assets/priceTag.png'
import clock from '../../assets/clock.png'
import unlimited from '../../assets/infinity.png'

const CreateSingle = () => {
    const [ activeSelection, setActiveSelection ] = useState('')
    const [ file, setFile ] = useState([])
    const [collapse, setCollapse] = useState(false)
    const [currency, setCurrency] = useState('ETH')
    const [price, setPrice] = useState(0)
    const history = useHistory()

    const handleUpload = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex)
        setFile(imageList)
        console.log(imageList[0].file.name)
    }

    return (
        <PageContainer>
            <HeaderImg />
            <PageTitle>Create Single Collectible</PageTitle>
            <Row>
                <ColumnDetails>
                    <div>
                        <div>
                            <Section>
                                <SectionTitle>Upload File</SectionTitle>
                                <FileUploadContainer>
                                    <p>Highest Bid</p>
                                    
                                    <ImageUploading multiple='true' value={file} onChange={handleUpload} maxNumber={1} dataURLKey='data_url'>
                                        {({imageList, onImageUpload, onImageUpdate}) => {
                                            
                                            return(
                                                <div>
                                                    <p onClick={() => {
                                                        onImageUpload()
                                                        onImageUpdate(0)  
                                                    }}>Upload File</p>
                    
                                                </div>
                                            )
                                        }}
                                    </ImageUploading>
                                    
                                    <input type="file" name="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
                                </FileUploadContainer>
                            </Section>
                            <Section>
                                <SectionHeading>
                                    <div>
                                        <SectionTitle>Put on marketplace</SectionTitle>
                                        <SectionDescription>Enter price to allow users instantly purchase your NFT</SectionDescription>
                                    </div>
                                    <Checkbox />
                                </SectionHeading>
                                <Selections>
                                    <SelectableContainer count={3} active={activeSelection === 'price'} action={() => setActiveSelection('price')} >
                                        <img src={priceTag} alt="" />
                                        <p>Fixed Price</p>
                                    </SelectableContainer>
                                    <SelectableContainer count={3} active={activeSelection === 'timed'} action={() => setActiveSelection('timed')} >
                                        <img src={clock} alt="" />
                                        <p>Timed Auction</p>
                                    </SelectableContainer>
                                    <SelectableContainer count={3} active={activeSelection === 'unlimited'} action={() => setActiveSelection('unlimited')} >
                                        <img src={unlimited} alt="" />
                                        <p>Unlimited Auction</p>
                                    </SelectableContainer>
                                </Selections>
                            </Section>
                            <Section>
                                <SectionTitle>Price</SectionTitle>
                                <SectionDescription>Enter price to allow users instantly purchase your nft</SectionDescription>
                                <PriceContainer collapse={collapse ? 'true' : ''} >
                                    <input type="number" name="price" id="price" min={0} placeholder='Enter price for one piece' value={price} onChange={(e) => setPrice(e.target.value)} />
                                    <div>
                                        <p>{currency}</p>
                                        <p onClick={() => setCollapse(!collapse)} >&gt;</p>
                                        <div  >
                                            <Currency active={currency === 'ETH'}  onClick={() => setCurrency('ETH')} >ETH</Currency>
                                            <Currency active={currency === 'BTC'}  onClick={() => setCurrency('BTC')} >BTC</Currency>
                                            <Currency active={currency === 'DOGE'}  onClick={() => setCurrency('DOGE')} >DOGE</Currency>
                                            <Currency active={currency === 'XRP'}  onClick={() => setCurrency('XRP')} >XRP</Currency>
                                        </div>
                                    </div>
                                </PriceContainer>
                                

                                <BonusInfo>
                                    <p>Service Fee <span>2.5%</span> </p>
                                    <p>You will receive <span>{price ? (price*0.975).toFixed(3) : '0'} {currency}</span></p>
                                </BonusInfo>
                                <BonusInfo>
                                    <SectionHeading>
                                        <div>
                                            <SectionTitle>Unlock once Purchased</SectionTitle>
                                            <SectionDescription>Content will be unlocked after successful transaction</SectionDescription>
                                        </div>
                                        <Checkbox />
                                    </SectionHeading>
                                    
                                </BonusInfo>
                            </Section>
                            <Section>
                                <SectionTitle>Choose Collection</SectionTitle>
                                <CollectionChoice>
                                    <div>
                                        <h1>+</h1>
                                        <p>Create</p>
                                        <p>ERC - 721</p>
                                    </div>
                                    <div>
                                        <img src={testImg} alt="" />

                                        <p>Rarible</p>
                                        <p>Rari</p>
                                    </div>
                                </CollectionChoice>
                            </Section>
                            <Section>
                                <SectionTitle>Title</SectionTitle>
                                <StyledInput type="text" placeholder='e. g. "Redeemable T-Shirt with logo"' />
                            </Section>
                            <Section>
                                <SectionTitle>Description <span>(Optional)</span></SectionTitle>
                                <StyledInput type="text" placeholder={`e. g. "After purchasing you'll be able to get the real T-Shirt"`} />
                                <Subtext>With preserved line-breaks</Subtext>
                            </Section>
                            <Section>
                                <SectionTitle>Royalties</SectionTitle>
                                <StyledInput type="number" name="" id="" placeholder={10} />
                                <Subtext>Suggested: 0%, 10%. 20%, 30%</Subtext>
                            </Section>
                            <ButtonContainer>
                                <CreateButton onClick={() => history.push('/sellMethod')}>Create Item</CreateButton>
                                <ChangesButton>Unsaved changes <span><img src="" alt="" /></span></ChangesButton>
                            </ButtonContainer>
                        </div>
                    </div>

                </ColumnDetails>
                <ColumnPreview>
                    <SectionTitle>Preview</SectionTitle>
                    <div>
                        <h1>{file.length > 0 ? file[0].file.name.split(".")[0] : 'No File Uploaded'}</h1>
                        <img src={file.length > 0 ? file[0].data_url : ''} alt="" />
                    </div>

                </ColumnPreview>
            </Row>
        </PageContainer>
    )
}

export default CreateSingle
