import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//
import LoginPage from './components/LoginPage.jsx';
import HomePage from './components/HomePage.jsx';
import RecipeEditor from './components/RecipeEditor.jsx';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <LoginPage setToken={setToken} />;
  }

  return (
    <div className="wrapper">
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
