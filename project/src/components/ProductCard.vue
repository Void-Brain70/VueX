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
        <button> Add to Cart </button>
    </div>  
    </div>
</template>

<script>
export default {
    props: ['product'],

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>