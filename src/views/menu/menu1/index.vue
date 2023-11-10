<!--
 * @Author: yosong
 * @Date: 2023-11-10 13:47:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-10 14:47:48
 * @FilePath: \yo-vue-admin\src\views\menu\menu1\index.vue
-->
<!--
 * @Author: yosong
 * @Date: 2023-11-10 13:47:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-10 14:27:54
 * @FilePath: \yo-vue-admin\src\views\menu\menu1\index.vue
-->
<template>
  <div class="box">menu1</div>
  <el-input v-model="value" placeholder="测试缓存"></el-input>

  <el-button @click="$router.push('/menu/menu3')">/menu/menu3</el-button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const value = ref('')

defineOptions({
  name: 'Menu1'
})

onMounted(() => {
  console.log(useRouter())
})
</script>

<style lang="scss" scoped></style>
