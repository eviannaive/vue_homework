<script setup lang="ts">
import type { ProductCard as ProductCardType } from '@/types'

const props = defineProps<{ data: ProductCardType; addCart: (product: ProductCardType) => void }>()
</script>

<template>
  <!-- Card -->
  <div class="bg-yellow rounded-[10px] p-5">
    <div class="w-full aspect-square rounded-[5px] overflow-hidden">
      <img :src="data.imgUrl" alt="" class="w-full h-full object-cover" />
    </div>
    <div class="flex flex-col text-black pt-10 px-5 pb-5 rounded-[10px]">
      <h3 class="title">{{ data.title }}</h3>
      <p class="mt-10">{{ data.description }}</p>
      <div class="text-blue-light text-xl mt-10">{{ data.price }}</div>
      <div
        class="add-cart bg-pink rounded-5 py-2 px-[6px] m-0 mt-10 ml-auto cursor-pointer"
        @click="
          () => {
            addCart(data)
          }
        "
      >
        加入購物車
      </div>
    </div>
  </div>
</template>

<!-- <style lang="scss" scoped>
.card {
  width: calc((100% - 40px) / 3);
  background-color: #fbedca;
  border-radius: 10px;
  padding: 5px;
  .card-top {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .card-bottom {
    display: flex;
    flex-direction: column;
    color: #404040;
    padding: 10px 5px 5px;
    border-radius: 10px;
    p {
      margin-top: 10px;
    }
    .price {
      color: #78a5bc;
      font-size: 20px;
      margin-top: 10px;
    }
    .add-cart {
      color: #404040;
      background-color: #fcbfc7;
      border-radius: 5px;
      padding: 8px 6px;
      margin: 10px 0 0 auto;
      cursor: pointer;
    }
  }
}
</style> -->
