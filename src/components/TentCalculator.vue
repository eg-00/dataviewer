<script setup lang="ts">

import TentInput from "@/components/TentInput.vue";
import DomainClassView from "@/components/DomainClassView.vue";
import {ref} from "vue";
import {Tent} from "@/models/tent";
import {getAllComponents, getZelteNames, getZelteWithoutComponents, Zelt, ZeltCollection} from "@/models/Zelt";
import TentComponents from "@/components/TentComponents.vue";
const tents = ref<ZeltCollection>(getZelteWithoutComponents());
const tenttypes = getZelteNames();
//const props = defineProps({tents})
function addTent(newTent:Zelt){
  tents.value.Zelte.forEach(e => {
    if (e.name === newTent.name) {
      e.count += newTent.count;
    }
  });

  // tents.value.Zelte.map(e => {e.name == newTent.name?e.count=e.count+newTent.count})
  // tents.value.Zelte.push(newTent)
}

// addTent({ name: "Kote",count:3 });
// addTent({ name: "Jurte",count:2 })
addTent({ name: "Lang-Kote",count:1 })

function deleteTent(name:string) {
  tents.value.Zelte = tents.value.Zelte.filter(e => e.name !== name)
}

</script>

<template>
  <tent-input @addTent="addTent" :tentTypes="tenttypes"/>
  <DomainClassView domainName="Zelte" @deleteTent="deleteTent" :data="tents.Zelte"/>
  <TentComponents :tentTypes="tenttypes" :data="tents"/>
</template>

<style scoped>

</style>