<template>
  <div>
    <div class="continue">
      <div class="a1">
        <button class="button3">ادامه خرید فقط از این غرفه</button>
      </div>
      <div class="a2">
        <p>جمع مبلغ برای {{productcount}} کالا</p>
        <p class="p1">{{factor}} تومان</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    factor: {
      type: Number,
      require: true,
    },
    productcount: {
      type: Number,
    },
  },
};
</script>

<style scoped src="@/components/Body/factor/factor.css"/>