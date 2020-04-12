<template>
  <v-container fluid>
    <app-section>
      <v-card>
        <v-row>
          <v-col cols="12">
            <app-loader :loading="loading" />
            <line-chart :chart-data="casesLineChart" height="170px">
            </line-chart>
          </v-col>
        </v-row>
      </v-card>
    </app-section>
    <app-section>
      <v-card>
        <v-row>
          <v-col cols="12">
            <app-loader :loading="loading" />
            <line-chart
              :chart-data="deathsLineChart"
              height="170px"
            ></line-chart>
          </v-col>
        </v-row>
      </v-card>
    </app-section>
    <app-section>
      <v-card>
        <v-row>
          <v-col cols="12">
            <app-loader :loading="loading" />
            <line-chart
              :chart-data="recoveredLineChart"
              height="170px"
            ></line-chart>
          </v-col>
        </v-row>
      </v-card>
    </app-section>
  </v-container>
</template>

<script>
import AppSection from "../components/AppSection.vue";
import AppLoader from "../components/AppLoader.vue";
import LineChart from "../components/AppLineChart.vue";

import historicalStatsService from "../api/historicalStatsService";

export default {
  components: {
    AppSection,
    AppLoader,
    LineChart
  },
  data() {
    return {
      casesLineChart: {},
      deathsLineChart: {},
      recoveredLineChart: {},
      loading: false
    };
  },
  created() {
    this.getHistoricalData();
  },
  methods: {
    getHistoricalData() {
      this.loading = true;
      historicalStatsService
        .getHistoricalData()
        .then(res => {
          this.setCasesLineChart(res.cases);
          this.setDeathsLineChart(res.deaths);
          this.setRecoveredLineChart(res.recovered);
          this.loading = false;
        })
        .catch(() => (this.loading = false));
    },

    setCasesLineChart(cases) {
      this.casesLineChart = {
        labels: Object.keys(cases),
        datasets: [
          {
            label: "Total confirmed cases",
            backgroundColor: "#263238",
            data: Object.values(cases)
          }
        ]
      };
    },
    setDeathsLineChart(deaths) {
      this.deathsLineChart = {
        labels: Object.keys(deaths),
        datasets: [
          {
            label: "Total deaths",
            backgroundColor: "#D50000",
            data: Object.values(deaths)
          }
        ]
      };
    },
    setRecoveredLineChart(recovered) {
      this.recoveredLineChart = {
        labels: Object.keys(recovered),
        datasets: [
          {
            label: "Total recovered",
            backgroundColor: "#004D40",
            data: Object.values(recovered)
          }
        ]
      };
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
