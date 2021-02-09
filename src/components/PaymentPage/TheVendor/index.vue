<template>
  <div>
      <div class="title">
      <p>ازغرفه:{{vendor.store.storname}}</p>
      </div>
      <TheProduct :product="produ" v-for="(produ, index) in vendor.product" :key="index" :produ="produ"/>
     

  </div>
</template>

<script>
import TheProduct from "@/components/PaymentPage/TheProduct"
export default {
     components: {
    TheProduct,
    
  },
    props:{
    vendor:{
      type:Object
    }
  },
//   computed:{
//   data(){
//     return this.$store.state.data
//   }
// }

}
</script>

<style scoped src="@/components/PaymentPage/TheVendor/TheVendor.css">

</style>