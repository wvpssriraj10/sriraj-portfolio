import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CricketPage from './CricketPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CricketPage />
  </StrictMode>
);

