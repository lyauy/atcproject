<template>
  <form
      id="count"
      @submit="validation"
      action="/counting"
      method="post"
      novalidate="true"
  >
    <p>Choisir le type de valeur indiqué</p>
    <div id="v-model-radiobutton">
      <input type="radio" id="distance" value="distance" v-model="picked" checked>
      <label for="distance">Distance</label>
      <br>
      <input type="radio" id="speed" value="speed" v-model="picked">
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
          value="{{ numbervalue }}"
      >
      {{ type }}
    </p>

    <p>
      <input
          type="submit"
          value="Submit"
          @click.stop.prevent="submit()"
      >
    </p>
  </form>
</template>

<script>


export default {
  name: "CounterParameters",
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
        case "distance":
          unit = "km"
          break

        case "vitesse":
          unit = "km/h"
          break

        case "temps":
          unit = "heure | minute | seconde"
          break
      }
      return unit
    }
  },
  methods: {
    submit() {
      let data = [
        {
          "picked": this.picked,
          "numbervalue": this.numbervalue
        }
      ]
      this.$router.push("/counting")
      this.$emit("picked", data)
    }
  }
}
</script>

<style scoped>

</style>