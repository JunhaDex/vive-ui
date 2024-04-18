<template>
  <section>
    <GridContainer col="1" row="1">
      <div>
        <BaseBtn shape="pill" size="xs" level="1" @click="handleClick">Pilled </BaseBtn>
        <BaseBtn shape="rect" size="sm" level="2" @click="handleClick">Pilled</BaseBtn>
        <BaseBtn shape="square" size="md" level="3" @click="handleClick">Pilled</BaseBtn>
        <BaseBtn shape="circle" size="lg" @click="handleClick">Pilled</BaseBtn>
        <BaseBtn :href="{ url: 'https://www.google.com/', isOut: true }" @click="handleClick">
          Pilled
        </BaseBtn>
      </div>
      <div>
        <BaseBtn shape="block" :href="{ url: '/' }" @click="handleClick">Pilled</BaseBtn>
      </div>
    </GridContainer>
  </section>
</template>
<script lang="ts" setup>
import GridContainer from '@/components/layouts/GridContainer.vue'
import BaseBtn from '@/components/inputs/BaseBtn.vue'

function handleClick() {
  console.log('clicked')
}
</script>
