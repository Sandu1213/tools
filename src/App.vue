<template>
  <div id="app">
    <div class="language-selector">
        <label for="language">Language:</label>
        <select id="language" v-model="$i18n.locale">
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
    </div>
    <div class="content">
      <!-- <router-view></router-view> -->
      <LoanCalculator />
    </div>
  </div>
</template>

<script>
import LoanCalculator from './components/loanCalculator.vue';

export default {
  // name: 'App'
  name: 'App',
  components: {
    LoanCalculator
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* .language-selector {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
} */

.header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}

.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 10px;
}

.sidebar a {
  display: block;
  padding: 5px 0;
  color: #333;
  text-decoration: none;
}

.sidebar a:hover {
  background-color: #ddd;
}

.content {
  flex-grow: 1;
  padding: 20px;
}
</style>