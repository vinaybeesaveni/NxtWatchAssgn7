import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  LoginCard,
  LoginLogoImage,
  Form,
  Label,
  Input,
  ShowPasswordContainer,
  InputCheckbox,
  ShowLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    passwordType: 'password',
    showErrMsg: false,
    errorMsg: '',
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onCheckboxChange = event => {
    if (event.target.checked) {
      this.setState({passwordType: 'text'})
    } else {
      this.setState({passwordType: 'password'})
    }
  }

  onSubmitFailure = error => {
    this.setState({showErrMsg: true, errorMsg: error})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userData = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      this.onSubmitSuccess(data.jwt_token)
    } else {
      const data = await response.json()
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, passwordType, showErrMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginCard>
          <LoginLogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <Form onSubmit={this.onSubmitForm}>
            <Label htmlFor="username">USERNAME</Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={this.onUsernameChange}
            />
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              type={passwordType}
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.onPasswordChange}
            />
            <ShowPasswordContainer>
              <InputCheckbox
                type="checkbox"
                id="checkbox"
                onChange={this.onCheckboxChange}
              />
              <ShowLabel htmlFor="checkbox">Show Password</ShowLabel>
            </ShowPasswordContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showErrMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          </Form>
        </LoginCard>
      </LoginContainer>
    )
  }
}

export default Login
