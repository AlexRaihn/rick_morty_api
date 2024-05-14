<script setup lang="ts">
import { InfoFilled } from '@element-plus/icons-vue'

defineProps({
    status: String
})
</script>

<template>
        <el-icon v-if="status == 'Alive'" color="green"><InfoFilled /></el-icon>
        <el-icon v-if="status == 'Dead'" color="red"><InfoFilled /></el-icon>
        <el-icon v-if="status == 'unknown'"><InfoFilled /></el-icon>
</template>