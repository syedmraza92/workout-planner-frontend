import React, { useState, useEffect } from "react";
import { AppBar, Button, Toolbar, Typography, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from './backgroundImage.jpg';
import { auth } from "../firebase";

const Home = (props) => {
    const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    auth.signOut();
  };

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", minHeight: "100vh" }}>
          <AppBar position="static" sx={{ backgroundColor: "#678174" }}>
            <Container>
              <Toolbar>
                <Grid container alignItems="center">
                  {/* Logo */}
                  <Grid item xs={3}>
                    <Typography variant="h6" component="div" sx={{ color: "white" }}>
                    <FontAwesomeIcon icon={faDumbbell} />
                    </Typography>
                  </Grid>
    
                  {/* Welcome message */}
                  <Grid item xs={6} sx={{ textAlign: "center" }}>
                {user ? (
                  <Typography variant="h6" component="div">
                    Welcome - {props.name || user.displayName || user.email}
                  </Typography>
                ) : (
                  <Typography variant="h6" component="div">
                    FitPulse
                  </Typography>
                )}
              </Grid>
    
                  {/* Login/Signup/Signout buttons */}
                  <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
                {user ? (
                  <>
                    <Link to="/recommendation" style={{ textDecoration: "none", color: "inherit" }}>
                      <Button color="inherit" style={{ marginRight: "8px" }}>
                        Profile
                      </Button>
                    </Link>
                    <Button color="inherit" onClick={handleSignOut}>
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to={"/login"} style={{ textDecoration: "none", color: "inherit" }}>
                      <Button color="inherit">Login</Button>
                    </Link>
                    <Link to={"/signup"} style={{ textDecoration: "none", color: "inherit", marginLeft: "8px" }}>
                      <Button color="inherit">Signup</Button>
                    </Link>
                  </>
                )}
              </Grid>
                </Grid>
              </Toolbar>
            </Container>
          </AppBar>
    
          <Container sx={{ marginTop: 4 }}>
        <Typography variant="h1" component="div" sx={{ flexGrow: 1, color: "white", textAlign: 'left', marginBottom: '16px'}} >
          Workout Planner Anytime, Anywhere
        </Typography>

        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "white", textAlign: 'left', marginBottom: '16px' }}>
          Embark on your fitness journey with FitPlan Pro, the all-in-one app
          designed to empower you in crafting personalized and effective workout
          plans. Whether you're a seasoned gym enthusiast or just starting your
          fitness adventure, our app is tailored to meet your unique needs and
          goals.
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'left', marginBottom: '16px' }}>
          <Link
            to="/get-started"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit" sx={{ backgroundColor: '#678174', color: 'white' }}>Get Started</Button>
          </Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
