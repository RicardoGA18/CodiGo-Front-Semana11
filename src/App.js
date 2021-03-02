import {BrowserRouter,Route,Switch} from 'react-router-dom'
import HomeView from './views/HomeView'
import AboutView from './views/AboutView'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/about" component={AboutView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;