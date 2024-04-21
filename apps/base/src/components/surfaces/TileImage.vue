<template>
  <div :class="['tile-image', `tile-image-${size}`]">
    <img :src="src" :alt="alt" />
  </div>
</template>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    src: string
    size?: '24' | '36' | '48'
    alt?: string
    onLoad?: boolean
  }>(),
  {
    alt: 'tile image',
    size: '48',
    onLoad: false
  }
)
</script>
<style scoped>
.tile-image {
  display: inline-block;
}

.tile-image-24 > img {
  width: 24px;
  height: 24px;
}

.tile-image-36 > img {
  width: 36px;
  height: 36px;
}

.tile-image-48 > img {
  width: 48px;
  height: 48px;
}
</style>
