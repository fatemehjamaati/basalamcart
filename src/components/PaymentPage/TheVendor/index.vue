<template>
  <div>
      <div class="title">
      <p>ازغرفه:{{name}}</p>
      </div>
      <TheProduct :product="produ" v-for="(produ, index) in vendor.products" :key="index" :produ="produ"/>
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
    },
    name:{
       type:String
    }
  },
//    props:{
//     name:{
//       type:String
//     },

// }
}
</script>

<style scoped src="@/components/PaymentPage/TheVendor/TheVendor.css"/>
