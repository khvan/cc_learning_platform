import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';
// import FormPage from '../components/subscribe/Subscribe';

import CustomChatbot from "../components/chatbot/CustomChatbot";




const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>

          <CustomChatbot />
        </div>
      </Router>
    </div>

  );
};

// const App = () => {
//   return (
//     <div>
//       <div className="container mt-5">
//         ...... Rest of the code .....
//            <CustomChatbot />
//       </div>
//     </div>
//   )
// }

// ..... Rest of the code .....





export default App;