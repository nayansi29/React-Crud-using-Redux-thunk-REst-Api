import StreamList from './components/streams/StreamList';
import { Router, Route } from 'react-router-dom';
import StreamEdit from './components/streams/StreamEdit';
import Header from './components/Header';
import StreamCreate from './components/streams/StreamCreate';
import history from './history';
function App() {
  return (
    <div className='ui container'>
      <Router history={history}>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/stream/new" exact component={StreamCreate} />
        <Route path="/stream/edit/:id" exact component={StreamEdit} />


      </Router>
    </div>
  );
}
export default App;
