<template>
<div>
  
        <div class="continue">
            <div class="a1">
                <button class="button3">
          ادامه خرید فقط از این غرفه
        </button>
            </div>
            <div class="a2">
                <p>جمع مبلغ برای {{faktor.faktor1}} کالا</p>
                <p class="p1">{{faktor.faktor2}} تومان</p>
            </div>
        </div>
</div>
</template>

<script>
export default {
     props:['faktor']

}
</script>

<style src="@/components/Body/faktor/faktor.css">

</style>