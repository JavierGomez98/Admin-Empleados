import React from 'react'
import './styles/globalStyles.css'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import PublicRoutes from './routes/public.routes';
import Header from './layout/Header/Header';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
// import PrivateRoutes from './routes/private.routes';

function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
      <Router>
        <div className="background-page">
          <Header />
          <div className="content-body">
            <PublicRoutes />
            {/* <PrivateRoutes /> */}
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
