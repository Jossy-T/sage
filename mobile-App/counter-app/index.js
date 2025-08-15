import { registerRootComponent } from 'expo';

import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
registerRootComponent(Main);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);
