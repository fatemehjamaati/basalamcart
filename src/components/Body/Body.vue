<template>
  <div>
    <nav2/> 
    <vendor :mydata="dataa" v-for="dataa in info" :key="dataa"/>
    <buttomfixed/>
  </div>
</template>


<script>
import nav2 from "@/components/Body/navigation/nav.vue";
import vendor from "@/components/Body/vendor/vendor.vue";
import buttomfixed from "@/components/Body/buttomfixed/buttomfixed.vue";


export default {
  components: {
    nav2,
    vendor,
    buttomfixed
    
  },

  data() {
    return {
      info: {
        vendor1: {
          storename: "خوشمزه های خاتون",

          user: {
          username: "مینو همگام",
          city: "سعادت شهر",
          },

          product: {
            product1:{
            productname: "سوسیس آلمانی پنیری",
            productimg:require( "@/assets/image/image 1.svg"),
            price: "۸۵۰۰۰",
            afterprice:"۷۵۰۰۰"
            },
            product2:{
            productname: "کالباس پسته",
            productimg: require( "@/assets/image/image 1.svg"),
            price: "۸۵۰۰۰",
            afterprice:"۷۵۰۰۰"
            }
            
          },
          
          encouragement:{
            encouragement1:"هورا ارسال از این غرفه برای شما",
            encouragement2:"رایگان شد"
          },
          faktor:{
            faktor1:"۲",
            faktor2:"۸۵۰۰۰"
          }

        },
         vendor2: {
          storename: "محصولات غذایی ولیک",

          user: {
          username: "سارا خوشدل",
          city: "بوشهر",
          },

          product: {
            product1:{
            productname: "سوسیس آلمانی پنیری",
            productimg: require( "@/assets/image/image 1.svg") ,
            price: "۸۵۰۰۰",
            afterprice:"۷۵۰۰۰"
            },
            
            
          },
          
          encouragement:{
            encouragement1:"برای ارسال رایگان :",
            encouragement2:"رایگان شد"
          },
          faktor:{
            faktor1:"۲",
            faktor2:"۸۵۰۰۰"
          }

        },
      
      }
    };
  }
};
</script>
<style scoped src="@/components/Body/Body.css">
</style>