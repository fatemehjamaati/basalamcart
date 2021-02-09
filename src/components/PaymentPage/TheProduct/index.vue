<template>
   
    <div class="food">
     
      <div><img :src="product.productimg" /></div>
      <div class="text-of-food">
        <div class="foodinfo">
          <span class="foodname">{{ product.productname }}</span>
          <span class="foodnum">2 عدد</span>
        </div>
        <div class="price">
          <span class="del">{{ product.price*product.count }}</span> &#160;{{
            product.afterprice*product.count
          }}
          تومان
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: ["product"],
}
</script>

<style scoped src="@/components/PaymentPage/TheProduct/TheProduct.css">

</style>