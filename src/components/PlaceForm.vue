<template>
    <div class="backColor q-pa-xl">
      <h2>Add a New Place</h2>
      <form @submit.prevent="addPlace">
        <div>
          <label for="id">ID:</label>
          <input v-model="formData.id" type="number" required />
        </div>
        <div>
          <label for="place">Place:</label>
          <input v-model="formData.place" type="text" required />
        </div>
        <div>
          <label for="latitude">Latitude:</label>
          <input v-model="formData.latitude" type="text" required />
        </div>
        <div>
          <label for="longitude">Longitude:</label>
          <input v-model="formData.longitude" type="text" required />
        </div>
        <div>
          <label for="placeName">Place Name:</label>
          <input v-model="formData.placeName" type="text" required />
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea v-model="formData.description" required></textarea>
        </div>
        <div>
          <label for="image">Image URL:</label>
          <input v-model="formData.image" type="text" required />
        </div>
        <div>
          <label for="title">Title:</label>
          <input v-model="formData.title" type="text" required />
        </div>
        <button type="submit">Add Place</button>
      </form>
      <q-btn @click="$emit('close')">Close</q-btn>
    </div>
  </template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
  name: 'PlaceForm',
  setup () {
    const store = useStore()
    const formData = ref({
      id: '',
      place: '',
      latitude: '',
      longitude: '',
      placeName: '',
      description: '',
      image: '',
      title: ''
    })

    const addPlace = () => {
      store.commit('places/addPlace', { ...formData.value, isLiked: false, markers: [] })
      formData.value = {
        id: '',
        place: '',
        latitude: '',
        longitude: '',
        placeName: '',
        description: '',
        image: '',
        title: ''
      }
    }

    return { formData, addPlace }
  }
}
</script>

<style>
.backColor {
    background-color : rgba(149, 150, 149, 0.89);
    padding: 100px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
form div {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

input:focus,
textarea:focus {
  border-color: #007bff;
  outline: none;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .backColor {
    padding: 15px; /* Reduced padding for tablets */
  }
}

@media (max-width: 480px) {
  .backColor {
    padding: 10px; /* Further reduced padding for phones */
  }
}
</style>
