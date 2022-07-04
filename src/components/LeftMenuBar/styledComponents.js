import styled from 'styled-components'

export const LeftMenuContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 90vh;
    width: 20%;
  }
`
export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  padding-left: 25px;
  margin-bottom: 15px;
`

export const Icon = styled.i`
  text-decoration: none;
  color: #475569;
  font-size: 17px;
  margin-right: 20px;
`
export const Span = styled.span`
  color: black;
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 2px;
`
export const ContactUsContainer = styled.div`
  padding-left: 25px;
`
export const ContactPara = styled.p`
  font-size: 16px;
  font-weight: 500;
`
export const FbImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`
export const ContactUsPara = styled.p`
  font-size: 15px;
  font-weight: 500;
  max-width: 200px;
`
