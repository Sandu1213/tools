<template>
    <div>
      <h1>LoanCalculator</h1>
      <LoanCalculator />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import LoanCalculator from '../components/loanCalculator.vue'
  
  export default defineComponent({
    name: 'LoanCalculator',
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
  