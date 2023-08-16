<script setup lang="ts">
import { Ref, ref } from 'vue'
import { useAnimal } from '../store/animal.store';

defineProps<{ msg: string }>()

const animal = useAnimal()
animal.name = animal.changename("Kancil")
const count:Ref<number> = ref(0)
</script>

<template>
  <div>
    <div class="flex justify-center">
      <button class="border border-sky-500 w-[100px] rounded-md	bg-stone-600 text-white" type="button" @click="count++">count is {{ count }}</button>
    </div>
    <div class="flex justify-center">
      <h1 class="text-3xl font-bold underline">{{animal.name}}</h1>
    </div>
  </div>
</template>
