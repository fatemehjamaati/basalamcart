<template>
  <div class="food">
    <div>
      <img class="productimg" :src="product.image.url" />
    </div>
    <div class="text-of-food">
      <div class="foodinfo">
        <span class="foodname">{{ product.name }}</span>
        <span class="foodnum">2 عدد</span>
      </div>
      <div class="price">
        <span class="del">{{ product.primaryPrice*product.count }}</span>
        &#160;{{product.price*product.count}}تومان
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped src="@/components/PaymentPage/TheProduct/TheProduct.css"/>

