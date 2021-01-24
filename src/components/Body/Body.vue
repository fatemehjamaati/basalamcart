<template>
  <div>
    <nav2 />
    <vendor :mydata="dataa" v-for="(dataa, index) in myJson" :key="index" />
    <buttomfixed />
  </div>
</template>


<script>
import nav2 from "@/components/Body/navigation/nav.vue";
import vendor from "@/components/Body/vendor/vendor.vue";
import buttomfixed from "@/components/Body/buttomfixed/buttomfixed.vue";
import mydata2 from "@/components/Body/mydata.json";
export default {
  components: {
    nav2,
    vendor,
    buttomfixed,
  },
  data() {
    return {
      myJson:mydata2
    }
  }
}
</script>
<style scoped src="@/components/Body/Body.css"/>