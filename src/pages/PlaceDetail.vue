<template>
  <HeaderComponent/>
  <div class="q-px-xl q-pt-lg">
    <div class="my-card">
      <q-responsive :ratio="4/3">
        <img :src="place.image">
      </q-responsive>
      <q-card-section>
        <div class="text-h5 text-bold">{{ place.title }}</div>
        <div class="text-h6 text-italic">By Mekonen Haftekiros</div>
        <div class="q-py-lg">
          {{ place.detail }}
        </div>
        <MapComponent :place="this.place"/>
      </q-card-section>
    </div>
  </div>
  <FooterComponent/>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderComponent from 'src/components/HeaderComponent.vue'
import MapComponent from 'src/components/MapComponent.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
export default {
  components: {
    HeaderComponent, MapComponent, FooterComponent
  },
  computed: {
    ...mapGetters('places', ['places']),
    place () {
      // Find the place using the route parameter id
      const id = Number(this.$route.params.id)
      return this.places.find(place => place.id === id)
    }
  }
}

</script>

<style lang="sass" scoped>
.my-card
  width: 90%
  margin: 0 auto
  padding: 20px /* Base padding for larger screens */

  // For tablets and smaller screens
  @media (max-width: 768px)
    width: 95%
    padding: 15px

  // For mobile screens
  @media (max-width: 480px)
    width: 100%
    padding: 10px
</style>
