<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Nav -->
  <nav class="flex items-center justify-between rounded-2xl bg-blue py-15 px-30 text-white text-xl">
    <a href="/">
      <h1>Vue3 幼幼班</h1>
    </a>
    <ul class="flex items-center gap-5">
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/news">News</RouterLink></li>
      <li><RouterLink to="/products">Product</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
    <!--       <div class="menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </div> -->
  </nav>
</template>

<style lang="scss" scoped>
nav {
  .menu-btn {
    display: flex;
    flex-direction: column;
    width: 30px;
    height: 16px;
    gap: 5px;
    span {
      width: 100%;
      height: 2px;
      background-color: #fff;
    }
  }
}
</style>
