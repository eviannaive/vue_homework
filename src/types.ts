interface ProductCard {
  description: string
  id: number
  imgUrl: string
  price: number
  title: string
}

interface Banner {
  id: number
  imgUrl: string
}

export type { ProductCard, Banner }
