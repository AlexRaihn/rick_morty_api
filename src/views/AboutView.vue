<script lang="ts" setup>
import { computed, ref } from 'vue'
import { DArrowRight } from '@element-plus/icons-vue'
import draggable from 'vuedraggable'

const activities = ref([
  {
    id: 1,
    name: 'Element Plus',
    content: 'С помощью него я сделал быстро всю стилизацию проекта',
  },
  {
    id: 2,
    name: 'Vue Draggable',
    content: 'Карточки персонажей, а также эти карточки, можно переносить, благодаря этому плагину',
  },
  {
    id: 3,
    name: 'Vue Router',
    content: 'Добавил разные страницы',
  },
  {
    id: 4,
    name: 'Type Script',
    content: 'На случай если потребуется расширения', 
  },
  {
    id: 5,
    name: 'P.S',
    content: 'Также карточку можно открыть в виде модального окна, где будет подробная информация по персонажу',
  }
])

const dragItems = computed(() => {
  return {
    animation: 200,
    group: '2',
    disabled: false,
    ghostClass: 'ghost_cards'
  }
})
</script>

<template>
  <div class="about">
    <h3>Добро пожаловать на проект Рик и Морти API</h3>
    <p>
      Изначально задача проекта была более простой, нужно было просто отобразить карточки с данными, идущими по API, с фильтрацией и стилизацией.
    </p>
    <p>
      Но когда я приступил за реализацию, мне захотелось немного его украсить.
    </p>
    <p>
      В проект были добавлены:
    </p>
    <draggable tag="el-timeline" v-model="activities" item-key="id" v-bind="dragItems" style="max-width: 600px;">
        <template #item="{element}">
              <el-timeline-item type='success' :icon="DArrowRight" size="large" class="drag_item">
                <el-card>
                  <h4>{{ element.name }}</h4>
                  <p>{{ element.content }}</p>
                </el-card>
              </el-timeline-item>
        </template>
    </draggable>
  </div>
</template>

<style scoped>
.about{
  text-align: left;
}
.drag_item:hover{
  cursor: all-scroll;
}
.ghost_cards{
  background-color: gray;
  color: gray;
}
</style>
