<!--
 * @Author: yosong
 * @Date: 2023-11-22 14:24:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-23 10:59:23
 * @FilePath: \yo-vue-admin\src\views\home\work\cpns\welcome.vue
-->
<template>
  <el-card class="welcome">
    <el-row>
      <el-col :xs="8" :sm="8" :md="12" :lg="2">
        <img src="../../../../assets/images/yosong.png" alt="" />
      </el-col>
      <el-col :xs="16" :sm="16" :md="12" :lg="18">
        <div class="info">
          {{ getTimeState() }} yosong, 开始你接下来的工作吧!
        </div>
      </el-col>
      <el-col :md="24" :lg="4">
        <div class="work">
          <div class="commission">
            <span>代办</span>
            <span>112</span>
          </div>
          <div class="project">
            <span>项目</span>
            <span>3</span>
          </div>
          <div class="steam">
            <span>团队</span>
            <span>23</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup lang="ts">
import { getTimeState } from '@/utils/index'
</script>

<style lang="scss" scoped>
.welcome {
  width: 100%;
  /* height: 120px; */
  border: 0;
  border-radius: 0;
  :deep(.el-card__body) {
    padding-top: 0;
    .el-row {
      align-items: center;
    }
    .el-col {
      margin-top: 20px;
    }
    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }
    .info {
      flex: 1;
      font-size: 18px;
    }
    .work {
      display: flex;
      justify-content: space-between;
      > div {
        display: flex;
        flex-direction: column;
        > span {
          text-align: right;
          &:first-child {
            font-size: small;
            margin-bottom: 5px;
            color: #aaa;
          }
          &:last-child {
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>
