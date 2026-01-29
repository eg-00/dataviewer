<script setup lang="ts">

import TentInput from "@/components/tent/TentInput.vue";
import DomainClassView from "@/components/DomainClassView.vue";
import {computed, ComputedRef, Ref, ref} from "vue";
import {
  getZelteNames,
  getZelteWithComponents,
  Zelt,
  ZeltCollection
} from "@/models/Zelt";
import TentComponents from "@/components/tent/TentComponents.vue";
import TentConfigurator from "@/components/tent/TentConfigurator.vue";
import TentAdd from "@/components/tent/TentAdd.vue";
const tents = ref<ZeltCollection>(getZelteWithComponents());
const tenttypes:String[] = getZelteNames(tents.value);
let openConfig = ref(false);

const tentcounts:ComputedRef<Zelt[]> = computed(() => {
  return tents.value.Zelte.map(({ name, count }) => ({ name, count }));
})

function addTent(newTent:Zelt){
  tents.value.Zelte.find(e => e.name === newTent.name).count +=1
}
// add a standard tent
addTent({ name: "Kote",count:1 });

function deleteTent(newTent:Zelt) {
  const tent:Zelt = tents.value.Zelte.find(e => e.name === newTent.name)
  if (tent && tent.count > 0) {
    tent.count -=1
  }
}
function updateTent(newTent:Ref<Zelt>){
    tents.value.Zelte.forEach(e => {
      if (e.name === newTent.value.name) {
        e.count = newTent.value.count;
      }
    });

}
function toggleConfig() {
  openConfig.value= !openConfig.value;
}

</script>

<template style="column-count: 2;">
<h1>
  Zeltrechner
</h1>
  <button @click="toggleConfig">Config</button>


<!--  <tent-input @addTent="addTent" :tentTypes="tenttypes"/>-->
  <tent-add @addTent="addTent" @removeTent="deleteTent" :tents="tents"/>
  <DomainClassView domainName="Zelte" @deleteTent="deleteTent" @update-row="updateTent" :data="tentcounts"/>
  <TentComponents :tentTypes="tenttypes" :data="tents"/>
  <div v-show="openConfig">
    <tent-configurator :data="tents"/>
  </div>
</template>

<style scoped>
*{
  justify-content: space-between;
  margin:5px;
  flex: 1;
}
</style>