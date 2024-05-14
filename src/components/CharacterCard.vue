<script setup>
import { defineProps } from 'vue'
import StatusIcon from '@/components/StatusIcon.vue'

const props = defineProps({
    name: String,
    image: String,
    status: String
})
</script>

<template>
        <el-card style="max-width: 300px" class="card_cont">
            <template #header>
                {{ name }}
                <StatusIcon :status="status"/>
            </template>
            <img
            :src="image"
            style="width: 30%"
            />
        </el-card>
</template>

<style scoped>
.card_cont {
    margin: 5px;
}
.card_cont:hover{
    cursor: all-scroll;
}
</style>