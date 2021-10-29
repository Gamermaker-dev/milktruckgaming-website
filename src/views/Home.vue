<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <iframe
      src="https://player.twitch.tv/?channel=MilkTruckGaming&parent=milktruckgaming.com&parent=www.milktruckgaming.com&muted=true&autoplay=true"
      height="600"
      width="800"
      allowfullscreen="true">
    </iframe>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
iframe {
  margin: 40px 0 0;
}
</style>>
