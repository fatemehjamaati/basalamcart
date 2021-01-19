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
            onmouseup="onMouseUpEvent()"
            onmousedown="onMouseDownEvent(false,0)"
            onclick="onCounterClickHandler(false,0)"
          />
        </button>
        <div class="number-of-food">1</div>

        <button class="minibtn">
          <img
            src="@/assets/image/pelus.svg"
            onmouseup="onMouseUpEvent()"
            onmousedown="onMouseDownEvent(true,0)"
            onclick="onCounterClickHandler(true,0)"
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
  data() {
    return{
        
    };
  },
  methods: {

  },
};
</script>

<style src="@/components/Body/product/product.css">
</style>