import React from 'react';
import {
	Provider
} from 'react-redux';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import {
	MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateIoMomentUtil from '@date-io/moment';
import AppComponent from './pt_routes';
import {
	configureStore
} from './pt_store';

function App() {
  return (
    <Provider store={configureStore()}>
    	<MuiPickersUtilsProvider utils={DateIoMomentUtil}>
	      <Router>
	        <Switch>
	          <Route path="/" component={AppComponent} />
	        </Switch>
	      </Router>
	    </MuiPickersUtilsProvider>
    </Provider>
  );
}

export default App;
