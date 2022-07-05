import {withRouter, Link} from 'react-router-dom'
import {Component} from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {HiMenu, HiOutlineLightBulb} from 'react-icons/hi'

import ThemeContext from '../../context/ThemeContext'
import {
  HeaderLogoImage,
  Navbar,
  ThemeButton,
  LogoutButton,
  LogoutIcon,
  MenuList,
  MenuProfileImg,
  PopupContainer,
  PopupContent,
  LogoutQun,
  CancelButton,
  PopupLogout,
} from './styledComponents'

class Header extends Component {
  onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  renderPopUpView = close => (
    <PopupContainer>
      <PopupContent>
        <LogoutQun>Are you sure you want to logout?</LogoutQun>
        <div>
          <CancelButton onClick={() => close()}>Cancel</CancelButton>
          <PopupLogout onClick={this.onLogout}>Logout</PopupLogout>
        </div>
      </PopupContent>
    </PopupContainer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode, toggleDarkTheme} = value
          const onClickingTheme = () => {
            toggleDarkTheme()
          }
          const logoUrl = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <Navbar isDarkMode={isDarkMode}>
              <Link to="/">
                <HeaderLogoImage src={logoUrl} alt="website logo" />
              </Link>
              <MenuList>
                <li>
                  <ThemeButton
                    type="button"
                    onClick={onClickingTheme}
                    isDarkMode={isDarkMode}
                  >
                    {isDarkMode ? <HiOutlineLightBulb /> : <FaMoon />}
                  </ThemeButton>
                </li>
                <li>
                  <ThemeButton
                    type="button"
                    menu
                    isDarkMode={isDarkMode}
                    data-testid="theme"
                  >
                    <HiMenu />
                  </ThemeButton>
                  <MenuProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </li>
                <li>
                  <Popup
                    trigger={
                      <LogoutIcon type="button" isDarkMode={isDarkMode} mobile>
                        <FiLogOut />
                      </LogoutIcon>
                    }
                    modal
                  >
                    {close => this.renderPopUpView(close)}
                  </Popup>

                  <Popup
                    trigger={
                      <LogoutButton
                        type="button"
                        onClick={this.onLogout}
                        isDarkMode={isDarkMode}
                      >
                        Logout
                      </LogoutButton>
                    }
                    modal
                  >
                    {close => this.renderPopUpView(close)}
                  </Popup>
                </li>
              </MenuList>
            </Navbar>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
