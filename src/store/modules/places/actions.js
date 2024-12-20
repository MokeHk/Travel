export default {
  togglePlaceLike ({ commit }, placeId) {
    commit('TOGGLE_PLACE_LIKE', placeId) // Ensure the mutation name matches
  }
}
