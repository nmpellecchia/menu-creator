import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//
import Navbar from './components/navbar/Navbar.jsx';
import LoginPage from './components/logIn/LoginPage.jsx';
import HomePage from './components/mainPages/HomePage.jsx';
import RecipeEditor from './components/mainPages/RecipeEditor.jsx';
//
import {
  getFromLocalStorage,
  saveOnLocalStorage,
} from './utilities/storage/storage.js';

function App() {
  // Try to get the stored token if there's one. So the users doesn't have to log in every time they open the app
  const [token, setToken] = useState(getFromLocalStorage('token') || null);

  useEffect(() => {
    // Store the token every time is updated
    if (token !== undefined) {
      saveOnLocalStorage('token', token);
    }
  }, [token]);

  // If there's no token take the user back to the log in page
  if (!token) {
    return <LoginPage setToken={setToken} />;
  }

  return (
    <div className="wrapper font-main">
      <Navbar setToken={setToken} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="editor" element={<RecipeEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
