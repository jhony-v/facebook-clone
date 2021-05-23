import AppContainer from './ui/layouts/AppContainer';
import HeaderNavigation from './components/HeaderNavigation';
import HelpMainContentPage from './pages/HelpMainContentPage/HelpMainContentPage';
import HomePage from './pages/HomePage/HomePage';
import { Router } from '@reach/router';

function App() {
  return (
    <AppContainer>
      <HeaderNavigation/>
      <Router>
        <HomePage path="/" />
        <HelpMainContentPage path="/:helpId" />
      </Router>
    </AppContainer>
  );
}

export default App;
