import {Component} from 'react'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftMenuBar from '../LeftMenuBar'
import {
  VideosList,
  VideoImg,
  ProfileImgContainer,
  TitleContainer,
  Title,
  ChannelImg,
  VideoDetailsList,
  VideoDetails,
  Para,
  SavedBannerContainer,
  Saved,
  Icon,
  NoResultsContainer,
  NoResultsImage,
  NoResultHeading,
  NoResultPara,
  RetryBtn,
  SavedVideosContainer,
  SavedContentContainer,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, data: {}}

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
    const response = await fetch(
      `https://apis.ccbp.in/videos/trending`,
      options,
    )
    if (response.ok === true) {
      const data = await response.json()
      //   console.log(data)
      const {videos} = data
      const updatedData = videos.map(each => ({
        id: each.id,
        channel: each.channel,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        isSaved: false,
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

  renderSuccessView = () => {
    const {data} = this.state
    console.log(data)

    return (
      <SavedContentContainer>
        <SavedBannerContainer>
          <Icon>
            <HiFire />
          </Icon>
          <Saved>Trending</Saved>
        </SavedBannerContainer>
        <VideosList>
          {data.map(each => (
            <li key={each.id}>
              <Link to={`/videos/${each.id}`} style={{textDecoration: 'none'}}>
                <VideoImg src={each.thumbnailUrl} alt="video thumbnail" />
                <ProfileImgContainer>
                  <ChannelImg
                    src={each.channel.profile_image_url}
                    alt="channel logo"
                  />
                  <TitleContainer>
                    <Title>{each.title}</Title>
                    <VideoDetailsList>
                      <VideoDetails name="true">
                        <Para>{each.channel.name}</Para>
                      </VideoDetails>
                      <VideoDetails>
                        <Para>{each.viewCount} views</Para>
                      </VideoDetails>
                      <VideoDetails>
                        <Para>
                          {formatDistanceToNow(new Date(each.publishedAt))}
                        </Para>
                      </VideoDetails>
                    </VideoDetailsList>
                  </TitleContainer>
                </ProfileImgContainer>
              </Link>
            </li>
          ))}
        </VideosList>
      </SavedContentContainer>
    )
  }

  renderVideoDetails = () => {
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
        <SavedVideosContainer>
          <LeftMenuBar />
          {this.renderVideoDetails()}
        </SavedVideosContainer>
      </>
    )
  }
}

export default Trending
