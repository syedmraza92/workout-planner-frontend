import React from 'react';
import { AppBar, Button, Toolbar, Typography, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';

const RecommendationPage = () => {
  const location = useLocation();
  const recommendations = location.state?.recommendations || null;
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/edit-profile');
  };

  console.log('Location state:', location.state);

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#678174' }}>
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
              <FontAwesomeIcon icon={faDumbbell} />
            </Typography>
            <Button color="inherit" onClick={() => navigate('/')}>
              Go Back
            </Button>
          </Toolbar>
        </Container>
      </AppBar>


      <Container>
      <Button variant="contained" sx={{ backgroundColor: '#678174', color: 'white' }} onClick={handleEditClick}>
          Edit Profile
        </Button>
        {/* <Typography variant="h4" align="center" gutterBottom>
          Following is your recommendation:
        </Typography> */}

        {recommendations && (
          <div>
            <strong style={{ fontSize: '36px' }}>Workout Recommendations:</strong>
            <pre style={{ color: 'black' }}>{recommendations}</pre>
          </div>
          
        )}
               {!recommendations && (
          <Typography variant="body1" paragraph>
            No recommendations available.
          </Typography>
        )}

      </Container>
    </div>
  );
};

export default RecommendationPage;
