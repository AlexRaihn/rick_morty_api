<script lang="ts" setup>
import { defineModel, defineProps } from 'vue'
import { ElMessageBox } from 'element-plus'


const dialogVisible = defineModel('dialogVisible')

defineProps({
    item: Object
})
</script>


<template>
    <el-dialog
      v-model="dialogVisible"
      width="500"
    >
      <template #header>
        <div class="dialog-footer" style="text-align: left;">
            {{ item.name }}
            <p>Status: {{ item.status }}</p>
            <p>Race: {{ item.species }}</p>
        </div>
      </template>
      <span>
        <img
            :src="item.image"
            style="width: 100%"
          />
      </span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Закрыть</el-button>
        </div>
      </template>
    </el-dialog>
</template>