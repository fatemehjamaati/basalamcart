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

export default {
  name: "App",
  components: {
    Header,
    Nav,
  },
};
</script>
<style scoped src="@/assets/css/boot.css"/>


