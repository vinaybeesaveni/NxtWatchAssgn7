import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'
import LeftMenuBar from '../LeftMenuBar'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoItemContainer,
  VideoContainer,
  VideoContentContainer,
  ReactPlayerContainer,
  Title,
  VideoItemContent,
  List,
  ViewsList,
  LikeDislikeContainer,
  LikeContainer,
  Icon,
  Like,
  VideoProfileContainer,
  ProfileImg,
  SubscribeContainer,
  Name,
  SubscribeCount,
  VideoDescription,
  LoaderContainer,
  DisLike,
  DisLikeIcon,
  SaveIcon,
  Save,
  NoResultsContainer,
  NoResultHeading,
  NoResultPara,
  RetryBtn,
  NoResultsImage,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class VideoItem extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    data: {},
    isLiked: false,
    isDisLiked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    if (response.ok === true) {
      const data = await response.json()
      const each = data.video_details

      const updatedData = {
        id: each.id,
        channel: each.channel,
        publishedAt: each.published_at,
        videoUrl: each.video_url,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        description: each.description,
      }
      this.setState({data: updatedData, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="black" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  onClickingLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  onClickingDisLike = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {addToSavedVideos} = value
        const {data, isLiked, isDisLiked, isSaved} = this.state
        const {channel} = data
        const channelDetails = {
          name: channel.name,
          profileImgUrl: channel.profile_image_url,
          subscriberCount: channel.subscriber_count,
        }
        const onClickingSave = () => {
          const saved = !isSaved
          this.setState({isSaved: saved}, addToSavedVideos(data, saved))
        }

        return (
          <VideoContainer>
            <ReactPlayerContainer>
              <ReactPlayer
                url={data.videoUrl}
                width={375}
                height={200}
                controls
              />
              <VideoItemContent>
                <Title>{data.title}</Title>
                <ViewsList>
                  <List views="true">
                    <p>{data.viewCount} views</p>
                  </List>
                  <List>
                    <p>{formatDistanceToNow(new Date(data.publishedAt))}</p>
                  </List>
                </ViewsList>
                <LikeDislikeContainer>
                  <LikeContainer>
                    <Icon isLiked={isLiked} onClick={this.onClickingLike}>
                      <BiLike />
                    </Icon>
                    <Like
                      type="button"
                      like="true"
                      onClick={this.onClickingLike}
                      isLiked={isLiked}
                    >
                      Like
                    </Like>
                  </LikeContainer>
                  <LikeContainer>
                    <DisLikeIcon
                      isDisLiked={isDisLiked}
                      onClick={this.onClickingDisLike}
                    >
                      <BiDislike />
                    </DisLikeIcon>
                    <DisLike
                      type="button"
                      onClick={this.onClickingDisLike}
                      isDisLiked={isDisLiked}
                    >
                      Dislike
                    </DisLike>
                  </LikeContainer>
                  <LikeContainer>
                    <SaveIcon onClick={onClickingSave} isSaved={isSaved}>
                      <CgPlayListAdd />
                    </SaveIcon>
                    <Save
                      type="button"
                      onClick={onClickingSave}
                      isSaved={isSaved}
                    >
                      Save
                    </Save>
                  </LikeContainer>
                </LikeDislikeContainer>
                <hr />
                <VideoProfileContainer>
                  <ProfileImg
                    src={channelDetails.profileImgUrl}
                    alt="channel logo"
                  />
                  <SubscribeContainer>
                    <Name>{channelDetails.name}</Name>
                    <SubscribeCount>
                      {channelDetails.subscriberCount} subscribers
                    </SubscribeCount>
                  </SubscribeContainer>
                </VideoProfileContainer>
                <VideoDescription>{data.description}</VideoDescription>
              </VideoItemContent>
            </ReactPlayerContainer>
          </VideoContainer>
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

  renderDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoItemContainer>
        <Header />
        <VideoContentContainer>
          <LeftMenuBar />
          {this.renderDetails()}
        </VideoContentContainer>
      </VideoItemContainer>
    )
  }
}

export default VideoItem
