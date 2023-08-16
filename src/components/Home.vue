<script setup lang="ts">
import { useAnimal } from '../store/animal.store';

const animal = useAnimal()
</script>

<template>
    "Hewan {{ animal.name }}"
</template>