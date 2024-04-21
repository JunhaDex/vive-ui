<template>
  <div class="skeleton-box skeleton-box-animated"></div>
</template>
<script lang="ts" setup></script>
<style scoped>
.skeleton-box {
  display: inline-block;
  background-color: #e8e8e8;
  border-radius: 4px;
  height: 100%;
  width: 100%;
}

.skeleton-box-animated {
  background: linear-gradient(115deg, #e8e8e8 48%, #f3f3f3 60%, #e8e8e8 73%);
  background-size: 200% 100%;
  animation: skeleton-animation 1.5s infinite linear;
}

@keyframes skeleton-animation {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
