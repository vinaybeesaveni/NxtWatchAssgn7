import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import Header from '../Header'
import {
  VideoItemContainer,
  VideoContainer,
  ReactPlayerContainer,
  Title,
  VideoItemContent,
  List,
  ViewsList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class VideoItem extends Component {
  state = {apiStatus: apiStatusConstants.initial, data: {}}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
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
      }
      this.setState({data: updatedData, apiStatus: apiStatusConstants.success})
    }
  }

  renderSuccessView = () => {
    const {data} = this.state
    return (
      <VideoContainer>
        <ReactPlayerContainer>
          <ReactPlayer url={data.videoUrl} width={375} height={200} controls />
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
          </VideoItemContent>
        </ReactPlayerContainer>
      </VideoContainer>
    )
  }

  renderDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoItemContainer>
        <Header />
        {this.renderDetails()}
      </VideoItemContainer>
    )
  }
}

export default VideoItem
