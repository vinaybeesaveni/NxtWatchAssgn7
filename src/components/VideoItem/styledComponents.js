import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  min-height: 92vh;
`
export const VideoContainer = styled.div`
  background-color: #f1f5f9;
  min-height: 92vh;
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
`
export const Icon = styled.i`
  font-size: 18px;
  color: #475569;
`
export const Like = styled.p`
  color: #475569;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 5px;
  margin-top: ${props => (props.like ? '1px' : '0')};
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
