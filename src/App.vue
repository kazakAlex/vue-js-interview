<template>
  <v-app>
    <v-main>
      <ContentPage/>
    </v-main>

    <v-footer app v-bind="localAttrs">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer';
import ContentPage from "@/pages/ContentPage.vue";

export default {
  name: 'App',

  components: {
    ContentPage,
    Footer
  },

  computed: {
    localAttrs () {
      const attrs = {}

      attrs.absolute = true
      attrs.fixed = false

      return attrs
    },
  },

  data: () => ({
    //
  }),
};
</script>
