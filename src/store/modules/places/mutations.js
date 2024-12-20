export default {
  TOGGLE_PLACE_LIKE (state, placeId) {
    const place = state.places.find(p => p.id === placeId)
    if (place) {
      place.isLiked = !place.isLiked
    }
  },
  addPlace (state, place) {
    state.places.push(place)
  }
}
