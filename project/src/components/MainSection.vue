<template>
    <div class="products">
        <h1>Products</h1>
        <div class="productRating">
            <button @click="sortLowest">Least Rated</button>
            <button @click="sortHighest">Most Rated</button>
        </div>
        <div class="productPrice">
            <button @click="priceFilter(501, 1000)">High Range</button>
            <button @click="priceFilter(100,500)">Middle Range</button>
            <button @click="priceFilter(0,99)">Low Range</button>
        </div>
        
        <div class="card"  v-if="filterPrice.length === 0 && ratingProduct.length === 0" >
            <div class="productcard" v-for="product in products" :key="product.id">
                <ProductCard :product="product" />
            </div>
        </div>
        <div class="card"  v-if="ratingProduct.length != 0" >
            <div class="productcard" v-for="product in ratingProduct" :key="product.id">
                <ProductCard :product="product" />
            </div>
        </div>
        <div class="card"  v-if="filterPrice.length != 0" >
            <div class="productcard" v-for="product in filterPrice" :key="product.id">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>
    
<script>
import ProductCard from './ProductCard.vue';
    export default{
    name: "MainSection",
    data() {
        return {
            products: [],
            filterPrice: [],
            ratingProduct:[]
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            let dataUrl = "https://fakestoreapi.com/products";
            await this.axios.get(dataUrl).then(response => {
                this.products = response.data;
                // console.log(response.data); 
            });
        },
        sortLowest() {
            this.ratingProduct = [...this.products].sort((a, b) => a.rating.rate > b.rating.rate ? 1 : -1);
        },
        sortHighest() {
            this.ratingProduct = [...this.products].sort((a, b) => a.rating.rate < b.rating.rate ? 1 : -1);
        },
        priceFilter(value1,value2) {
            this.ratingProduct = [];
            this.filterPrice = [];
            this.filterPrice = this.products.filter((el) => {
                if( el.price >= value1 && el.price <= value2 ){
                    return el;
                }
            });
        },
    },
    components: { ProductCard }
};
</script>
    
<style scoped>
    
</style>