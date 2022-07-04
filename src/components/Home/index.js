import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {GrFormClose} from 'react-icons/gr'
import {HiSearch} from 'react-icons/hi'
import LeftMenuBar from '../LeftMenuBar'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import {
  HomeContainer,
  Banner,
  BannerLogo,
  BannerHeading,
  BannerButton,
  BannerCloseButton,
  BannerImgContainer,
  VideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosList,
  VideoImg,
  ProfileImgContainer,
  TitleContainer,
  Title,
  ChannelImg,
  VideoDetailsList,
  VideoDetails,
  Para,
  NoResultsContainer,
  NoResultsImage,
  NoResultHeading,
  NoResultPara,
  RetryBtn,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    data: {},
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchInput}`,
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

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  onInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickingSearchBtn = () => {
    this.getVideoDetails()
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

  renderNoResultsView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <NoResultsContainer>
            <NoResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoResultHeading isDarkMode={isDarkMode}>
              No Search results found
            </NoResultHeading>
            <NoResultPara isDarkMode={isDarkMode}>
              Try different key words or remove search filter
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
    if (data.length === 0) {
      return this.renderNoResultsView()
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <VideosList>
              {data.map(each => (
                <li key={each.id}>
                  <Link
                    to={`/videos/${each.id}`}
                    style={{textDecoration: 'none'}}
                  >
                    <VideoImg src={each.thumbnailUrl} alt="video thumbnail" />
                    <ProfileImgContainer>
                      <ChannelImg
                        src={each.channel.profile_image_url}
                        alt="channel logo"
                      />
                      <TitleContainer>
                        <Title isDarkMode={isDarkMode}>{each.title}</Title>
                        <VideoDetailsList isDarkMode={isDarkMode}>
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
          )
        }}
      </ThemeContext.Consumer>
    )
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
    const {showBanner, searchInput} = this.state
    return (
      <div>
        <Header />
        <HomeContainer data-testid="banner">
          <LeftMenuBar />
          <div>
            {showBanner && (
              <Banner data-testid="banner">
                <BannerImgContainer>
                  <BannerLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />

                  <BannerCloseButton type="button" data-testid="close">
                    <GrFormClose onClick={this.closeBanner} />
                  </BannerCloseButton>
                </BannerImgContainer>

                <BannerHeading>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </BannerHeading>
                <BannerButton type="button">GET IT NOW</BannerButton>
              </Banner>
            )}
            <ThemeContext.Consumer>
              {value => {
                const {isDarkMode} = value
                return (
                  <VideosContainer data-testid="home" isDarkMode={isDarkMode}>
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        isDarkMode={isDarkMode}
                        onChange={this.onInputChange}
                        value={searchInput}
                      />
                      <SearchButton
                        type="button"
                        data-testid="searchButton"
                        isDarkMode={isDarkMode}
                        onClick={this.onClickingSearchBtn}
                      >
                        <HiSearch />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderVideoDetails()}
                  </VideosContainer>
                )
              }}
            </ThemeContext.Consumer>
          </div>
        </HomeContainer>
      </div>
    )
  }
}

export default Home
