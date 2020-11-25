<template>
  <p @picked="getData"></p>
</template>

<script>
export default {
  name: "Counting",
  methods:{
    getData(payload) {
      console.log(payload)
    }
  }
}

</script>

<style scoped>
</style>