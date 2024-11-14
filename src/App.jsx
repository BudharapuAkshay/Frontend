// src/App.jsx
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArtistLandingPage from './components/artist/ArtistLandingPage';
import Home from './components/Home';
import DirectorLandingPage from './components/director/DirectorLandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import ArtistSignup from './components/artist/ArtistSignup';
import DirectorSignup from './components/director/DirectorSignup';
import { RoleContext } from './contexts/RoleContext';
import ArtistHeader from './components/artist/ArtistHeader';
import DirectorHeader from './components/director/DirectorHeader';
import DirectorProfileForm from './components/director/DirectorProfileForm';
import TalentPostForm from './components/director/TalentPostForm';
import ArtistProfileForm from './components/artist/ArtistProfileForm';

function App() {
  const { role, logout } = useContext(RoleContext);

  return (
    <Router>
      <div className="bg-gray-800 text-white min-h-screen">
        {role === 'ARTIST' ? <ArtistHeader logout={logout} /> :
         role === 'DIRECTOR' ? <DirectorHeader logout={logout} /> :
         <Header />}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/director" element={<DirectorLandingPage />} />
            <Route path="/artist" element={<ArtistLandingPage />} />
            <Route path="/director/signup" element={<DirectorSignup />} />
            <Route path="/artist/signup" element={<ArtistSignup />} />
            
            <Route path="/director/create-profile" element={<DirectorProfileForm />} />
            <Route path="/artist/create-profile" element={<ArtistProfileForm />} />
            <Route path="/director/add-talent-post" element={<TalentPostForm />} />
          </Routes>
        </main> 
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
