import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 92vh;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }
`

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;
  margin-top: 20px;
  font-family: 'Roboto';
  @media screen and (min-width: 576px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
  }
`

export const BannerImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const BannerLogo = styled.img`
  width: 150px;
  height: 35px;
`
export const BannerHeading = styled.p`
  color: black;
  font-weight: 400;
  font-size: 19px;
  max-width: 250px;
  line-height: 1.7em;
`
export const BannerButton = styled.button`
  background-color: transparent;
  border: 1px solid black;
  font-family: 'Roboto';
  font-weight: 500;
  color: black;
  height: 35px;
  width: 100px;
  outline: none;
  cursor: pointer;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  font-size: 25px;
  padding: 0;
  margin-bottom: 0;
  align-self: flex-start;
`
export const VideosContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? 'black' : '#f1f5f9')};
  min-height: 92vh;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`
export const SearchInput = styled.input`
  background-color: ${props => (props.isDarkMode ? 'black' : 'white')};
  padding-left: 10px;
  height: 33px;
  flex-grow: 1;
  font-size: 15px;
  border: 1px solid ${props => (props.isDarkMode ? '#aba7a7' : 'black')};
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  outline: none;
`
export const SearchButton = styled.button`
  height: 33px;
  font-size: 16px;
  background-color: ${props => (props.isDarkMode ? ' #1e293b' : 'transparent')};
  border: 1px solid ${props => (props.isDarkMode ? '#aba7a7' : 'black')};
  border-left: none;
  width: 60px;
  color: ${props => props.isDarkMode && ' #e2e8f0'}; ;
`
export const VideosList = styled.ul`
  padding: 0;
  list-style: none;
`
export const VideoImg = styled.img`
  width: 100%;
  height: 200px;
`
export const ProfileImgContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  margin-bottom: 25px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const Title = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : 'black')};
  font-size: 16px;
  margin-top: 0;
  font-weight: 500;
  margin-bottom: 7px;
  line-height: 1.5em;
`
export const ChannelImg = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 5px;
`
export const VideoDetailsList = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  width: 85%;
  color: ${props => (props.isDarkMode ? ' #aba7a7' : '#475569')};
`

export const VideoDetails = styled.li`
  list-style: ${props => (props.name ? 'none' : 'circle')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const Para = styled.p`
  margin-top: 0;
`
export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
`
export const NoResultsImage = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 20px;
`
export const NoResultHeading = styled.h1`
  font-size: 20px;
  margin-top: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 0;
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
`
export const NoResultPara = styled.p`
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  max-width: 300px;
  color: #94a3b8;
  font-family: 'Roboto';
  line-height: 1.5em;
  color: ${props => (props.isDarkMode ? '#e2e8f0' : 'black')};
`
export const RetryBtn = styled.button`
  background-color: #3b82f6;
  border: none;
  width: 90px;
  height: 35px;
  font-size: 15px;
  color: white;
  border-radius: 5px;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`
