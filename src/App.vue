<script setup>
import {RouterView} from 'vue-router'

</script>

<template>
    <div class="main">
      <router-view/>
    </div>
</template>


<style lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
}

.main {
  width: 100%;
}
</style>
