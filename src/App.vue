<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/counterparameters">Start</router-link> |
      <router-link to="/counterdatas">Datas</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
