<template>
  <v-container fluid>
    <app-section>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          lg="3"
          v-for="stat in summary"
          :key="stat.title"
        >
          <v-skeleton-loader
            class="elevation-4"
            ref="skeleton"
            type="list-item-avatar-two-line"
            v-if="loadingSkeleton"
          />
          <app-stat-card
            :title="stat.title"
            :color="stat.color"
            :icon="stat.icon"
            :stat="stat.stat"
            v-else
          />
        </v-col>
      </v-row>
    </app-section>
    <app-section>
      <app-data-table
        title="Global Statistics"
        :headers="headers"
        :items="countriesList"
        :loading="loadingCountries"
        @searchFilter="searchFilter($event)"
      />
    </app-section>
    <app-section>
      <app-data-table
        title="United States Statistics"
        :headers="statesHeaders"
        :items="statesList"
        :loading="loadingStates"
        @searchFilter="stateSearchFilter($event)"
      />
    </app-section>
  </v-container>
</template>

<script>
import AppSection from "../components/AppSection.vue";
import AppDataTable from "../components/AppDataTable.vue";
import AppStatCard from "../components/AppStatCard.vue";

import statisticsService from "../api/statisticsService";

export default {
  components: {
    AppSection,
    AppDataTable,
    AppStatCard
  },
  created() {
    this.getSummary();
    this.getAllCountriesData();
    this.getUnitedStatesData();
  },
  computed: {
    countriesList() {
      if (this.searchValue === "") {
        return this.allCountriesData;
      } else {
        return this.allCountriesData.filter(c =>
          c.country.includes(this.searchValue)
        );
      }
    },
    statesList() {
      if (this.stateSearchValue === "") {
        return this.allUnitedStatesData;
      } else {
        return this.allUnitedStatesData.filter(c =>
          c.state.includes(this.stateSearchValue)
        );
      }
    }
  },
  data: () => {
    return {
      headers: [
        { text: "Flag", value: "countryInfo.flag" },
        { text: "Country", value: "country" },
        { text: "Cases", value: "cases" },
        { text: "Today cases", value: "todayCases" },
        { text: "Deaths", value: "deaths" },
        { text: "Today deaths", value: "todayDeaths" },
        { text: "Recoverd", value: "recovered" },
        { text: "Active", value: "active" },
        { text: "Critical", value: "critical" },
        { text: "Cases per 1M", value: "casesPerOneMillion" },
        { text: "Deaths per 1M", value: "deathsPerOneMillion" }
      ],
      statesHeaders: [
        { text: "State", value: "state" },
        { text: "Cases", value: "cases" },
        { text: "Today cases", value: "todayCases" },
        { text: "Deaths", value: "deaths" },
        { text: "Today deaths", value: "todayDeaths" },
        { text: "Active", value: "active" },
        { text: "Tests", value: "tests" },
        { text: "Tests per 1M", value: "testsPerOneMillion" }
      ],
      loadingSkeleton: true,
      loadingStates: false,
      loadingCountries: false,
      allCountriesData: [],
      allUnitedStatesData: [],
      searchValue: "",
      stateSearchValue: "",
      summary: [1, 2, 3, 4]
    };
  },
  methods: {
    getSummary() {
      this.loadingSkeleton = true;
      statisticsService.getSummary().then(res => {
        this.summary = [
          {
            title: "Confirmed cases",
            stat: res.cases,
            icon: "mdi-account-multiple",
            color: "primary"
          },
          {
            title: "Recovered cases",
            stat: res.recovered,
            icon: "mdi-hand-heart",
            color: "teal darken-4"
          },
          {
            title: "Fatal cases",
            stat: res.deaths,
            icon: "mdi-skull-crossbones",
            color: "red accent-4"
          },
          {
            title: "Active cases",
            stat: res.active,
            icon: "mdi-bed-empty",
            color: "deep-orange darken-1"
          }
        ];
        this.loadingSkeleton = false;
      });
    },
    getAllCountriesData() {
      this.loadingCountries = true;
      statisticsService
        .getAllCountriesData()
        .then(res => {
          this.allCountriesData = res;
          this.loadingCountries = false;
        })
        .catch(() => (this.loadingCountries = false));
    },
    getUnitedStatesData() {
      this.loadingStates = true;
      statisticsService
        .getUnitedStatesData()
        .then(res => {
          this.allUnitedStatesData = res;
          this.loadingStates = false;
        })
        .catch(() => (this.loadingStates = false));
    },
    searchFilter(searchValue) {
      this.searchValue = searchValue;
    },
    stateSearchFilter(searchValue) {
      this.stateSearchValue = searchValue;
    }
  }
};
</script>
