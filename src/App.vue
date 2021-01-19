<template>
  <div id="app">
    
    <Header />
    <Body/>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Body from  '@/components/Body/Body.vue';

export default {
  name: 'App',
  components: {
    Header, Body
  }
}
</script>
<style scoped src="@/assets/css/boot.css">


</style>

