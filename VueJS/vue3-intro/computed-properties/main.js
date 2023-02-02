const app = Vue.createApp({
   data() {
      return {
      selectedVariant: 0,
         cart: 0,
         product: 'Socks',
         brand: 'Vue Mastery',
         details: ['50% cotton', '30% wool', '20% polyester'],
         onSale: false,
         variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
         ]
      }
   },
   methods: {
      addToCart() {
         this.cart += 1
      },
      updateImage(variantImage) {
         this.image = variantImage
      },
      updateVariant(index){
         this.selectedVariant = index;
      }
   },
   computed: {
      title(){
         return this.brand + ' ' + this.product
      },
      image(){
         return this.variants[this.selectedVariant].image
      },
      inStock(){ //0 is considered false in js along with null, undefined, NAAAAAAAAAAN, "", false
         return this.variants[this.selectedVariant].quantity
      },
      onSale(){
         return this.onSale
      },
   }
})