import StreamList from './components/streams/StreamList';
import { Router, Route } from 'react-router-dom';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import StreamShow from './components/streams/StreamShow';
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
        <Route path="/stream/delete" exact component={StreamDelete} />
        <Route path="/stream/show" exact component={StreamShow} />

      </Router>
    </div>
  );
}
export default App;
