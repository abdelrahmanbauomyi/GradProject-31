import React from 'react';
import styles from './VideoWatch.module.css'
import { Button } from 'react-bootstrap';
import { useNavigate ,useLocation,useNavigation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import SignUpForm from '../NavigationBar/Navbar/SignUpForm';
const VideoWatch = () => {
 


    const navigate = useNavigate();
    const location = useLocation();
    const [showSignUp, setShowSignUp] = useState(false);
  
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      if (searchParams.get('signup') === 'true') {
        setShowSignUp(true);
      }
    }, [location]);
  
    const goToSignUp = () => {
      navigate(`/?signup=true`);
      setShowSignUp(true);
    };
  return (
    <div>
        <h3> Become a member of out hosptial community?</h3>
        {showSignUp ? (
        <SignUpForm />
      ) : (
        <Button onClick={goToSignUp}>Sign Up</Button>
      )}
    <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
      <iframe
        src="https://share.synthesia.io/embeds/videos/dc94c680-753b-4780-9364-ac8dc04939ee"
        loading="lazy"
        title="Synthesia video player - Your AI video"
        allow="encrypted-media; fullscreen;"
        style={{
          position: 'absolute',
          width: '50%',
          height: '50%',
          top: 200,
          left: 350,
          border: 'none',
          padding: 0,
          margin: 0,
          overflow: 'hidden'
        }}
      ></iframe>
      </div>
    </div>
  );
};

export default VideoWatch;
