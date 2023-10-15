import logo from './logo.svg';
import './App.css';
import { TitleBar } from './components/TitleNav';
import { NavAsideLeft } from './components/AsideLeft/NavigationLeft';
import { NavAsideRight } from './components/AsideRight/NavigationRight';
import { Articles } from './components/Articles/Articles';
import { Carousel } from './components/Carousel/Carousel';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleBar />
      </header>
      <main>
        <NavAsideLeft />
        <section id='articles'>
        <Carousel />
       <Articles />
        </section>
        <NavAsideRight />
      </main>
    </div>
  );
}

export default App;
