import { defineStore } from 'pinia'
//types
import type { ProducCard, Banner } from '@/types'

interface DataState {
  banners: Banner[]
  products: ProducCard[]
}

export const useMainStore = defineStore({
  id: 'main',
  state: (): DataState => ({
    banners: [],
    products: []
  })
})
