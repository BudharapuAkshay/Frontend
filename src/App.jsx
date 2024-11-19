// src/App.jsx
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtistLandingPage from "./components/artist/ArtistLandingPage";
import Home from "./components/Home";
import DirectorLandingPage from "./components/director/DirectorLandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ArtistSignup from "./components/artist/ArtistSignup";
import DirectorSignup from "./components/director/DirectorSignup";
import { RoleContext } from "./contexts/RoleContext";
import ArtistHeader from "./components/artist/ArtistHeader";
import DirectorHeader from "./components/director/DirectorHeader";
import DirectorProfileForm from "./components/director/DirectorProfileForm";
import TalentPostForm from "./components/director/TalentPostForm";
import ArtistProfileForm from "./components/artist/ArtistProfileForm";
import DirectorDashboard from "./components/director/DirectorDashboard";
import PostApplicantsPage from "./components/director/PostApplicantsPage";
import DirectorProfile from "./components/director/DirectorProfile";
import ArtistProfile from "./components/artist/ArtistProfile";
import ArtistHome from "./components/artist/ArtistHome";
import TalentPostDetails from "./components/artist/TalentPostDetails";
import ViewArtistProfile from "./components/director/ViewArtistProfile";
import ShortlistedApplicants from "./components/director/ShortlistedApplicants";
import ArtistDashboard from "./components/artist/ArtistDashboard";

function App() {
  const { role, logout } = useContext(RoleContext);

  return (
    <Router>
      <div className="bg-gray-800 text-white min-h-screen">
        {role === "ARTIST" ? (
          <ArtistHeader logout={logout} />
        ) : role === "DIRECTOR" ? (
          <DirectorHeader logout={logout} />
        ) : (
          <Header />
        )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/director" element={<DirectorLandingPage />} />
            <Route path="/artist" element={<ArtistLandingPage />} />
            <Route path="/director/signup" element={<DirectorSignup />} />
            <Route path="/artist/signup" element={<ArtistSignup />} />

            <Route
              path="/director/create-profile"
              element={<DirectorProfileForm />}
            />
            <Route
              path="/artist/create-profile"
              element={<ArtistProfileForm />}
            />
            <Route
              path="/director/add-talent-post"
              element={<TalentPostForm />}
            />
            <Route path="/director/dashboard" element={<DirectorDashboard />} />
            <Route
              path="/director/:postId/applicants"
              element={<PostApplicantsPage />}
            />
            <Route path="/director/profile" element={<DirectorProfile />} />
            <Route path="/artist/profile" element={<ArtistProfile />} />
            <Route path="/artist/home" element={<ArtistHome />} />
            <Route
              path="/artist/home/:postId"
              element={<TalentPostDetails />}
            />
            <Route path="/director/view-artist-profile/:artistId" element={<ViewArtistProfile />} />
            <Route
          path="/director/:talentPostId/shortlisted"
          element={<ShortlistedApplicants />}
        />
        <Route path="/artist/dashboard" element={<ArtistDashboard />}/>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
