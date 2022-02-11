import React, { useState } from 'react';
//
import LoginPage from './components/LoginPage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
