<script setup>
import { RouterView } from 'vue-router'
import '@/assets/global.css'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import { onBeforeMount } from 'vue'
import { useMainStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { apiGetProducts, apiGetBanner } from '@/lib/apiInstance'

const mainStore = useMainStore()
const { banners, products } = storeToRefs(mainStore)

onBeforeMount(() => {
  apiGetBanner().then((res) => {
    banners.value = res.data
  })
  apiGetProducts().then((res) => {
    products.value = res.data
  })
})
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    <AppNavbar />
  </header>
  <main>
    <Transition>
      <RouterView />
    </Transition>
  </main>
  <AppFooter />
</template>

<style scoped></style>
