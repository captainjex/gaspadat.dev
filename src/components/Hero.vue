<template>
  <div class="text-center pt-16 px-16">
    <h1 class="text-6xl font-bold font-serif" v-html="settings.hero_title" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>
