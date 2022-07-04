import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftMenuBar from '../LeftMenuBar'
import {
  GamingContainer,
  GamingContentContainer,
  LoaderContainer,
  SavedBannerContainer,
  Saved,
  Icon,
  GameVideoList,
  Img,
  List,
  Title,
  Views,
  NoResultsContainer,
  NoResultsImage,
  NoResultHeading,
  NoResultPara,
  RetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/videos/gaming`, options)
    if (response.ok === true) {
      const data = await response.json()
      //   console.log(data)
      const {videos} = data
      const updatedData = videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({data: updatedData, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const loaderColor = isDarkMode ? '#ffffff' : 'blue'

        return (
          <LoaderContainer>
            <div className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color={loaderColor}
                height="50"
                width="50"
              />
            </div>
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessView = () => {
    const {data} = this.state

    return (
      <>
        <GamingContentContainer>
          <SavedBannerContainer>
            <Icon>
              <SiYoutubegaming />
            </Icon>
            <Saved>Gaming</Saved>
          </SavedBannerContainer>
          <GameVideoList>
            {data.map(each => (
              <List key={each.id}>
                <Link
                  to={`/videos/${each.id}`}
                  style={{textDecoration: 'none'}}
                >
                  <Img src={each.thumbnailUrl} alt="video thumbnail" />
                  <Title>{each.title}</Title>
                  <Views>{each.viewCount} Watching Worldwide</Views>
                </Link>
              </List>
            ))}
          </GameVideoList>
        </GamingContentContainer>
      </>
    )
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const imgUrl = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <NoResultsContainer>
            <NoResultsImage src={imgUrl} alt="failure view" />
            <NoResultHeading isDarkMode={isDarkMode}>
              Oops! Something Went Wrong
            </NoResultHeading>
            <NoResultPara isDarkMode={isDarkMode}>
              We are having some trouble to complete your request. Please try
              again.
            </NoResultPara>
            <RetryBtn type="button" onClick={this.getVideoDetails}>
              Retry
            </RetryBtn>
          </NoResultsContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGameDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <GamingContainer>
          <LeftMenuBar />
          {this.renderGameDetails()}
        </GamingContainer>
      </>
    )
  }
}

export default Gaming
