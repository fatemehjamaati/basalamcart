<template>
  <div class="paymentpage">

      <div class="pay">
        <img
          src="@/assets/image/backicon.svg"
          @click="back"
          alt=""
          class="back"
        />
        <span class="add">پرداخت</span>
      </div> 
      
      <div>
        <p>اگر کد تخفیف دارید وارد کنید</p>
         <div class="offbox">
        <input
          class="off"
          type="text"
          placeholder=" کد تخفیف"
          autocomplete="off"
        />
      </div>
      <div class="valid">
      <label class="switch">
          <input type="checkbox">
            <span class="slider round"></span>
        </label>
        <span>استفاده از اعتبار</span>
      </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped src="@/components/PaymentPage/PaymentPage.css">

</style>