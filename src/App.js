import './App.css'
import Dialogs from './components/dialogs/dialogs'
import Nav from './components/nav/nav'
import News from './components/news/news'
import Music from './components/music/music'
import Setting from './components/setting/setting'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsersContainer from './components/users/usersContainer'
import ProfileContainer from './components/profile/profileContainer'
import HeaderContainer from './components/header/headerContainer'
import Login from './components/login/login'
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { initializeApp } from './redux/appReducer'
import Preloader from './components/common/preloader/preloader'

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if(!this.props.initialized){
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Nav />
          <div className='app-content'>
            <Routes>
              <Route path='/login/*' element={<Login />} />
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path='/*' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<Dialogs />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />} />
              <Route path='/setting/*' element={<Setting />} />
              <Route path='/users/*' element={<UsersContainer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, { initializeApp })
)(App)