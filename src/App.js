
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage'
import Search from './Search'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        

        
        <Header />

        <Switch>
           <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">        
            <Home />
          </Route>
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );

  {/* Home */}
    {/* Header */}
    {/* Banner */}
      {/* Search */}

}

export default App;
