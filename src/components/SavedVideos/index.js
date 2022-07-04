import {Component} from 'react'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
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
  NoSavedVideosContainer,
  NoSavedVideosImg,
  NoSavedHeading,
  NoSavedDescription,
  SavedVideosContainer,
  SavedContentContainer,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoSavedVideosView = () => (
    <>
      <NoSavedVideosContainer>
        <NoSavedVideosImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <NoSavedHeading>No saved videos found</NoSavedHeading>
        <NoSavedDescription>
          You can save your videos while watching them
        </NoSavedDescription>
      </NoSavedVideosContainer>
    </>
  )

  renderSavedVideos = (savedVideos, isDarkMode) => (
    <SavedContentContainer>
      <SavedBannerContainer>
        <Icon>
          <HiFire />
        </Icon>
        <Saved>Saved Videos</Saved>
      </SavedBannerContainer>
      <VideosList>
        {savedVideos.map(each => (
          <li key={each.id}>
            <Link to={`/videos/${each.id}`} style={{textDecoration: 'none'}}>
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
    </SavedContentContainer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode, savedVideos} = value
          return (
            <>
              <Header />
              <SavedVideosContainer>
                <LeftMenuBar />
                {savedVideos.length === 0
                  ? this.renderNoSavedVideosView()
                  : this.renderSavedVideos(savedVideos, isDarkMode)}
              </SavedVideosContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
