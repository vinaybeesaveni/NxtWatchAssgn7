import styled from 'styled-components'

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
  width: 100%;
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
export const SavedContentContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const SavedBannerContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f1f1f1;
  padding-left: 30px;
`

export const Saved = styled.h1`
  font-weight: 500;
  font-family: 'Roboto';
  color: black;
  font-size: 25px;
`
export const Icon = styled.i`
  color: red;
  background-color: #e2e8f0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  border-radius: 30px;
  margin-right: 30px;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100%;
`
export const NoSavedVideosImg = styled.img`
  width: 250px;
  height: 250px;
`
export const NoSavedHeading = styled.h1`
  font-weight: 500;
  font-size: 25px;
  font-family: 'Roboto';
`
export const NoSavedDescription = styled.p`
  font-size: 16px;
  color: black;
  font-family: 'Roboto';
  text-align: center;
  margin-top: 0;
`
export const SavedVideosContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }
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
  min-height: 90vh;
`
