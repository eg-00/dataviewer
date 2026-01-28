<script setup lang="ts">

import TentInput from "@/components/tent/TentInput.vue";
import DomainClassView from "@/components/DomainClassView.vue";
import {computed, ComputedRef, ref} from "vue";
import {
  getZelteNames,
  getZelteWithComponents,
  Zelt,
  ZeltCollection
} from "@/models/Zelt";
import TentComponents from "@/components/tent/TentComponents.vue";
import TentConfigurator from "@/components/tent/TentConfigurator.vue";
const tents = ref<ZeltCollection>(getZelteWithComponents());
const tenttypes:String[] = getZelteNames(tents.value);
let openConfig = ref(false);

const tentcounts:ComputedRef<Zelt[]> = computed(() => {
  return tents.value.Zelte.map(({ name, count }) => ({ name, count }));
})

function addTent(newTent:Zelt){
  tents.value.Zelte.forEach(e => {
    if (e.name === newTent.name) {
      e.count += newTent.count;
    }
  });

}
// add a standard tent
addTent({ name: "Kote",count:1 });

function deleteTent(name:string) {
  tents.value.Zelte = tents.value.Zelte.filter(e => e.name !== name)
}
function toggleConfig() {
  openConfig.value= !openConfig.value;

}

</script>

<template>
<h1>
  Zeltrechner
</h1>
  <button @click="toggleConfig">Config</button>
  <div v-show="openConfig">
    <tent-configurator :data="tents"/>
  </div>

  <tent-input @addTent="addTent" :tentTypes="tenttypes"/>
  <DomainClassView domainName="Zelte" @deleteTent="deleteTent" :data="tentcounts"/>
  <TentComponents :tentTypes="tenttypes" :data="tents"/>

</template>

<style scoped>
*{
  justify-content: space-between;
  margin:5px;
  flex: 1;
}
</style>