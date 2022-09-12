<template>
    <div class="navbar">
        <div class="title">
            <router-link class="text" to="/"><h1>Gift-Land</h1></router-link>
        </div>
        <div class="navsection"> 
            <ul>
                <router-link class="home" to="/" ><li>Home</li></router-link>
                <router-link class="about" to="/about" ><li>About</li></router-link>
                <router-link class="cart" to="/cart" ><li>Cart</li></router-link>
                <router-link class="login" to="/login" ><li>Login</li></router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    name: "NavBar",
}    
</script>

<style scoped>

</style>