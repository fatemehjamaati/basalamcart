<template>
  <div class="continue c1">
    <div>
      <router-link to="/payment">
        <button class="button3 button4">ادامه فرآیند خرید</button>
      </router-link>
    </div>
    <div class="a2">
      <p class="p4">مبلغ قابل پرداخت</p>
      <p class="p1">
        {{ total }}
        <span>تومان</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    total() {
      return this.$store.getters.total;
    },
    totalCount() {
      return this.$store.getters.totalCount;
    },
  },
};
</script>

<style scoped src="@/components/addresspage/FixBuuton/FixButton.css"/>