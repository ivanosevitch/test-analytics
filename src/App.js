// @flow
import React from 'react';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './routes';
import { Root } from './components';

ReactGA.initialize('UA-121199171-1', {
  titleCase: false,
  gaOptions: {
    userId: 123,
  },
  debug: true,
});

ReactGA.plugin.require('eventTracker');
ReactGA.plugin.require('outboundLinkTracker');
ReactGA.plugin.require('urlChangeTracker');
ReactGA.plugin.require('maxScrollTracker', { maxScrollMetricIndex: 1 });

type Props = {
  store: Store,
};

function fireTracking() {
  console.log('window.location.hash', window.location.hash);
  ReactGA.event({
    category: 'User',
    action: 'Created an Account',
    label: 'Game Widget',
  });
  ReactGA.pageview('/myapp/home');
}

const RootComponentWithRoutes = () => (
  <Root>
    <Routes />
  </Root>
);

class App extends React.Component<Props> {
  render() {
    fireTracking()
    return (
      <Provider store={this.props.store}>
        <Router onUpdate={fireTracking} basename="/">
          <Route path="/" component={RootComponentWithRoutes} />
        </Router>
      </Provider>
    );
  }
}

export default App;
