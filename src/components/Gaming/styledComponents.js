import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const GamingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100%;
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
export const GameVideoList = styled.ul`
  padding: 20px;
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0;
`

export const List = styled.li`
  margin-bottom: 10px;
`
export const Img = styled.img`
  width: 160px;
  height: 200px;
`
export const Title = styled.p`
  color: black;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 0;
`
export const Views = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
  font-family: 'Roboto';
  max-width: 150px;
  line-height: 1.5em;
  color: black;
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
