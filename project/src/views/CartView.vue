<template>
<div class="cart">  
 <div class="cartview" v-for="i in caart" :key="i.index">  
  <div>
      <div class="title" >
      <h3>{{ i.title }}</h3>
      </div>
  </div>
  <img class="img" :src="i.image" alt=" "/> 
  <div class="content">
      <p class="des">{{ i.description }}</p>
      <p class="cat">Category: {{ i.category }}</p>
      <p class="rating">Rating: {{ i.rating.rate}}</p>
      <p class="price">Price: {{ i.price}}</p>
  </div>
  </div>  
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