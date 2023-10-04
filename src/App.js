import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router, } from 'react-router-dom'
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import Login from './components/Login';

function App() {
  const [user, loading] = useAuthState(auth)

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Chat />
            </AppBody>
          </>
        )}

      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;