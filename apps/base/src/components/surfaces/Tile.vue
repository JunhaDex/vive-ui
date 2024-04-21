<template>
  <div :class="[gridSpan > 1 ? `col-span-${gridSpan}` : '']">
    <!--  grid cover  -->
    <div
      class="tile flex flex-col justify-end"
      :class="[
        selectable === 'selected' ? 'tile-selected' : '',
        selectable === 'unselected' ? 'tile-unselected' : '',
        disabled ? 'tile-disabled' : '',
        focused ? 'tile-focused' : '',
        onLoad ? 'tile-loading' : '',
        options
      ]"
    >
      <div class="tile-header mb-4">
        <span v-if="noti !== 'hidden'" :class="['noti', `noti-${noti}`]" />
        <slot />
      </div>
      <SktTile v-if="onLoad" />
      <div v-else class="tile-content">
        <h2 class="font-bold text-2xl mb-4">{{ props.title }}</h2>
        <p class="text-base">{{ props.description }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SktTile from '@/components/layouts/skeletons/SktTile.vue'
import { onMounted } from 'vue'

const props = withDefaults(
  defineProps<{
    noti?: 'new' | 'hot' | 'hidden'
    title: string
    description: string
    gridSpan?: number
    disabled?: boolean
    focused?: boolean
    onLoad?: boolean
    selectable?: 'none' | 'selected' | 'unselected'
    options?: string
  }>(),
  {
    noti: 'hidden',
    gridSpan: 1,
    disabled: false,
    focused: false,
    onLoad: false,
    selectable: 'none'
  }
)
</script>
<style scoped>
.noti {
  position: absolute;
  display: inline-block;
  top: 20px;
  right: 20px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.noti-new {
  background-color: theme('colors.blue.600');
}

.noti-hot {
  background-color: theme('colors.red.600');
}
</style>
