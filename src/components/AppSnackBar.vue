<template>
  <v-snackbar v-model="show" :color="color" :timeout="timeout">
    {{ message }}
    <v-btn text color="white" @click.native="show = false" icon>
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.snackbar.message;
    },
    color() {
      return this.$store.state.snackbar.type;
    },
    show: {
      get() {
        return this.$store.state.snackbar.show;
      },
      set() {
        this.$store.commit("snackbar/hide");
      }
    }
  },
  data: () => {
    return {
      timeout: 2500
    };
  }
};
</script>
