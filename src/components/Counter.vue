<template>
  <div class="container">
    <div class="container-flex">
      <div class="chrono">
        <span>{{ minNum }}</span>
        <div>
          :
        </div>
        <span>{{ secondNum }}</span>
        <div>
          :
        </div>
        <span>{{ tenNum }}</span>
      </div>
    </div>
    <div class="btn-group">
      <button class="start" @click="startHandler">Start</button>
      <button class="stop" @click="stopHandler">Stop</button>
      <button class="reset" @reset="resetHandler">Reset</button>
    </div>
    <div>
      <p>Vitesse actuelle : {{ speed }} m.s</p>
    </div>
    <div id="doeSupported">No</div>
    <div id="doeSupported2">No</div>
    <div id="doeSupported3">No</div>

  </div>
</template>

<script>


let timer;
export default {
  name: "counter",
  props: ['picked', 'numbervalue'],
  data() {
    return {
      tens: 0,     //0~99
      seconds: 0,  //0~59
      mins: 0
    }
  },
  mounted() {
    window.addEventListener('mousemove', function (event) {
      console.log(event);
      document.getElementById('doeSupported').innerHTML = event.screenX
    });

    window.addEventListener('deviceorientation', function (event) {
      console.log(event);
      document.getElementById('doeSupported2').innerHTML = event.alpha
    });

    window.addEventListener('devicemotion', function (event) {
      console.log(event);
      document.getElementById('doeSupported3').innerHTML = event.acceleration.x
    });
  },
  computed: {
    tenNum() {
      if (this.tens <= 9) {
        return `0${this.tens}`
      } else {
        return this.tens
      }
    },
    secondNum() {
      if (this.seconds <= 9) {
        return `0${this.seconds}`
      } else {
        return this.seconds
      }
    },
    minNum() {
      if (this.mins <= 9) {
        return `0${this.mins}`
      } else {
        return this.mins
      }
    },
  },
  methods: {
    startHandler() {
      console.log(this.picked)
      clearInterval(timer);
      timer = setInterval(() => {
        this.addHandler()
      }, 10)
    },
    stopHandler() {
      clearInterval(timer);
    },
    resetHandler() {
      clearInterval(timer);
      this.tens = 0;
      this.seconds = 0;
      this.mins = 0;
    },
    addHandler() {
      //控制 this.tens 和 this.seconds 和 this.mins
      let stockseconds = 0
      this.tens++  //毫秒++
      if (this.tens > 99) {
        stockseconds = this.seconds++
        this.tens = 0;
      }
      if (this.seconds > 60) {
        this.mins++  //當秒數超過60，分++
        this.seconds = 0;
      }
      if (this.picked == "time" && this.numbervalue == stockseconds) {
        this.stopHandler()
      }
    },
    test() {
      window.addEventListener('devicemotion', function (event) {
        return event.acceleration.x
      });
    }
  }
}
</script>


<style scoped>
html,
body {
  padding: 0;
  margin: 0;
  background-color: #0F0F0F;
}

* {
  box-sizing: border-box;
}

.container-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.chrono {
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 65%;
}

input,
label {
  display: none;
}

.container {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 300;
  margin: 60px auto 0;
  width: 90vw;
  min-width: 300px;
  max-width: 400px;
  text-align: center;
}

time {
  font-size: 68px;
  height: 1em;
  line-height: 1em;
  display: inline-block;
  overflow: hidden;
  animation-name: none;
  animation-play-state: paused;
  margin-bottom: 60px;
  color: #fff;
}

time i,
time b {
  float: left;
  font-style: normal;
  font-weight: 100;
  animation-name: inherit;
  animation-play-state: inherit;
}

.btn-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
}

.container > time b {
  height: 1em;
  min-width: 0.3em;
  padding-top: 0.3em;
}

.container > time b::before,
.container > time b::after {
  content: '';
  display: block;
  width: 0.08em;
  height: 0.08em;
  background-color: currentColor;
  border-radius: 100%;
  margin: 0 auto 0.29em;
}

time i::before,
time i::after {
  content: '0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9\A 0';
  white-space: pre;
  animation-name: inherit;
  animation-play-state: inherit;
  animation-iteration-count: infinite;
  animation-timing-function: steps(10);
  float: left;
  margin: 0 0.02em;
}

time i:first-child::before,
time i:nth-of-type(2)::before {
  content: '0\A 1\A 2\A 3\A 4\A 5\A 0';
  animation-timing-function: steps(6);
}

time i:first-child::before {
  animation-duration: 3600s;
}

time i:first-child::after {
  animation-duration: 600s;
}

time i:nth-of-type(2)::before {
  animation-duration: 60s;
}

time i:nth-of-type(2)::after {
  animation-duration: 10s;
}

time i:nth-of-type(3)::before {
  animation-duration: 1s;
}

time i:nth-of-type(3)::after {
  animation-duration: 100ms;
}

.controls {
  position: relative;
  height: 80px;
  margin-bottom: 20px;
}

.controls::before {
  display: none;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  background-color: #0F0F0F;
  opacity: 0.5;
  z-index: 10;
}

label {
  cursor: pointer;
  font-size: 16px;
  border: 2px solid #353535;
  background-color: #353535;
  box-shadow: inset 0 0 0 2px #0F0F0F;
  color: #ccc;
  width: 80px;
  border-radius: 100%;
  text-align: center;
  line-height: 76px;
  position: absolute;
  top: 0;
  left: 0;
}

.start {
  background-color: #182E1C;
  border-color: #182E1C;
  color: #42CC57;
  cursor: pointer;
  font-size: 16px;
  box-shadow: inset 0 0 0 2px #0F0F0F;
  width: 80px;
  border-radius: 100%;
  text-align: center;
  line-height: 76px;
}

.stop {
  background-color: #351614;
  border-color: #351614;
  color: #FF352C;
  cursor: pointer;
  font-size: 16px;
  box-shadow: inset 0 0 0 2px #0F0F0F;
  width: 80px;
  border-radius: 100%;
  text-align: center;
  line-height: 76px;
}

.reset {
  background-color: #351614;
  border-color: #351614;
  color: #FF352C;
  cursor: pointer;
  font-size: 16px;
  box-shadow: inset 0 0 0 2px #0F0F0F;
  width: 80px;
  border-radius: 100%;
  text-align: center;
  line-height: 76px;
}

label[for="start"] {
  background-color: #182E1C;
  border-color: #182E1C;
  color: #42CC57;
}

label[for="stop"] {
  background-color: #351614;
  border-color: #351614;
  color: #FF352C;
}

label[for="start"],
label[for="stop"] {
  right: 0;
  left: auto;
}

.laps {
  counter-reset: laps;
  list-style: none;
  margin: 0;
  padding-left: 0;
  border-top: 1px solid #333;
  font-size: 16px;
}

.laps li {
  color: #666;
  text-align: right;
  position: relative;
  border-bottom: 1px solid #333;
  padding-top: 1em;
  height: 3em;
}

.laps li::before {
  counter-increment: laps;
  content: 'Lap ' counter(laps);
  visibility: hidden;
  color: inherit;
  line-height: 3em;
  position: absolute;
  left: 0;
  top: 0;
}

.laps li time {
  visibility: hidden;
  color: inherit;
  font-size: inherit;
  margin-bottom: 0;
}

.laps li time i,
.laps li time b {
  font-weight: inherit;
  padding-top: 0;
}

.laps li time b::before {
  content: ':';
}

/* Visible control conditions */
#start:checked ~ .controls label[for="stop"],
#start:checked ~ #lap_1:not(:checked) ~ .controls label[for="lap_1"],
#start:checked ~ #lap_1:checked + #lap_2:not(:checked) ~ .controls label[for="lap_2"],
#start:checked ~ #lap_2:checked + #lap_3:not(:checked) ~ .controls label[for="lap_3"],
#start:checked ~ #lap_3:checked + #lap_4:not(:checked) ~ .controls label[for="lap_4"],
#start:checked ~ #lap_4:checked ~ .controls label[for="lap_4"],
#stop:checked ~ .controls label[for="start"],
#stop:checked ~ .controls label[for="reset"],
#init:checked ~ .controls label[for="start"],
#init:checked ~ .controls label[for="lap_1"] {
  display: block;
}

/* Disable lap control conditions */
#init:checked ~ .controls::before,
#start:checked ~ #lap_4:checked ~ .controls::before {
  display: block;
}


/* Visible lap conditions */
.laps li:first-child time,
.laps li:first-child::before,
#lap_1:checked ~ .laps li:nth-child(2) time,
#lap_1:checked ~ .laps li:nth-child(2)::before,
#lap_2:checked ~ .laps li:nth-child(3) time,
#lap_2:checked ~ .laps li:nth-child(3)::before,
#lap_3:checked ~ .laps li:nth-child(4) time,
#lap_3:checked ~ .laps li:nth-child(4)::before {
  visibility: visible;
}

/* Reset */
#init:checked ~ time,
#init:checked ~ .laps li time {
  animation-name: none;
}

#init:not(:checked) ~ time,
#init:not(:checked) ~ .laps li time {
  animation-name: digit;
}

/* Timer / Lap running conditions */
#start:checked ~ time,
#start:checked ~ #lap_1:not(:checked) ~ .laps li:first-child time,
#start:checked ~ :checked + #lap_2:not(:checked) ~ .laps li:nth-child(2) time,
#start:checked ~ :checked + #lap_3:not(:checked) ~ .laps li:nth-child(3) time,
#start:checked ~ :checked + #lap_4:not(:checked) ~ .laps li:nth-child(4) time {
  animation-play-state: running;
}

/* Timer / Lap stopping conditions */
#stop:checked ~ time,
#stop:checked ~ .laps li time,
#start:checked ~ #lap_1:checked ~ .laps li:first-child time,
#start:checked ~ #lap_2:checked ~ .laps li:nth-child(2) time,
#start:checked ~ #lap_3:checked ~ .laps li:nth-child(3) time,
#start:checked ~ #lap_4:checked ~ .laps li:nth-child(4) time {
  color: #fff;
  animation-play-state: paused;
}

@keyframes digit {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100% + 1em));
  }
}

</style>
