<template>
  <div id="app">
    <Header />
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Nav from "@/components/Navigation";
import axios from "axios";
export default {
  name: "App",
  components: {
    Header,
    Nav,
  },
  async beforeCreate() {
    const response = await axios.get("https://minimal-cart.herokuapp.com/cart");
    this.$store.dispatch("inseretData", response.data.vendors);
  },
};
</script>

<style scoped src="@/assets/css/boot.css"/>


