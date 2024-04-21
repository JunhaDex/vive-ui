<template>
  <section>
    <h1 class="text-3xl">foo</h1>
    <button class="btn btn-primary">Button</button>
    <br />
    <span class="text-2xl">colors</span>
    <div class="grid grid-cols-10 gap-4 mx-4">
      <div class="bg-purple-900">01</div>
      <div class="bg-amber-100">02</div>
      <div class="bg-amber-200">03</div>
      <div class="bg-amber-300">04</div>
      <div class="bg-amber-400">05</div>
      <div class="bg-amber-500">06</div>
      <div class="bg-amber-600">07</div>
      <div class="bg-amber-700">08</div>
      <div class="bg-amber-800">09</div>
      <div class="bg-amber-900">10</div>
    </div>
    <GridContainer col="1" row="1">
      <div>
        <BaseBtn shape="pill" size="xs" level="1" @click="handleClick" :disabled="true"
          >Pilled
        </BaseBtn>
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
    <GridContainer col="4" row="1">
      <Tile title="Title" description="Description" noti="new" :on-load="true" />
      <Tile title="Title" description="Description" noti="hot" :focused="true" />
      <Tile title="Title" description="Description" noti="hot" selectable="selected">
        <TileImage src="https://via.placeholder.com/48" alt="placeholder" />
      </Tile>
      <Tile title="Title" description="Description" noti="hot">
        <TileImage src="https://via.placeholder.com/36" alt="placeholder" size="36" />
      </Tile>
      <Tile title="Title" description="Description" noti="hot">
        <TileImage src="https://via.placeholder.com/24" alt="placeholder" size="24" />
      </Tile>
    </GridContainer>
  </section>
</template>
<script lang="ts" setup>
import GridContainer from '@/components/layouts/GridContainer.vue'
import BaseBtn from '@/components/inputs/BaseBtn.vue'
import Tile from '@/components/surfaces/Tile.vue'
import TileImage from '@/components/surfaces/TileImage.vue'

function handleClick() {
  console.log('clicked')
}
</script>
