import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Nav from './components/Nav';
import Intro from './components/Intro';
import BlogPost from './components/BlogPost';
import Skills from './components/Skills';

var images = [
  { name: 'Java', image: 'https://ctechhosting.com/images-354/java.png' },
  { name: 'Python', image: 'https://ctechhosting.com/images-354/python.png' },
  { name: 'React', image: 'https://ctechhosting.com/images-354/react.png' },
  { name: 'Databases', image: 'https://ctechhosting.com/images-354/sql.png' },
];

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Nav />
    <Intro />
    <BlogPost />
    <Skills images={images} />
  </StrictMode>
);
