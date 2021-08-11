import './App.css';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Products from './pages/Products'
import About_Us from './pages/About_Us'
import Contact from './pages/Contact'
import VotingParent from './pages/votingParent';
import QRScanner from './pages/QRScanner';


 function App() {
  
  
  return (
    <>
    <Router>
      <Navbar />
      <Switch> 
        <Route path='/' exact component={Home}/>
        <Route path='/aboutus' component={About_Us}/>
        <Route path='/products' component={Products}/>
        <Route path='/contactus' component={Contact}/>
        <Route path='/voting' component={VotingParent }/>
        <Route path='/qrscaner' component={QRScanner}/>
         
         
      </Switch>
     </Router>
    </> 
  );
}

export default App;
