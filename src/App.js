import './App.css';
import Navbar from './components/Navbar'
import Landing from'./pages/Landing';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'
import ServicePage from './pages/ServicePage'
import AboutPage from './pages/AboutPage'
import CasePage from './pages/CasePage'
import ContactPage from './pages/ContactPage'
function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/">
    <Landing />
    </Route>

    <Route path="/services">
    <ServicePage />
    </Route>
    <Route path="/casestudy">
    <CasePage />
    </Route>
    <Route path="/about">
    <AboutPage />
    </Route>
    <Route path="/contact">
    <ContactPage />
    </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
