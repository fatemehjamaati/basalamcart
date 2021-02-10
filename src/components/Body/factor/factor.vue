<template>
  <div>
    <div class="continue">
      <div class="a1">
        <button class="button3">ادامه خرید فقط از این غرفه</button>
      </div>
      <div class="a2">
        <p>جمع مبلغ برای 1 کالا</p>
        <p class="p1">{{sumproduct}} تومان</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    factor: {
      type: Object,
      require: true,
    },
  },
  computed: {
    sumproduct() {
      return this.$store.getters.sumproduct;
    },
  },
  // created() {
  //   console.log(this.$store.getters.sumproduct);
  // },
};
</script>

<style scoped src="@/components/Body/factor/factor.css"/>