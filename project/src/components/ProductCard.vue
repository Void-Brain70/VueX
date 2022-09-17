<template>
    <div>
        <div class="title" >
        <h3>{{ product.title }}</h3>
    </div>
    <img class="img" :src="product.image" alt=" "/> 
    <div class="content">
        <p class="des">{{ product.description }}</p>
        <p class="cat">Category: {{ product.category }}</p>
        <p class="rating">Rating: {{ product.rating.rate}}</p>
        <p class="price">Price: {{ product.price}}</p>
    </div>
    <div class="addcard">
        <button  @click="addTocart(product)"> Add to Cart </button>
    </div>  
    </div>
</template>

<script>
export default {
    props: ['product'],

    data() {
        return {
            cartitems: []
        };
    },
    mounted(){
        // console.log(this.product);

    },


    methods: {
        // addTocart(items){
        //     this.cartitems.push(items)
        //     this.$store.state.cart = [...this.cartitems, items]
        //     console.log(this.cartitems)
        // }
        addTocart(){
            this.$store.dispatch('addItem',this.cartitem)
        }
    }
};

</script>

<style lang="scss" scoped>

</style>