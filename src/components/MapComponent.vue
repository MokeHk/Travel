<template>
  <div id="map" >
    <q-responsive :ratio="9/13"></q-responsive>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useStore } from 'vuex'

export default {
  name: 'MapComponent',

  props: {
    place: {
      type: Object,
      required: false,
      default: () => ({}) // Provide an explicit default object
    }
  },

  emits: ['location-found'],

  setup (props, { emit }) {
    const userLocation = ref(null)
    const store = useStore()
    const places = store.state.places
    const markers = ref([]) // Use ref for reactivity

    onMounted(() => {
      const defaultLat = 35.6895
      const defaultLng = 139.6917

      // Initialize map
      const map = L.map('map').setView([defaultLat, defaultLng], 12)

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map)

      // Use geolocation to get the user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude
            const lng = position.coords.longitude
            userLocation.value = { lat, lng }

            // Center the map on the user's current location
            map.setView([lat, lng], 16)

            // Add a marker at the user's location
            L.marker([lat, lng])
              .addTo(map)
              .bindPopup('You are here')
              .openPopup()

            L.marker([props.place.latitude, props.place.longitude])
              .addTo(map)
              .bindPopup('props.place.place')
              .openPopup()

            // Emit the user's location to the parent component
            emit('location-found', { lat, lng })
          },
          (error) => {
            console.error('Error getting location:', error)
            // If denied or error, keep the map at default coordinates
            map.setView([defaultLat, defaultLng], 7)
          }
        )
      } else {
        console.error('Geolocation is not supported by this browser.')
      }

      // Add initial marker based on props if provided
      if (props.place.latitude && props.place.longitude) {
        const lat = props.place.latitude
        const lng = props.place.longitude

        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(props.place.placeName || 'Location')
          .openPopup()

        // Uncomment the code below to enable adding markers on click

        map.on('click', function (e) {
          const { lat, lng } = e.latlng

          // Prompt the user for a marker name
          const newMarkerName = prompt('Enter a name for the new pin:', 'New Pin')

          if (newMarkerName) {
            // Add a new marker on click
            L.marker([lat, lng])
              .addTo(map)
              .bindPopup(newMarkerName)
              .openPopup()

            // Store the marker in the markers array
            markers.value.push({ lat, lng })

            // OPTIONAL: You can dispatch this new marker data to Vuex
            // store.dispatch('addMarker', { lat, lng })

            console.log(`New marker pinned at lat: ${lat}, lng: ${lng}`)
          }
        })
      }
    })

    return { places, markers }
  }
}
</script>

<style>

</style>
