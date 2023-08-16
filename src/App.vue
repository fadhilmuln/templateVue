<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <div class="h-[100vh]">
      <div class="flex justify-center items-center">
        <router-link class="mx-3" to="/">Greating</router-link>
        <router-link class="mx-3" to="/home">Home</router-link>
      </div>
      <div class="flex justify-center items-center">
        <!-- <HelloWorld msg="Hello World" /> -->
        <router-view></router-view>
      </div>
    </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
