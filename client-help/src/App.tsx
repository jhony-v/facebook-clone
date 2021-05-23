import AppContainer from './ui/AppContainer';
import HeaderNavigation from './components/HeaderNavigation';
import SidebarNavigation from './components/SidebarNavigation';

function App() {
  return (
    <AppContainer>
      <HeaderNavigation/>
      <SidebarNavigation/>
    </AppContainer>
  );
}

export default App;
