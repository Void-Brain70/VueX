<template>
    <div class="cart">
      {{ caart }}
      <!-- <div class="cartview" v-for="i in cart" :key="i">
        {{ i }}
      </div> -->
      <h1>This is an cart page</h1>
      <CartSection></CartSection>
    </div>
</template>

<script>
import CartSection from '@/components/CartSection.vue';
    
export default {
    name: 'CartView',
    components: {
    CartSection,
  },
  data(){
    return {
      caart: this.$store.state.cart
    }
  }
}
</script>