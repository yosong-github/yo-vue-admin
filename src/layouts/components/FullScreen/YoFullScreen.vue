<!--
 * @Author: yosong
 * @Date: 2023-11-15 14:19:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-15 14:44:19
 * @FilePath: \yo-vue-admin\src\layouts\components\FullScreen\YoFullScreen.vue
-->
<template>
  <div class="YoFullScreen">
    <div class="outFullScreen" @click="outFullScreen">
      <IconOutSide></IconOutSide>
    </div>
  </div>
</template>

<script setup lang="ts">
const outFullScreen = () => {
  document.querySelector('#app')?.setAttribute('class', '')
}
</script>

<style lang="scss" scoped>
.YoFullScreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 9999;
  background-color: rgba(255, 0, 0, 0);
  display: none;
  .outFullScreen {
    position: absolute;
    top: -30px;
    right: -30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--out-content-full);
    cursor: pointer;
    > svg {
      height: 25px;
      position: absolute;
      left: 4px;
      bottom: 6px;
    }
  }
}
</style>
