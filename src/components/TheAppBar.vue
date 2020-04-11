<template>
  <v-app-bar app color="primary">
    <app-section>
      <v-btn
        text
        color="white"
        :to="item.path"
        v-for="item in menuItems"
        :key="item.path"
        >{{ item.path }}</v-btn
      >
    </app-section>
    <v-btn
      text
      color="white"
      target="_blank"
      href="https://github.com/ANasouf/covid19-dashborad"
      >Github<v-icon>mdi-open-in-new</v-icon></v-btn
    >
  </v-app-bar>
</template>

<script>
import AppSection from "../components/AppSection.vue";
export default {
  components: {
    AppSection
  },
  computed: {
    menuItems() {
      return this.$router.options.routes[0].children;
    }
  }
};
</script>
