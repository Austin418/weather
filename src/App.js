import './App.css';
import Smallnav from './components/Smallnav'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderNav from './components/HeaderNav'
import data from './info/weather.json'


function App() {
  return (
    <>
    <Smallnav />
    <HeaderNav />
    </>
  );
}

export default App;
