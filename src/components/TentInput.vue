<template>
    <span>Zelt Hinzufügen</span>
    <form @submit.prevent="addTent">

      <label>
        Anzahl
        <input type="number" min="0" placeholder="0" step="1" v-model="tent_count_input.count">
      </label>
      <label>
        Zeltart
        <select v-model="tent_count_input.name">
          <option
              v-for="(item, index) in props.tentTypes"
              :value="item"
              :key="index">
            {{item}}
          </option>
        </select>
      </label>

      <button type="submit">hinzufügen</button>
    </form>
    <!-- @deleteEntry="deleteGrade"-->
</template>

<script setup>
import {ref} from 'vue';
const props = defineProps(["tentTypes"])
const emit = defineEmits(["addTent"]);


const tent_count_input = ref({
  name: props.tentTypes[0],
  count: 1.0,
})

function addTent() {
  const is_every_input_set = validateInput();
  if (props.tentTypes.includes(tent_count_input.value.name)) {
    emit("addTent",{
      name: tent_count_input.value.name,
      count: tent_count_input.value.count,
    });
  }
  // clear inputmask variables
  tent_count_input.value = {name: props.tentTypes[0], count: 1.0}
}

function validateInput() {
  const not_empty = Object.values(tent_count_input.value).every(value => value !== "");
  const valid_grade = parseInt(tent_count_input.value.count)>=0;
  return valid_grade && not_empty;
}


</script>

<style scoped>
</style>
