<template>
  <div>
    <vendor :mydata="dataa" v-for="(dataa, index) in data" :key="index" />
    <buttomfixed />
  </div>
</template>

<script>
import vendor from "@/components/Body/vendor/vendor.vue";
import buttomfixed from "@/components/Body/buttomfixed/buttomfixed.vue";
export default {
  components: {
    vendor,
    buttomfixed,
  },
  computed: {
    data() {
      return this.$store.getters.data;
    },
  },
};
</script>

<style scoped src="@/components/Body/Body.css"/>