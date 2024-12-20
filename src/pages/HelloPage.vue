<template>
  <HeaderComponent/>
  <div >
    <MapComponent/>
  </div>
  <div class="q-pa-md row items-start q-gutter-md justify-center">
    <PlaceCard v-for="place in places" :key="place.id" :place="place"/>
  </div>

  <!-- Button to open dialog -->
  <q-btn
    round
    color="secondary"
    size="22px"
    icon="add"
    class="fixed-bottom-right q-ma-xl"
    @click="showForm = true"
  />

  <!-- Dialog for PlaceForm -->
  <q-dialog v-model="showForm" persistent>
    <PlaceForm @close="showForm = false" />
  </q-dialog>
  <FooterComponent/>
</template>

<script>
import PlaceCard from 'src/components/PlaceCard.vue'
import HeaderComponent from 'src/components/HeaderComponent.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
import MapComponent from 'src/components/MapComponent.vue'
import { mapGetters } from 'vuex'
import PlaceForm from 'src/components/PlaceForm.vue'

export default {
  components: {
    PlaceCard, HeaderComponent, FooterComponent, MapComponent, PlaceForm
  },
  data () {
    return {
      showForm: false // controls dialog visibility
    }
  },
  computed: {
    ...mapGetters('places', ['places'])
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
  min-width: 400px
</style>
