import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRoutes from './routes';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/reactapps">
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
