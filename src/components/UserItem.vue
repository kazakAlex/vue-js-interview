<template>
  <v-list-item
      :key="user.title"
  >
    <v-tooltip
        open-on-click
        close-on-content-click
        :open-on-hover="false"
        left
    >
      <template v-slot:activator="{ on }">
        <v-list-item-avatar v-on="on">
          <v-img :src="user.avatar"></v-img>
        </v-list-item-avatar>
      </template>
      <span>{{user.address}}</span>
    </v-tooltip>

    <v-list-item-content>
      <v-list-item-title v-html="user.title"></v-list-item-title>
      <v-list-item-subtitle v-html="user.subtitle"></v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>
<script>

export default {
  props: {
    user: {
      type: Object,
    },
    index: {
      type: Number
    }
  }
}
</script>