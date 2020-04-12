<template>
  <div>
    <div class="title py-3">{{ title }}</div>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="10"
      class="elevation-4"
      :loading="loading"
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        prevIcon: 'mdi-arrow-left',
        nextIcon: 'mdi-arrow-right'
      }"
    >
      <template v-slot:top>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-text-field
              v-model.trim="search"
              @input="filter($event)"
              label="Search by name"
              class="mx-4"
            ></v-text-field>
          </v-col>
        </v-row>
      </template>

      <template v-slot:item.countryInfo.flag="{ item }">
        <v-img
          :src="`${item.countryInfo.flag}`"
          height="20px"
          width="30px"
        ></v-img>
      </template>

      <template v-slot:item.cases="{ item }"
        >{{ item.cases | comma }}
      </template>
      <template v-slot:item.deaths="{ item }"
        >{{ item.deaths | comma }}
      </template>
      <template v-slot:item.recovered="{ item }"
        >{{ item.recovered | comma }}
      </template>
      <template v-slot:item.active="{ item }"
        >{{ item.active | comma }}
      </template>
      <template v-slot:item.critical="{ item }"
        >{{ item.critical | comma }}
      </template>
      <template v-slot:item.casesPerOneMillion="{ item }"
        >{{ item.casesPerOneMillion | comma }}
      </template>
      <template v-slot:item.deathPerOneMillion="{ item }"
        >{{ item.deathPerOneMillion | comma }}
      </template>
      <template v-slot:item.tests="{ item }"
        >{{ item.tests | comma }}
      </template>
      <template v-slot:item.testsPerOneMillion="{ item }"
        >{{ item.testsPerOneMillion | comma }}
      </template>
      <template v-slot:item.todayDeaths="{ item }">
        <v-chip color="red" dark>+{{ item.todayDeaths | comma }}</v-chip>
      </template>
      <template v-slot:item.todayCases="{ item }">
        <v-chip color="yellow darken-4" dark
          >+{{ item.todayCases | comma }}</v-chip
        >
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data: () => {
    return {
      search: ""
    };
  },
  methods: {
    filter(searchValue) {
      this.$emit("searchFilter", searchValue);
    }
  }
};
</script>

<style></style>
