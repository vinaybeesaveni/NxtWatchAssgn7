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
  font-size: 16px;
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
