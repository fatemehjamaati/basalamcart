<template>
  <div class="selectadd">
    <div class="manageadd">
      <div class="address">
        <img
          src="@/assets/image/backicon.svg"
          @click="back"
          alt=""
          class="back"
        />
        <span class="add">آدرس ارسال</span>
      </div>

      <button class="newaddress">
        <img src="@/assets/image/Vector.svg" alt="" class="plus" />آدرس جدید
      </button>
    </div>

    <div class="radio">
      <input type="radio" id="input" class="input" name="radio" checked />
      <span class="checkmark"></span>
      <label for="input"> </label>
      <addressSelecte/>  
    </div>
    <div class="radio">
      <input type="radio" id="input2" class="input" name="radio" />
      <span class="checkmark"></span>
      <label for="input2">
        <addressSelecte/> 
      </label>
    </div>
    <continu/>
  </div>
</template>

<script>
import addressSelecte from "@/components/addresspage/address";
import continu from "@/components/addresspage/FixBuuton";

export default {
  components: {
    addressSelecte,
    continu,
  },
   methods: {
      back() {
        return this.$router.push({ name: "shopcart" });
      },
    },
};
</script>

<style src="@/components/addresspage/addresspage.css">
</style>
