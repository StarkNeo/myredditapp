import './App.css';
import { TitleBar } from '../features/HeadBar/TitleNav';
import { NavAsideLeft } from '../features/AsideLeft/NavigationLeft';
import { Articles } from '../features/Articles/Articles';
import { Carousel } from '../features/Carousel/Carousel';
import { useEffect } from 'react';
import { loadArticles,loadTopics } from './store';
function App(props) {
  const { state, dispatch } = props;
  const onFirstRender = () => {
    dispatch(loadArticles());
    dispatch(loadTopics());
  }
  useEffect(onFirstRender, [])
  return (
    <div className="App">
      <header className="App-header">
        <TitleBar term={props.state} dispatch={dispatch} />
      </header>
      <main>
        <NavAsideLeft topics={state.topics} dispatch={dispatch} />
        <section id='articles'>
          <Carousel />
          <Articles topics={state.topics} term={state.searchTerm} articles={state.articles} dispatch={dispatch} />
        </section>
        
      </main>
    </div>
  );
}

export default App;
