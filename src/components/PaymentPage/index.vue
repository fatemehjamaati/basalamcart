<template>
  <div class="paymentpage">
    <div class="pay">
      <img src="@/assets/image/backicon.svg" @click="back" alt class="back" />
      <span class="add">پرداخت</span>
    </div>

    <div>
      <p class="par">اگر کد تخفیف دارید وارد کنید</p>
      <div class="offbox">
        <input class="off" type="text" placeholder=" کد تخفیف" autocomplete="off" />
        <button class="ok">تایید</button>
      </div>

      <div class="valid">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <span class="span1">استفاده از اعتبار</span>
      </div>

      <div>
        <p class="par1">انتخاب درگاه پرداخت</p>
        <div class="bank">
          <div class="radio">
            <input type="radio" id="input2" class="input" name="radio" />
            <span class="checkmark"></span>
            <label for="input2">بانک سامان</label>
          </div>

          <div class="radio">
            <input type="radio" id="input2" class="input" name="radio" />
            <span class="checkmark"></span>
            <label for="input2">بانک پاسارگاد</label>
          </div>
          <div class="radio">
            <input type="radio" id="input2" class="input" name="radio" />
            <span class="checkmark"></span>
            <label for="input2">آسان پرداخت</label>
          </div>
        </div>
        <p class="par3">خلاصه سفارش</p>
      </div>
      <TheVendor v-for="(vendor,index) in data" :key="index" :vendor="vendor" />
      <div class="paybtn">
        <button class="pay-btn">پرداخت</button>
      </div>
    </div>
  </div>
</template>

<script>
import TheVendor from "@/components/PaymentPage/TheVendor";
export default {
  components: {
    TheVendor,
  },
  methods: {
    back() {
      return this.$router.push({ name: "address" });
    },
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
  },
};
</script>

<style scoped src="@/components/PaymentPage/PaymentPage.css"/>
