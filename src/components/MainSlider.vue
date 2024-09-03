<script setup lang="ts">
import type { Banner } from '@/types'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const props = defineProps<{ data: Banner[] }>()
const modules = [Navigation]
</script>

<template>
  <div class="slider-wrapper">
    <swiper
      :modules="modules"
      :navigation="{ enabled: true, prevEl: '.slider-nav.prev', nextEl: '.slider-nav.next' }"
      loop
    >
      <swiper-slide v-for="banner in data" :key="banner.id">
        <div class="img-box">
          <img :src="banner.imgUrl" alt="" />
        </div>
      </swiper-slide>
      <div class="slider-nav prev"></div>
      <div class="slider-nav next"></div>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.slider-wrapper {
  position: relative;
  .slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 60px;
    background-color: rgba(#fff, 0.9);
    cursor: pointer;
    z-index: 1;
    &.prev {
      left: 10px;
      border-radius: 16px 4px 4px 16px;
      box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.5);
      &::before {
        content: '＜';
        color: #000;
        font-weight: bold;
      }
    }
    &.next {
      right: 10px;
      border-radius: 4px 16px 16px 4px;
      box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.5);
      &::before {
        content: '>';
        color: #000;
        font-weight: bold;
      }
    }
  }
  .img-box {
    width: 100%;
    aspect-ratio: 2550/1500;
    background-color: #eee;
    border-radius: 16px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
