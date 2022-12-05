import './App.css';
import Dialogs from './components/dialogs/dialogs';
import Header from "./components/header/header";
import Nav from './components/nav/nav';
import News from './components/news/news';
import Music from './components/music/music';
import Setting from './components/setting/setting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-content'>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/profile/' element={<ProfileContainer />} />
            <Route path='/dialogs/*' element={<Dialogs />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/setting/*' element={<Setting />} />
            <Route path='/users/*' element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
