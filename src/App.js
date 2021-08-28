import "./App.scss";
import ContentContainer from './components/ContentContainer';
import SideBar from './components/SideBar';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <SideBar />
      <ContentContainer />
    </div>
  );
}

export default App;
