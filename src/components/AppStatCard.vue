<template>
  <v-card class="pa-2 elevation-4" :color="color">
    <v-row>
      <v-col cols="2">
        <v-avatar
          ><v-icon color="white">{{ icon }}</v-icon></v-avatar
        >
      </v-col>
      <v-col class="white--text text-center" cols="10">
        <div class="title">{{ title }}</div>
        <div class="font-weight-bold title">{{ stat | comma }}</div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    stat: {
      type: Number,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
