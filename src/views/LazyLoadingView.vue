<script setup lang="ts">
import Image from '@/components/Image.vue'
</script>

<template>
  <h1>Lazy Loading Test - Cafeteria Express!</h1>
  <div style="width: 100%; padding-bottom: 2rem">
    <Image src="/assets/images/cafe.jpg" alt="Cafeteria Express" loading="lazy"></Image>
    <Image src="/assets/images/cafe2.jpg" alt="Cafeteria Express" loading="lazy"></Image>
  </div>
</template>

<style scoped>
img {
  width: calc(50% - 4vw);
}
</style>
