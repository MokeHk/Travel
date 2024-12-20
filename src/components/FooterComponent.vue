<template>
  <div class="q-pt-md">
      <div bordered style="height: 100px" class="bg-grey-3 text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey-8" v-model="tab">
          <q-tab name="images" label="Images" />
          <q-tab name="videos" label="Videos" />
          <q-tab name="articles" label="Articles" />
        </q-tabs>
      </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('images')
    }
  }
}
</script>
