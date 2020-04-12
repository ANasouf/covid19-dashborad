import Vue from "vue";

Vue.filter("comma", str => Number(str).toLocaleString());
