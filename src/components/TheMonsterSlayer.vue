<template>
  <div class="the-monster-slayer">
    <div class="players">
      <div class="player player-you">
        <h2 class="player-title">{{ you.name }}</h2>
        <div class="player-heath-bar-wrapper">
          <span class="player-heath-bar">{{ you.health }}</span>
        </div>
      </div>
      <div class="player player-monster">
        <h2 class="player-title">{{ monster.name }}</h2>
        <div class="player-heath-bar-wrapper">
          <span class="player-heath-bar">{{ monster.health }}</span>
        </div>
      </div>
    </div>
    <div class="controls">
      <button @click="startRound('attack')">Attack</button>
      <button @click="startRound('special-attack')">Special Attack</button>
      <button @click="startRound('heal')">Heal</button>
      <button @click="giveUp">Give Up!</button>
    </div>
    <ul class="history">
      <li v-for="(action, index) in history" :key="index">
        {{ action.player }}
        {{ action.action }}
        {{ action.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheMonsterSlayer",
  data: function() {
    return {
      you: {
        name: "You",
        health: 100
      },
      monster: {
        name: "Monster",
        health: 100
      },
      history: []
    }
  },
  methods: {
    startRound: function(action) {
      switch (action) {
        case "attack":
          this.you.health -= 4
          this.monster.health -= 5
          break
        case "special-attack":
          this.you.health -= 3
          this.monster.health -= 30
          break
        case "heal":
          this.you.health -= 3
          this.you.health += 20
          break
        default:
          break
      }

      if (this.you.health < 0) alert("Monster won!")
      if (this.monster.health < 0) alert("You won!")

      this.history.push({ player: "you", action: action, value: 3 })
      this.history.push({ player: "monster", action: "attack", value: 3 })
    },
    giveUp: function() {
      this.you.health = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.players {
  display: flex;
  align-items: center;
  justify-content: center;

  .player {
    min-width: 300px;
    padding: 1rem;
    margin: 0.5rem;
    border: 1px solid #ccc;
  }
}
</style>
