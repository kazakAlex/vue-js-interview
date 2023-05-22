<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>
    </v-row>

    <v-row
        justify="center"
    >
      <v-col
          cols="12"
          md="4"
      >
        <v-select
            :value="filterCountry"
            @input="setCountryFilter"
            :items="['russia', 'usa']"
            clearable
            label="Filter by country"
        ></v-select>

        <v-select
            :value="filterScore"
            @input="setScoreFilter"
            :items="['> 20','< 10',]"
            clearable
            label="Filter by score"
        ></v-select>
      </v-col>


      <v-col
          cols="12"
          md="4"
      >
        <v-card
            max-width="450"
            class="mx-auto"
        >
          <v-list three-line>
            <div v-if="!userListLoading">
              <user-list :users=filteredUsers />
            </div>
            <div v-else>Идет загрузка...</div>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import UserList from "@/components/UserList.vue";

export default {
  name: 'ContentPage',
  components: {UserList},


  methods: {
    ...mapActions({
      getUsersMocks: 'getUserMock'
    }),
    ...mapMutations({
      setCountryFilter: 'setCountryFilter',
      setScoreFilter: 'setScoreFilter',
    })
  },

  computed: {
    ...mapState({
      users: state => state.users,
      filterCountry: state => state.filterCountry,
      filterScore: state => state.filterScore,
      userListLoading: state => state.userListLoading,
    }),
    ...mapGetters({
      filteredUsers: 'filterByOptions',
    })
  },

  mounted() {
    this.getUsersMocks();
  }
}
</script>

<style scoped>

</style>
