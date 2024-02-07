import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  Typography,
  Button,
  Container,
  AppBar,
  Toolbar,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Register from './Register';

const Profile = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/");
    });
  };

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
              Home
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <div style={{ marginTop: "20px" }}>
          {user ? (
            <div>
              <Typography variant="h6" component="div">
                Welcome - {user.displayName || user.email}
              </Typography>
              <Typography variant="body1" paragraph>
                <Register/>
              </Typography>
            </div>
          ) : (
            <Typography variant="body1" paragraph>
              Loading...
            </Typography>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Profile;
