<template>
  <div>
    <div class="food">
      <div>
        <img class="pruductimg" :src="product.image.url" />
      </div>
      <div class="text-of-food">
        <div>
          <span class="foodname">{{ product.name }}</span>
        </div>
        <div class="price">
          <span class="del">{{ product.primaryPrice*product.count }}</span>
          &#160;{{
          product.price*product.count
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
        <div class="underline">
          <span>ذخیره در لیست خرید بعدی</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      require: true,
    },
  },

  data() {
    return {
      myTime: null,
      myTimeDec: null,
      sTimer: 400,
    };
  },

  methods: {
    incrementCounter() {
      this.$store.dispatch("incrementCounter", this.product.id);
      this.$store.getters.sumproduct;
    },
    decrementCounter() {
      this.$store.dispatch("decrementCounter", this.product.id);
      this.$store.getters.sumproduct;
    },
    deleteItem() {
      this.$store.dispatch("deleteItem", this.product.id);
    },
    onmousDown() {
      this.myTime = setInterval(() => {
        if (this.sTimer >= 40) this.sTimer = this.sTimer * 0.7;
        if (this.product.count < this.product.stock) this.product.count += 1;
      }, this.sTimer);
    },
    onmoueUp() {
      clearInterval(this.myTime);
    },
    onmousDownDec() {
      this.myTimeDec = setInterval(() => {
        if (this.sTimer >= 40) this.sTimer = this.sTimer * 0.7;
        if (this.product.count > 1) this.product.count -= 1;
      }, this.sTimer);
    },
    onmoueUpDec() {
      clearInterval(this.myTimeDec);
    },
  },
};
</script>

<style src="@/components/Body/product/product.css"/>