<script setup lang="ts">
import {onMounted, computed, ref} from 'vue'
import { Character } from '../store/character_api/index'
import CharacterCard from '@/components/CharacterCard.vue'
import draggable from 'vuedraggable'
import Modal from './Modal.vue'

// подгрузка данных, по выбору новой страницы 
const getCardsOnPagination = async (event: number) => {
    await Character.getCards(event)
    window.scrollY = 0
}

const dragItems = computed(() => {
  return {
    animation: 200,
    group: '1',
    disabled: false,
    ghostClass: 'ghost_cards'
  }
})

const onOpen = ref(false)
const changedItem = ref()

const loadModal = (element: Object) => {
    changedItem.value = element
    onOpen.value = true
}

onMounted(async () => {
    await Character.getCards()
})
</script>

<template>
    <div>
        <Modal v-model:dialogVisible="onOpen" :item="changedItem"/>
        <draggable v-model="Character.state.data" v-bind="dragItems" tag="div" item-key="id" class="characters_cont">
            <template #item="{element}">
                <CharacterCard :name="element.name" :image="element.image" :status="element.status" @click="loadModal(element)"/>
            </template>
        </draggable>
        <div class="pagination_cont">
            <el-pagination
                :page-count="Character.state.pages"	
                layout="prev, pager, next"
                :total="Character.state.count"
                @change="getCardsOnPagination($event)"
            />
        </div>
    </div>
</template>

<style scoped>
.characters_cont{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
}
.ghost_cards{
    padding-top: 1%;
    padding-bottom: 1%;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    background-color: #c9e4ff;
}
.pagination_cont{
    margin-top: 3%;
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>