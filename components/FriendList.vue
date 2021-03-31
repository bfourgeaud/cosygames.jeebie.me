<template>
  <div class="mb-4">
    <p class="font-medium">Friends Online {{ online }}</p>
    <!-- Friend slot -->
    <div v-for="friend in friends" :key="friend.id" class="px-4 relative inline-flex space-x-4 items-center w-full hover:bg-dark-800 cursor-pointer">
      <div class="rounded-full flex-initial my-2" :class="friend.online ? ' bg-green-700' : ' bg-red-700'" style="width:12px; height:12px" />
      <div class="py-4 flex-1">
        <p class="font-medium text-md">{{ friend.name }}</p>
        <p v-if="friend.game" class="text-dark-500 text-sm">Playing {{ friend.game.name }}</p>
        <p v-else class="text-dark-500 text-sm">{{ friend.online ? 'Online' : 'Offline' }}</p>
      </div>
      <div v-if="friend.game" class="rounded-full overflow-hidden flex-initial" style="width:40px; height:40px;">
        <img :src="friend.game.logo" alt="" class="object-cover h-full w-full">
      </div>
      <!-- Friend Menu -->
      <div :class="true ? 'hidden' : 'flex'" class="absolute top-0 left-0 transform -translate-x-full flex-col text-lg py-4 px-2 bg-black">
        <div class="py-2 px-2">Send messsage</div>
        <div class="py-2 px-2">Invite in Lobby</div>
        <div class="py-2 px-2">Block</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'FriendList',
  computed: {
    ...mapState('friends', ['friends']),
    ...mapGetters('friends', ['online'])
  }
}
</script>
