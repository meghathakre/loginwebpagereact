import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { Provider } from 'react-redux';
import "./css/style.css";
import store from './store.jsx';

createRoot(document.getElementById('root')).render(
<Provider store={store} >
<App />
</Provider>
  
 
)
