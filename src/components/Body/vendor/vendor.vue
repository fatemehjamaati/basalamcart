<template>
  <div>
    <store :storename="mydata.storename"/>
    <user :user="mydata.user" />
    <product :product="produ" v-for="produ in mydata.product" :key="produ"/>
    
    <encouragement :encouragement="mydata.encouragement"/>
    <offCode v-if='mydata.storename== "خوشمزه های خاتون"'/>
    <faktor :faktor="mydata.faktor"/>
  </div>
</template>

<script>
import store from "@/components/Body/store/store.vue";
import user from "@/components/Body/user/user.vue";
import product from "@/components/Body/product/product.vue";
import encouragement from "@/components/Body/encouragement/encouragement.vue";
import faktor from "@/components/Body/faktor/faktor.vue";
import offCode from "@/components/Body/off-code/off-code.vue";

export default {
  components: {
    store,
    user,
    product,
    encouragement,
    faktor,
    offCode
   
  },
  props:{
    mydata:{
      type: Object,
      required: true
    }

  }

};
</script>

<style>
</style>