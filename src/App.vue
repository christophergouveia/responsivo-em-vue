<script setup>
import { RouterLink, RouterView } from 'vue-router'
document.title = 'Aula de responsividade'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav style="display: flex; gap: 24px">
        <RouterLink to="/">Página Inicial</RouterLink>
        <RouterLink to="/videos">Videos</RouterLink>
        <RouterLink to="/tabela">Tabela</RouterLink>
        <RouterLink to="/imagens">Imagens</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
