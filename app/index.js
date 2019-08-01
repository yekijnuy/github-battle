import React from 'react';
// decoupled for different system uses (Xbox, iOS, etc)
import ReactDOM from 'react-dom';
import './index.css';

import { ThemeProvider } from './contexts/theme';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';

// dynamic import
// we invoke .lazy, pass it a function and it returns a promise with a module
// we return invocation of import with path
const Popular = React.lazy(() => import('./components/Popular'));
const Battle = React.lazy(() => import('./components/Battle'));
const Results = React.lazy(() => import('./components/Results'));

// component
class App extends React.Component {
  // we are placing toggleTheme in our state
  // because we will eventually need to toggle in
  // our component tree
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light',
      }));
    },
  };

  // wrap entire App with ThemeProvider, passing it value from state
  // Router uses context under the hood to pass information to component tree

  // switch only first path that matches renders
  // if you leave off path, that path is always going to render
  // render let's us to inline JSX if you want no component
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path="/" component={Popular} />
                  <Route exact path="/battle" component={Battle} />
                  <Route path="/battle/results" component={Results} />
                  <Route render={() => <h1>404</h1>} />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

// React DOM render to render the component on DOM
ReactDOM.render(<App />, document.getElementById('app'));

