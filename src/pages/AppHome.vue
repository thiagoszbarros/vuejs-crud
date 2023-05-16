<script setup lang="ts">
</script>

<template>
    <div class="content">
        <header>

        </header>
        <main>

        </main>
    </div>
</template>

<style scoped>
.content {
    display: grid;
    grid-template-rows: 100px 1fr;
    grid-template-columns: 1fr;
    height: 100vh;
}

header {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    width: 100vw;
    background-color: cadetblue;
}

main {
    grid-row: 2 / -1;
    grid-column: 1 / -1;
    background-color: #eee;
}
</style>
