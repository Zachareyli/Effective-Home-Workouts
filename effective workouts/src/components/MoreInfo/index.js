import { React, useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
// import { Button } from '../ButtonElement'
// import styled from 'styled-components'
import {  InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img } from './MoreInfoElements'

const MoreInfo = ({ imgStart, topLine, headLine, description, id, img, alt}) => {
    useEffect(() => {
        Aos.init({duration: 3000});
    },[])

    return (
    <>
        <InfoContainer data-aos="zoom-out-up" id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading>{headLine}</Heading>
                            <Subtitle>{description}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default MoreInfo