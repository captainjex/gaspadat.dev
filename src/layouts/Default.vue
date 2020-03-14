<template>
  <div>
    <div v-if="isMaintenance">maintenis</div>
    <slot v-else/>
  </div>
</template>

<script>
import config from '~/.temp/config.js';

export default {
  computed: {
    config () {
      return config
    },
    isMaintenance () {
      return true
    }
  }
}
</script>

<style src="~/assets/css/main.css"></style>
