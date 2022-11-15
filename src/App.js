import './App.css';
import Dialogs from './components/dialogs/dialogs';
import Header from "./components/header/header"
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import News from './components/news/news';
import Music from './components/music/music';
import Setting from './components/setting/setting'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs*' element={<Dialogs />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
