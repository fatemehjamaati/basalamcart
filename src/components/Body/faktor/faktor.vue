<template>
  <div>
    <div class="continue">
      <div class="a1">
        <button class="button3">ادامه خرید فقط از این غرفه</button>
      </div>
      <div class="a2">
        <p>جمع مبلغ برای {{ faktor.count }} کالا</p>
        <p class="p1">{{faktor.totalPrice.toLocaleString()}} تومان</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    faktor: {
      type: Object,
      require: true,
    },
  },
  mounted() {
    this.$store.getters.sumproduct;
  },
};
</script>

<style src="@/components/Body/faktor/faktor.css">
</style>