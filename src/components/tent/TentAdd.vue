<template>
  <h2>Zelt hinzufügen</h2>
  <div class="grid-container">
    <div v-for="zelt in tents.Zelte" :key="zelt.name" >
      <button class="grid-item" @click="incrementCount(zelt)" @contextmenu.prevent="decrementCount(zelt)">
        {{ zelt.name }} ({{ zelt.count }})
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Ref, ref} from 'vue';
import {Zelt, ZeltCollection} from "@/models/Zelt";

const props = defineProps(["tents"]);
const emit = defineEmits(["addTent","removeTent"]);
const tents:Ref<ZeltCollection> =props.tents

function incrementCount (tent: Zelt){
  emit("addTent", tent)
}
function decrementCount (tent: Zelt){
  emit("removeTent", tent)
}

</script>
<style scoped>

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 Spalten */
  grid-template-rows: repeat(3, auto);    /* 3 Zeilen */
  gap: 10px; /* Abstand zwischen den Elementen */
  width: 100%;
  max-width: 500px; /* Optional: Maximale Breite begrenzen */
  margin: 0 auto;   /* Optional: Zentrieren */
}

.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
