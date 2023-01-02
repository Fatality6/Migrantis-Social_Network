import React, { lazy, Suspense } from 'react'
import './App.css'
import News from './components/news/news'
import Music from './components/music/music'
import Setting from './components/setting/setting'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsersContainer from './components/users/usersContainer'
import ProfileContainer from './components/profile/profileContainer'
import HeaderContainer from './components/header/headerContainer'
import Login from './components/login/login'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { initializeApp } from './redux/appReducer'
import Preloader from './components/common/preloader/preloader'
import NavContainer from './components/nav/navContainer'
const Dialogs = lazy(()=>import('./components/dialogs/dialogs'))

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
          <NavContainer />
          <div className='app-content'>
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
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