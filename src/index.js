import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Nav from './components/Nav';
import Intro from './components/Intro';
import BlogPost from './components/BlogPost';
import Skills from './components/Skills';

var skillnames = ['Java', 'Javascript', 'React', 'Databases'];
var images = [
  'https://ctechhosting.com/images-354/java.png',
  'python.png',
  'react.png',
  'sql.png',
];

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Nav />
    <Intro />
    <BlogPost />
    <Skills images={images} skillnames={skillnames} />
  </StrictMode>
);
