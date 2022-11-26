<template>
  <div>
    <LoginVue />
    <!-- <HomeVue /> -->
  </div>
</template>

<script>
import LoginVue from './components/Login.vue';
import HomeVue from './components/Home.vue';
export default {
  components: {
    LoginVue,
    HomeVue,
  }
  
}
</script>