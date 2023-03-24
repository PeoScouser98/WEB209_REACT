import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';
import AppRouter from './routes';

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<AppRouter />
			</PersistGate>
		</Provider>
	);
}

export default App;
