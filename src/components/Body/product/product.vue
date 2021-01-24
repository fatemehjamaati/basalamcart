<template>
  <div>
    <div class="food">
      <div><img :src="product.productimg" /></div>
      <div class="text-of-food">
        <div>
          <span class="foodname">{{ product.productname }}</span>
        </div>
        <div class="price">
          <span class="del">{{ product.price }}</span> &#160;{{
            product.afterprice
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
          />
        </button>
        <div class="number-of-food">{{ product.count }}</div>

        <button class="minibtn">
          <img
            src="@/assets/image/pelus.svg"
            @click.prevent="incrementCounter"
          />
        </button>
        <button class="minibtn delete">
          <img src="@/assets/image/Button.svg" />
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
 
  methods: {
    incrementCounter() {
      this.$store.dispatch('incrementCounter',this.product.id)
      
    },
    decrementCounter () {
      this.$store.dispatch('decrementCounter',this.product.id)
    }
}}
</script>

<style src="@/components/Body/product/product.css"/>