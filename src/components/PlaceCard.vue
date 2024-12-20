<template>
  <q-card class="my-card" @click="$router.push(`/${place.id}`)">
    <q-img :src="place.image" basic >
      <div class="absolute-bottom title-container">
        <span>{{place.title}}</span>
      <q-card-actions align="right">
        <q-btn flat round icon="favorite" :color="place.isLiked ? 'red' : 'grey'" @click.stop="toggleLike" />
      </q-card-actions>
      </div>
    </q-img>
    <q-card-section>
      {{ place.description }}
    </q-card-section>
  </q-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: { ...mapGetters('places', ['places']) },
  props: {
    place: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleLike () {
      this.$store.dispatch('places/togglePlaceLike', this.place.id)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
  min-width: 400px
.title-container
  display: flex /* Use flexbox for layout */
  justify-content: space-between /* Space between title and button */
  align-items: center /* Center vertically */
  width: 100% /* Full width */
  height: 16%
  background-color: rgba(1, 1, 1, 0.8)
  font-weight: bold
  font-size: 20px
  border-radius: 10px
</style>
