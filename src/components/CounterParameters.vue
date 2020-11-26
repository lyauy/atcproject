<template>
  <div class="container">
    <div class="form">
      <form id="app"
            method="post">
      <p>Choisir le type de valeur indiqué</p>
      <div id="v-model-radiobutton">
        <input type="radio" id="speed" value="speed" v-model="picked" checked>
        <label for="speed">Vitesse</label>
        <br>
        <input type="radio" id="time" value="time" v-model="picked">
        <label for="time">Temps</label>
        <br>
        <span>Choisi : {{ picked }}</span>
      </div>

      <p>
        <label for="numbervalue">Valeur</label>
        <input
            id="numbervalue"
            v-model="numbervalue"
            type="numbervalue"
            name="numbervalue"
        />
        {{ type }}
      </p>
      </form>
    </div>
    <counter
        v-bind:picked="picked"
        v-bind:numbervalue="numbervalue"
    />
  </div>

</template>

<script>
import Counter from "./Counter.vue";

export default {
  name: "CounterParameters",
  components: {Counter},
  data () {
    return {
      picked: 0,
      numbervalue: 0
    }
  },
  computed: {
    type() {
      let unit = ''
      switch(this.picked) {

        case "vitesse":
          unit = "km/h"
          break

        case "temps":
          unit = "seconde"
          break
      }
      return unit
    }
  }
}
</script>


<style scoped>
</style>