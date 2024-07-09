<script setup>
import { RouterLink, RouterView } from 'vue-router'
document.title = 'Aula de responsividade'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Página Inicial</RouterLink>
        <RouterLink to="/about"></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
