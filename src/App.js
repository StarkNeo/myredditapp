import logo from './logo.svg';
import './App.css';
import { TitleBar } from './components/TitleNav';
import { NavAsideLeft } from './components/AsideLeft/NavigationLeft';
import { NavAsideRight } from './components/AsideRight/NavigationRight';
import { Articles } from './components/Articles/Articles';

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
        <Articles />
        </section>
        <NavAsideRight />
      </main>
    </div>
  );
}

export default App;
