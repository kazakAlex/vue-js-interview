import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    userListLoading: false,
    filterCountry: null,
    filterScore: null

  },
  getters: {
    filterByCountry(state) {
      if (state.filterCountry) {
        return [...state.users].filter(user => user.country === state.filterCountry)
      }
      else return state.users
    },

    filterByScore(state) {
      if (state.filterScore) {
        return [...state.users].filter(user => eval(`${user.score} ${state.filterScore}`) )
      }
      else return state.users
    },

    filterByOptions(state, getters) {
      return getters.filterByCountry.filter(x => getters.filterByScore.indexOf(x) !== -1)
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setLoading(state, bool) {
      state.userListLoading = bool
    },
    setCountryFilter(state, country) {
      state.filterCountry = country
    },
    setScoreFilter(state, score) {
      state.filterScore = score
    }
  },
  actions: {

    async getUsersAsync({commit}) {
      try {
        commit('setLoading', true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        commit('setUsers', response.data)
      } catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false);
      }
    },

    getUserMock(store) {
      store.commit('setLoading', true)

      store.commit('setUsers',
          [
            {
              id: 0,
              avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
              title: 'Brunch this weekend?',
              subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
              country: 'russia',
              score: 45,
              address: 'Flat 25 Isabel Passage New Wayne TD8 6PQ'
            },
            {
              id: 1,
              avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
              title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
              subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
              country: 'usa',
              score: 5,
              address: 'Studio 42i Wilson Run Martinland E12 5QJ'
            },
            {
              id: 2,
              avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
              title: 'Oui oui',
              subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
              country: 'russia',
              score: 10,
              address: '586 Kennedy Lock Marshallview PL4 9RB'
            },
            {
              id: 3,
              avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
              title: 'Birthday gift',
              subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
              country: 'usa',
              score: 30,
              address: '586 Kennedy Lock Marshallview PL4 9RB'
            },
            {
              id: 4,
              avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
              title: 'Recipe to try',
              subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
              country: 'russia',
              score: 25,
              address: '1 Danielle Station Khanmouth BD22 9DN'
            },
          ])

      store.commit('setLoading', false)
    }
  },
})
