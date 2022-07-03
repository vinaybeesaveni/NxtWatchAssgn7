import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from './context/ThemeContext'
import VideoItem from './components/VideoItem'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'

// Replace your code here
class App extends Component {
  state = {isDarkmode: false}

  toggleDarkTheme = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkMode, toggleDarkTheme: this.toggleDarkTheme}}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/videos/:id" component={VideoItem} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
