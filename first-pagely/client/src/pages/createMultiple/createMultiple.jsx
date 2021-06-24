import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading'

import { ChangesButton, CreateButton, ButtonContainer, Subtext, PageContainer, ColumnDetails, ColumnPreview, PageTitle, Row, Section, SectionTitle, FileUploadContainer, StyledInput } from './createMultipleStyles'

import HeaderImg from '../../components/headerImg/headerImg'

import { useHistory } from 'react-router-dom'


const CreateMultiple = () => {

    const [ file, setFile ] = useState([])
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

export default CreateMultiple
