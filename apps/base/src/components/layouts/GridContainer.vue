<template>
  <div class="grid rw" :class="`grid-cols-${col} grid-rows-${row} gap-${gap}`">
    <slot />
  </div>
</template>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    col: number
    row: number
    gap?: number
  }>(),
  {
    gap: 4
  }
)
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
