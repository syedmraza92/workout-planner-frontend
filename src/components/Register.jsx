import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import WorkoutService from '../service/workout.service';
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";


const WorkoutForm = () => {
  const [recommendations, setRecommendations] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    weight: '',
    height: '',
    desiredWeight: '',
  });

  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const fetchRecommendations = async () => {
    try {
      const response = await WorkoutService.getWorkoutRecommendation(formData);
      console.log('Recommendations:', response.data);
      setRecommendations(response.data);
      setMsg('Workout Added Successfully');
      setLoading(false);
      navigate('/recommendation', { state: { recommendations: response.data } });
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setError('Error fetching recommendations. Please try again.');
      setLoading(false);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setLoading(true);

    // First, create the workout
    WorkoutService.createWorkout(formData)
      .then((res) => {
        console.log('Workout Added Successfully');

        // Now, fetch recommendations and set the state
        fetchRecommendations();
      })
      .catch((error) => {
        console.error('Error submitting workout:', error);
        setError('Error submitting workout. Please try again.');
        setLoading(false);
      });
  };

  return (
    <div className={styles.container}>
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Please fill out this form:
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
          Submit
        </Button>
      </form>
    </Container>
    </div>
  );
};

export default WorkoutForm;
