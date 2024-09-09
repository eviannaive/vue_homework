import { defineStore } from 'pinia'
//types
import type { ProductCard, Banner } from '@/types'

interface DataState {
  banners: Banner[]
  products: ProductCard[]
}

export const useMainStore = defineStore({
  id: 'main',
  state: (): DataState => ({
    banners: [],
    products: []
  })
})
