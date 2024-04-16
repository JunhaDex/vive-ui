<template>
  <div class="grid rw h-full" :class="`grid-cols-${col} grid-rows-${row}`">
    <slot />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  col: number
  row: number
}>()
</script>
<style scoped>
.rw {
  margin: 0 6%;
  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 688px;
  }
  @media (min-width: 1024px) {
    margin: 0 auto;
    max-width: 928px;
  }
  @media (min-width: 1312px) {
    margin: 0 auto;
    max-width: 1152px;
  }
}
</style>
