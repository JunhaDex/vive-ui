<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href?.url"
    :target="href ? (href.isOut ? '_blank' : '_self') : undefined"
    :class="['btn btn-disabled', `btn-${shape}`, `btn-${size}`, `${levelClass}`]"
  >
    <span v-if="isWait" :class="['loading', 'loading-spinner', `loading-${size}`]" />
    <slot v-else />
  </component>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    shape?: 'pill' | 'rect' | 'square' | 'circle' | 'block'
    size?: 'xs' | 'sm' | 'md' | 'lg'
    level?: '1' | '2' | '3'
    href?: {
      url: string
      isOut?: boolean
    }
    isWait?: boolean
    isDisabled?: boolean
  }>(),
  {
    shape: 'rect',
    size: 'md',
    level: '1',
    isWait: false
  }
)
const levelClass = computed(() => {
  if (props.level === '1') {
    return 'btn-primary'
  } else if (props.level === '2') {
    return 'btn-secondary'
  } else {
    return 'btn-ghost'
  }
})
</script>
<style scoped>
.btn-pill {
  border-radius: 999px;
}

.btn-disabled {
  cursor: not-allowed;
  background-color: #fff;
}

.btn-xs {
  display: inline-flex;
}

.btn-sm {
  display: inline-flex;
}

.btn-md {
  display: inline-flex;
}

.btn-lg {
  display: inline-flex;
}
</style>
