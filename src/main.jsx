import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/styles.css';
import './index.css';
import './assets/styles/animate.css';
// import './assets/styles/bootstrap.min.css';
// import './assets/styles/bootstrap-select.min.css';
import './assets/styles/drift-basic.min.css';

import './assets/fonts/fonts.css';
import './assets/fonts/font-icons.css';

// import './assets/js/main.js';
// import './assets/js/bootstrap.min.js';
// import './assets/js/bootstrap.bundle.min.js';


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
