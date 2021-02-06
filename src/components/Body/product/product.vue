<template>
  <div>
    <div class="food">
      <div><img :src="product.productimg" /></div>
      <div class="text-of-food">
        <div>
          <span class="foodname">{{ product.productname }}</span>
        </div>
        <div class="price">
          <span class="del">{{ product.price*product.count }}</span> &#160;{{
            product.afterprice*product.count
          }}
          تومان
        </div>
      </div>
    </div>

    <div class="pm">
      <div class="icons">
        <button class="minibtn mines">
          <img
            src="@/assets/image/menha.svg"
            @click.prevent="decrementCounter"
            @mousedown="onmousDownDec"
            @mouseup="onmoueUpDec"
          />
        </button>
        <div class="number-of-food">{{ product.count }}</div>

        <button class="minibtn">
          <img
            src="@/assets/image/pelus.svg"
            @click.prevent="incrementCounter"
            @mousedown="onmousDown"
            @mouseup="onmoueUp"
          />
        </button>
        <button class="minibtn delete">
          <img src="@/assets/image/Button.svg" @click.prevent="deleteItem" />
        </button>
      </div>
      <div class="saving">
        <p class="underline">ذخیره در لیست خرید بعدی</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
    myTime: null,
    myTimeDec: null,
    sTimer:400,
    }
  },
  
  methods: {
    
    incrementCounter() {
      this.$store.dispatch("incrementCounter", this.product.id);
      this.$store.getters.sumproduct
    },
    decrementCounter() {
      this.$store.dispatch("decrementCounter", this.product.id);
      this.$store.getters.sumproduct
    },
    deleteItem() {
      this.$store.dispatch("deleteItem", this.product.id);
    },
    onmousDown() {
     
      this.myTime = setInterval(() => {
        if (this.sTimer >= 40) this.sTimer = this.sTimer*0.7;
        this.product.count+=1
      }, this.sTimer);
    },
    onmoueUp() {
      clearInterval(this.myTime);
    },
    onmousDownDec() {
    
      this.myTimeDec = setInterval(() => {
        if (this.sTimer >= 40) this.sTimer = this.sTimer*0.7;
        if (this.product.count >1) this.product.count -= 1;
      }, this.sTimer);
    },
    onmoueUpDec() {
      clearInterval(this.myTimeDec);
    },
  },
};
</script>

<style src="@/components/Body/product/product.css"/>