import axios from "axios";

const API_URL = "http://localhost:8080/workouts";

class WorkoutService {
  getAllWorkouts() {
    return axios.get(API_URL);
  }

  getWorkoutById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  createWorkout(workout) {
    return axios.post(`${API_URL}/createWorkout`, workout);
  }

  getWorkoutRecommendation(workoutInput) {
    return axios.post(`${API_URL}/recommendation`, workoutInput);
  }

  updateWorkout(id, workout) {
    return axios.post(`${API_URL}/updateWorkout/${id}`, workout);
  }

  deleteWorkout(id) {
    return axios.get(`${API_URL}/deleteWorkout/${id}`);
  }
}

const workoutServiceInstance = new WorkoutService();

export default workoutServiceInstance;
