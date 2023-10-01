import logo from './logo.svg';
import './App.css';
import { Comments } from './components/test';
import { TitleBar } from './components/TitleNav';
import { NavAsideLeft } from './components/AsideLeft/NavigationLeft';
import { NavAsideRight } from './components/AsideRight/NavigationRight';
import { Article } from './components/Articles/Articles';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleBar />
      </header>
      <main>
        <NavAsideLeft />
        <section id='articles'>
        CENTER SPACE
        <Article />
        </section>
        <NavAsideRight />
      </main>
    </div>
  );
}

export default App;
