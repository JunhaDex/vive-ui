<template>
  <section>
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
