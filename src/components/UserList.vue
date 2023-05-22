<template>
  <div>
    <div v-if="users.length > 0">
      <h3 class="ml-4">user list</h3>
      <transition-group name="user-list">
      <user-item v-for="(user, index) in users"
                :key="user.id" :index="index" :user="user"/>
      </transition-group>
    </div>
    <h3 v-else class="ma-3">
      user list empty :(
    </h3>
  </div>
</template>

<script>

import UserItem from "@/components/UserItem.vue";

export default {
  components: {UserItem},
  props: {
    users: {
      type:Array,
      required: true,
    }
  },
}
</script>

<style scoped>
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
</style>