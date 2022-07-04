import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  min-height: 92vh;
`
export const VideoContainer = styled.div`
  background-color: #f1f5f9;
  min-height: 92vh;
`
export const VideoContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ReactPlayerContainer = styled.div`
  width: 100%;
`
export const VideoItemContent = styled.div`
  padding: 15px;
`

export const Title = styled.p`
  font-size: 17px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-top: 0;
  line-height: 1.5em;
`
export const ViewsList = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Roboto';
  width: 55%;
  margin: 0;
`
export const List = styled.li`
  color: #475569;
  list-style: ${props => props.views && 'none'};
  font-size: 15px;
`
export const LikeDislikeContainer = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
`
export const LikeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 20px;
  cursor: pointer;
`
export const Icon = styled.i`
  font-size: 18px;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
`
export const DisLikeIcon = styled(Icon)`
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')};
`
export const SaveIcon = styled(Icon)`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`

export const Like = styled.button`
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  font-size: 15px;
  font-family: 'Roboto';
  background-color: transparent;
  border: none;
  font-weight: 500;
  margin-left: 5px;
  margin-top: ${props => (props.like ? '1px' : '0')};
  cursor: pointer;
`
export const DisLike = styled(Like)`
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')};
`

export const Save = styled(Like)`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`

export const VideoProfileContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
`
export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

export const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  font-family: 'Roboto';
`
export const SubscribeCount = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #475569;
  margin: 0;
  margin-top: 5px;
  font-family: 'Roboto';
`
export const VideoDescription = styled.p`
  font-size: 14px;
  line-height: 1.4em;
  font-family: 'Roboto';
  color: #475569;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  width: 90%;
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
