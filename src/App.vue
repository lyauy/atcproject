<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Start</router-link> |
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
