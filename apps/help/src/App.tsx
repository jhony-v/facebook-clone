import AppContainer from './ui/layouts/AppContainer';
import HeaderNavigation from './components/HeaderNavigation';
import RoutesApplication from './routes/RoutesApplication';

function App() {
  return (
    <AppContainer>
      <HeaderNavigation/>
      <RoutesApplication/>
    </AppContainer>
  );
}

export default App;
