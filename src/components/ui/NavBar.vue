<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav style="display: flex; gap: 24px">
        <RouterLink to="/">Página Inicial</RouterLink>
        <RouterLink to="/videos">Videos</RouterLink>
        <RouterLink to="/tabela">Tabela</RouterLink>
        <RouterLink to="/imagens">Imagens</RouterLink>
        <RouterLink to="/lazy">Lazy Loading</RouterLink>
      </nav>
    </div>
  </header>
</template>
