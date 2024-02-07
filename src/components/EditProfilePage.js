import React from 'react';
import { AppBar, Button, Toolbar, TextField, Container, Typography } from '@mui/material';
import WorkoutService from '../service/workout.service';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    age: '',
    weight: '',
    height: '',
    desiredWeight: '',
  });

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setLoading(true);

    // Call the API to update user information
    WorkoutService.updateUserData(formData)
      .then((response) => {
        console.log('User data updated successfully', response.data);
        setLoading(false);
        navigate('/result'); // Navigate back to the RecommendationPage after updating user data
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
        setError('Error updating user data. Please try again.');
        setLoading(false);
      });
  };

  return (
    <div>         <AppBar position="static" sx={{ backgroundColor: "#678174" }}>
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
    <div className={styles.container}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Edit Your Profile:
        </Typography>
        <form onSubmit={handleSubmit}>
        <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Weight"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Height"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Desired Weight"
            name="desiredWeight"
            value={formData.desiredWeight}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <Button type="submit" variant="contained" sx={{ backgroundColor: '#678174', color: 'white' }}>
            Save Changes
          </Button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Container>
    </div>
    </div>
  );
};

export default EditProfilePage;
