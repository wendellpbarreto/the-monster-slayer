<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TheMonsterSlayer/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheMonsterSlayer from "@/components/TheMonsterSlayer.vue"

export default {
  name: "home",
  components: {
    TheMonsterSlayer
  }
}
</script>
