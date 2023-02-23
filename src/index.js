import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Nav from './components/Nav';
import Intro from './components/Intro';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Nav />
    <Intro />
  </StrictMode>
);
