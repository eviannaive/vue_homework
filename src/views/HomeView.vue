<script setup lang="ts">
import { ref } from 'vue'

// import axios from 'axios'
import MainSlider from '@/components/MainSlider.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useMainStore } from '@/stores'
import { storeToRefs } from 'pinia'

const alerts = ref<String[]>([])

//types
import type { ProducCard } from '@/types'

const mainStore = useMainStore()
const { banners, products } = storeToRefs(mainStore)

// 加入購物車
const addCart = (product: ProducCard) => {
  console.log(`您已將 ${product.title} 商品加入購物車`)
  alerts.value.push(`您已將 ${product.title} 商品加入購物車`)
  setTimeout(() => {
    alerts.value.shift()
  }, 3000)
}
</script>

<template>
  <div>
    <div class="alert-contain text-white">
      <TransitionGroup name="alert" tag="div">
        <template v-for="item in alerts" :key="item">
          <div class="message-item">{{ item }}</div>
        </template>
      </TransitionGroup>
    </div>

    <section class="banner">
      <MainSlider :data="banners" />
    </section>
    <TransitionGroup class="py-30" tag="section">
      <h2 class="mb-30">Products</h2>
      <div class="w-[min(85%,800px)] mx-auto">
        <div class="grid grid-cols-3 gap-[20px]">
          <ProductCard v-for="item in products" :key="item.id" :data="item" :add-cart="addCart" />
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
.alert-contain {
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 10;
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .message-item {
    font-size: 18px;
    padding: 12px 15px;
    border-radius: 10px;
    background-color: #f8bdc5;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
.alert-enter-active,
.alert-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}
.alert-enter-from,
.alert-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.banner {
  padding: 10px 0;
}
/* .product {
  padding: 30px 0;
  h2 {
    color: #404040;
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
  }
  .container {
    width: min(85%, 800px);
    margin: 0 auto;
  }
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
} */
</style>
