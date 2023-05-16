<script setup lang="ts">
import { reactive } from "vue";
import AutenticacaoService from '../services/autenticacao-service'

const credenciais = reactive({
    email: '',
    password: '',
})

function logar() {
    AutenticacaoService.login(credenciais)
}

</script>

<template>
    <div class="content">
        <form @submit.prevent="logar">
            <label for="email">Email</label>
            <input v-model="credenciais.email" type="text">
            <label for="password">Senha</label>
            <input v-model="credenciais.password" type="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<style></style>