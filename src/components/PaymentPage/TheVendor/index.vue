<template>
  <div>
    <div class="title">
      <p>ازغرفه:</p>
      <span class="vendor">{{vendor.name}}</span>
    </div>
    <TheProduct
      :product="produ"
      v-for="(produ, index) in vendor.products"
      :key="index"
      :produ="produ"
    />
  </div>
</template>

<script>
import TheProduct from "@/components/PaymentPage/TheProduct";
export default {
  components: {
    TheProduct,
  },
  props: {
    vendor: {
      type: Object,
    },
  },
};
</script>
<style scoped src="@/components/PaymentPage/TheVendor/TheVendor.css"/>
