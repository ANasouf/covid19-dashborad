<template>
  <v-app>
    <app-snack-bar />
    <the-app-bar />
    <v-content class="grey lighten-3">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TheAppBar from "../components/TheAppBar.vue";
import AppSnackBar from "../components/AppSnackBar.vue";
export default {
  components: {
    TheAppBar,
    AppSnackBar
  }
};
</script>

<style></style>
