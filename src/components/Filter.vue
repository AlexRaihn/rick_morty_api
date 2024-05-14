<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ArrowDown, Search } from '@element-plus/icons-vue'
import { Character } from '../store/character_api/index'

const dropdownContent = [
    {
        value: '',
        content: 'Все'
    },
    {
        value: 'unknown',
        content: 'Неизвестно'
    },
    {
        value: 'Dead',
        content: 'Мёртв'
    },
    {
        value: 'Alive',
        content: 'Жив'
    },
]

const nameCharacter = ref()

const filterStatus = ref(dropdownContent[0])

// выбор статуса для фильтра поиска
const changeStatus = (newFilter: any) => {
    filterStatus.value = newFilter
}

// запрос на поиск с новыми фильтрами
const getCharacterFilter = async (name: String, status: String) => {
    const filter = {
        name: name,
        status: status
    };
    Character.filter = filter
    await Character.getCards()
}

// Сброс фильтров
const dropFilter = async() => {
    Character.filter.name = ''
    Character.filter.status = ''
    filterStatus.value = dropdownContent[0]
    await Character.getCards()
}
</script>

<template>
    <div class="filter_content">
        <div class="filter_item">
            <el-input style="width: 240px" v-model="nameCharacter" placeholder="Введите имя персонажа" :prefix-icon="Search" />
        </div>

        <div class="filter_item">
            <el-dropdown>
            <el-button type="success">
                {{ filterStatus.content }}
                <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                <el-dropdown-item v-for="item in dropdownContent" @click="changeStatus(item)">{{ item.content }}</el-dropdown-item>
                </el-dropdown-menu>
            </template>
            </el-dropdown>
        </div>

        <div class="filter_item">
            <el-button type="success" @click="getCharacterFilter(nameCharacter, filterStatus.value)">Поиск</el-button>
        </div>

        <div class="filter_item">
            <el-button type="danger" @click="dropFilter">Сбросить</el-button>
        </div>
    </div>
</template>

<style scoped>
.filter_content {
    margin: 2%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.filter_item{
    margin: 15px;
}
</style>