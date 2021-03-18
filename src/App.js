import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppComponent from './pt_routes';
import { configStore } from './pt_store';

function App() {
  return (
    <Provider store={configStore()}>
      <Router>
        <Switch>
          <Route path="/" component={AppComponent} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
