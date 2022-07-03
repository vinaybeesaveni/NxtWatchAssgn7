import styled from 'styled-components'

export const Navbar = styled.nav`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.isDarkMode ? 'black' : 'white')};
`

export const HeaderLogoImage = styled.img`
  width: 100px;
  height: 30px;
`
export const MenuList = styled.ul`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: none;
  list-style: none;
  margin: 0;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: ${props => (props.menu ? '26px' : '22px')};
  @media screen and (min-width: 768px) {
    display: ${props => props.menu && 'none'};
  }
  color: ${props => props.isDarkMode && 'white'};
`

export const LogoutIcon = styled(ThemeButton)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    border: 1px solid #3b82f6;
    background-color: transparent;
    width: 80px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color: #3b82f6;
  }
`

export const MenuProfileImg = styled.img`
  width: 30px;
  height: 30px;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
