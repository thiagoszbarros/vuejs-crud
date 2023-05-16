<script setup lang="ts">
import AppHome from './pages/AppHome.vue';
import http from './services/http';

http.get('/api/users')

</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
