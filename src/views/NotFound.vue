<template>
  <v-app>
    <v-container fluid fill-height class="grey lighten-3">
      <app-section>
        <div class="display-4 primary--text text-center">404</div>
        <div class="display-1 primary--text text-center">Page Not Found</div>
        <v-row justify="center" class="py-3">
          <v-spacer />
          <v-btn color="primary" to="/dashboard">back to Dashboard</v-btn>
          <v-spacer />
        </v-row>
      </app-section>
    </v-container>
  </v-app>
</template>

<script>
import AppSection from "../components/AppSection.vue";
export default {
  components: {
    AppSection
  }
};
</script>
