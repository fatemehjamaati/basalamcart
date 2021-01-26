<template>
  <div class="continue c1">
    <div>
      <button class="button3 button4">ادامه خرید از دو غرفه</button>
    </div>
    <div class="a2">
      <p class="p4">مبلغ قابل پرداخت برای ۱ کالا</p>
      <p class="p1">{{total}} <span>تومان</span></p>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    total(){
      return this.$store.getters.total
    }
  }
};
</script>

<style src="@/components/Body/buttomfixed/buttomfixed.css">
</style>