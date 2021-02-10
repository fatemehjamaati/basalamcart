<template>
  <div v-if="mydata.products.length!=0">
    <store :name="mydata.name" :owner="mydata.owner" :logo="mydata.logo.url" :city="mydata.city" />
    <product :product="produ" v-for="(produ, index) in mydata.products" :key="index" />
    <encouragement :encouragement="mydata.encouragement" />
    <offCode />
    <factor :factor="mydata.factor" />
  </div>
</template>

<script>
import store from "@/components/Body/store/store.vue";
import product from "@/components/Body/product/product.vue";
import encouragement from "@/components/Body/encouragement/encouragement.vue";
import factor from "@/components/Body/factor/factor.vue";
import offCode from "@/components/Body/off-code/off-code.vue";

export default {
  components: {
    store,
    product,
    encouragement,
    factor,
    offCode,
  },
  props: {
    mydata: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style/>
