<template>
  <header>head head</header>
  <div id="content">
    <SideMenu id="side-menu" />
    <RouterView />
    <Roadmap id="road-map" />
  </div>
  <footer>footer footer</footer>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideMenu from '@/components/navigation/SideMenu.vue'
import Roadmap from '@/components/navigation/Roadmap.vue'
</script>
<style scoped>
#content {
  display: block;
  min-height: 100vh;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
  }
}

#side-menu {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}

#road-map {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}
</style>
