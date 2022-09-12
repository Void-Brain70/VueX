<template>
    <div class="cart">
      <h1>This is an cart page</h1>
      <CartSection></CartSection>
    </div>
</template>

<script>
import CartSection from '@/components/CartSection.vue';
    
export default {
    name: 'CartView',
    components: {
    CartSection
}
}
</script>