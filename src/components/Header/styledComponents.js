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
    cursor: pointer;
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

export const PopupContainer = styled.div`
  width: 100%;
  position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: white;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #94a3b8;
  background-color: #e2e8f0;
  height: 150px;
`
export const LogoutQun = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #00306e;
`
export const PopupLogout = styled.button`
  border-radius: 4px;
  border: none;
  background-color: #3b82f6;
  color: white;
  font-weight: 500;
  font-family: 'Roboto';
  height: 35px;
  width: 80px;
  margin: 7px;
  cursor: pointer;
`

export const CancelButton = styled.button`
  border: 1px solid #64748b;
  border-radius: 4px;
  color: #64748b;
  background-color: transparent;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 7px;
  height: 35px;
  width: 80px;
  cursor: pointer;
`
