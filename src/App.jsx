import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div>
        <div className='upArrowIcon' onClick={()=>window.scrollTo(0, 0)}>&#11165;</div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App;
