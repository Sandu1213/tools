<template>
    <div>
      <h1>Home</h1>
      <router-link to="/LoanCalculator">go to LoanCalculator</router-link>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import LoanCalculator from '../components/loanCalculator.vue'
  
  export default defineComponent({
    name: 'Home',
    components: {
      LoanCalculator
    }
  });
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
  }
  </style>
  