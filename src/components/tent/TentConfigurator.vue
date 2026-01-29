<script setup lang="ts">
import {Zelt} from "@/models/Zelt";
import {Bestandteil} from "@/models/Bestandteil";

const props = defineProps(['data']);

// --- state ---
const config = props.data

// --- helpers ---
const createEmptyZelt = (): Zelt => ({
  name: "",
  components: [],
  count: 0
})

const createEmptyComponent = (): Bestandteil => ({
  name: "",
  count: 1
})

// --- actions ---
const addZelt = () => {
  config.Zelte.push(createEmptyZelt())
}

const removeZelt = (index: number) => {
  config.Zelte.splice(index, 1)
}

const addComponent = (zelt: Zelt) => {
  zelt.components.push(createEmptyComponent())
}

const removeComponent = (zelt: Zelt, index: number) => {
  zelt.components.splice(index, 1)
}
</script>

<template>
  <div>
    <h2>Zelte</h2>

    <div
        v-for="(zelt, zeltIndex) in config.Zelte"
        :key="zeltIndex"
        class="zeltcontainer"
    >
      <label>
        Zeltname:
        <input v-model="zelt.name" />
      </label>

      <button class="deleteBtn btnSmall" @click="removeZelt(zeltIndex)">
        Zelt entfernen
      </button>

      <h4>Komponenten</h4>

      <div
          v-for="(component, compIndex) in zelt.components"
          :key="compIndex"
          style="margin-left: 1rem"
      >
        <input
            v-model="component.name"
            placeholder="Name"
        />
        <input
            v-model.number="component.count"
            type="number"
            min="0"
            style="width: 60px"
        />

        <button class="deleteBtn btnSmall" @click="removeComponent(zelt, compIndex)">
          X
        </button>
      </div>

      <button @click="addComponent(zelt)">
        + Komponente
      </button>
    </div>

    <button @click="addZelt">
      + Zelt hinzufügen
    </button>
    <div class="debug">
      <div v-for="zelt in config.Zelte" :key="zelt.name">
        <strong>{{ zelt.name }}</strong>
        <ul>
          <li v-for="c in zelt.components" :key="c.name">
            {{ c.count }} × {{ c.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.zeltcontainer{
  border: 1px solid #aaa;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #c3d1e0;

}

</style>
