import logo from './logo.svg';
import './App.css';
import { TitleBar } from './components/TitleNav';
import { NavAsideLeft } from './components/AsideLeft/NavigationLeft';
import { NavAsideRight } from './components/AsideRight/NavigationRight';
import { Articles } from './components/Articles/Articles';
import { Carousel } from './components/Carousel/Carousel';
import { useEffect } from 'react';
import { loadArticles, loadCarousel, loadTopics } from './app/store';
function App(props) {
  const { state, dispatch } = props;
  /*const onFirstRender = () => {
    dispatch(loadArticles());
    dispatch(loadCarousel());
    dispatch(loadTopics());
  }
  useEffect(onFirstRender, [])
  console.log(state.articles)
*/
  return (
    <div className="App">
      <header className="App-header">
        <TitleBar />
      </header>
      <main>
        <NavAsideLeft topics={state.topics} dispatch={dispatch} />
        <section id='articles'>
          <Carousel />
          <Articles articles={state.articles} dispatch={dispatch} />
        </section>
        
      </main>
    </div>
  );
}

export default App;
