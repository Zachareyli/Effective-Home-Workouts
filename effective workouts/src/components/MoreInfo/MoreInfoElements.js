import styled from "styled-components";


export const InfoContainer = styled.div`
color: black;
background: white;

@media screen and (max-width : 768px){
    padding: 100px 0;
}
`;

export const InfoWrapper =  styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`;

export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
}
`;

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`
export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`;

export const TopLine = styled.p`
color: black;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: black;

@media screen and (max-width: 480px){
    font-size: 32px;
}
`;

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: black;
word-spacing: 6px;
`;

// export const BtnWrap = styled.div`
// display: flex;
// justify-content: flex-start;
// `;

// export const BtnLink = styled(LinkR)`
// border-radius: 50px;
// background: black;
// white-space: nowrap;
// padding: 10px 22px;
// font-size: 1rem;
// border: none;
// cursor: pointer;
// outline: none;
// transition: all 0.2s ease-in-out;
// text-decoration: none;
// color: white;

// &:hover{
//     transition: all 0.2s ease-in-out;
//     background: #01bf71;
//     color: black;
//     font-weight: 700;
// }
// `

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`;

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0; 
`;