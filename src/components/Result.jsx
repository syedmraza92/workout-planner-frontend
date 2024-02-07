import React from 'react';
import { AppBar, Button, Toolbar, Typography, Container } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from 'react-router-dom';

const Result = () => {
    const location = useLocation();
    const recommendations = location.state?.recommendations || null;
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#678174" }}>
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div" sx={{ color: "white" }}>
                <FontAwesomeIcon icon={faDumbbell} />
              </Typography>
            </Typography>
            <Button color="inherit" onClick={() => navigate("/")}>
              Go Back
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Congratulations! Your workout has been successfully submitted.
        </Typography>

        {recommendations && (
          <div>
            <strong style={{fontSize: '36px'}}>Workout Recommendations:</strong>
            <pre style={{ color: 'black' }}>{recommendations}</pre>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Result;
