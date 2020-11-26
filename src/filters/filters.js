import Vue from "vue"

Vue.filter("seconds", val => (val / 1000).toFixed(0));
