import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/styles.css';
import './assets/css/animate.css';
import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-select.min.css';
import './assets/css/drift-basic.min.css';

import './assets/fonts/fonts.css';
import './assets/fonts/font-icons.css';

// import './assets/js/main.js';
import './assets/js/bootstrap.min.js';
import './assets/js/bootstrap.bundle.min.js';


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
