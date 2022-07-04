import {Component} from 'react'
import {Link} from 'react-router-dom'
import {CgPlayListAdd} from 'react-icons/cg'
import {SiYoutubegaming} from 'react-icons/si'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {
  LeftMenuContainer,
  Icon,
  Span,
  IconContainer,
  ContactUsContainer,
  ContactPara,
  FbImage,
  ContactUsPara,
} from './styledComponents'

class LeftMenuBar extends Component {
  render() {
    return (
      <LeftMenuContainer>
        <div>
          <Link to="/" style={{textDecoration: 'none'}}>
            <IconContainer>
              <Icon>
                <AiFillHome />
              </Icon>
              <Span>Home</Span>
            </IconContainer>
          </Link>
          <Link to="/trending" style={{textDecoration: 'none'}}>
            <IconContainer>
              <Icon>
                <HiFire />
              </Icon>
              <Span>Trending</Span>
            </IconContainer>
          </Link>
          <Link to="/" style={{textDecoration: 'none'}}>
            <IconContainer>
              <Icon>
                <SiYoutubegaming />
              </Icon>
              <Span>Gaming</Span>
            </IconContainer>
          </Link>
          <Link to="/saved-videos" style={{textDecoration: 'none'}}>
            <IconContainer>
              <Icon>
                <CgPlayListAdd />
              </Icon>
              <Span>Saved videos</Span>
            </IconContainer>
          </Link>
        </div>
        <ContactUsContainer>
          <ContactPara>CONTACT US</ContactPara>
          <FbImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <FbImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <FbImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
          <ContactUsPara>
            Enjoy! Now to see your channels and recommendations!
          </ContactUsPara>
        </ContactUsContainer>
      </LeftMenuContainer>
    )
  }
}

export default LeftMenuBar
