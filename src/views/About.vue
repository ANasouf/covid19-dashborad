<template>
  <v-container fluid>
    <app-section>
      <v-card class="pa-3">
        <v-card-title>About Me</v-card-title>
        <v-card-text class="subtitle-1 primary--text"
          >My name is <b>Abdulraouf Nasouf</b>, I'm a software developer located
          in Tripoli - Libya
        </v-card-text>
      </v-card>
    </app-section>
    <app-section>
      <v-card class="pa-3">
        <v-card-title>Contacts</v-card-title>
        <v-row>
          <v-col>
            <v-card-text class="font-weight-bold"
              ><v-icon color="red darken-3">mdi-gmail</v-icon>
              a.m.nasouf@gmail.com
            </v-card-text>
          </v-col>
          <v-col>
            <v-card-text
              ><v-btn
                text
                target="_blank"
                href="https://twitter.com/RaoufNasouf"
                ><v-icon color="blue">mdi-twitter</v-icon>
                RaoufNasouf
              </v-btn>
            </v-card-text>
          </v-col>
          <v-col>
            <v-card-text
              ><v-btn
                text
                target="_blank"
                href="https://www.linkedin.com/in/a-nasouf/"
                ><v-icon color="blue darken-1" class="pr-1"
                  >mdi-linkedin</v-icon
                >
                a-nasouf
              </v-btn>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </app-section>
    <app-section>
      <v-card class="pa-3">
        <v-card-title>About the project</v-card-title>
        <v-card-text class="subtitle-1 primary--text"
          >The project is a mobile friendly Single page application (SPA), built
          using Vuejs and Vuetify, connected to a public api to show data about
          the novel corona virus covid-19.</v-card-text
        >
        <v-card-text class="subtitle-1 primary--text"
          >The project source code is open source on my github account here:
          <v-btn
            text
            color="blue"
            href="https://github.com/ANasouf/covid19-dashborad"
            >covid19-dashboard</v-btn
          ></v-card-text
        >
      </v-card>
    </app-section>
    <app-section>
      <v-card class="pa-3">
        <v-card-title>Data source</v-card-title>
        <v-card-text>
          <v-btn text color="blue" href="https://corona.lmao.ninja"
            >corona.lmao.ninja</v-btn
          >
        </v-card-text>
      </v-card>
    </app-section>
  </v-container>
</template>

<script>
import AppSection from "../components/AppSection.vue";
export default {
  components: {
    AppSection
  }
};
</script>
