import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from './context/ThemeContext'
import VideoItem from './components/VideoItem'
import ProtectedRoute from './components/ProtectedRoute'
import SavedVideos from './components/SavedVideos'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'

// Replace your code here
class App extends Component {
  state = {isDarkMode: false, savedVideos: []}

  toggleDarkTheme = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  addToSavedVideos = (videoItem, isSaved) => {
    // const video = {...videoItem, isSaved}
    const {savedVideos} = this.state
    console.log(isSaved)

    if (isSaved) {
      const index = savedVideos.find(each => each.id === videoItem.id)
      if (index === undefined) {
        this.setState(prevState => ({
          savedVideos: [...prevState.savedVideos, videoItem],
        }))
      }
    } else {
      this.setState(prevState => ({
        savedVideos: prevState.savedVideos.filter(
          each => each.id !== videoItem.id,
        ),
      }))
    }
  }

  render() {
    const {isDarkMode, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkMode,
          toggleDarkTheme: this.toggleDarkTheme,
          addToSavedVideos: this.addToSavedVideos,
          savedVideos,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/videos/:id" component={VideoItem} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
