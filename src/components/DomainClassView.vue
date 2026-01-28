<template>
  <div class="domain-class-view">
    <h3>{{domainName}}</h3>
    <table class="styled-table">
      <thead>
        <tr>
          <th v-for="(value, key) in (data?.[0] || {})" :key="key">
            <span v-if="'id'.toLowerCase()!==(key+'').toLowerCase()">
            {{ key }}
              </span>
          </th>
<!--          <th>löschen</th>-->
        </tr>
      </thead>
      <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="header in headers" :key="header">
          <span v-if="header.toLowerCase()!=='id'.toLowerCase()">
          <input
              v-if="typeof row[header] === 'number'"
              type="number"
              v-model="row[header]"
              @change="handleChange(ref(row))"
          />
          <span v-else>{{ row[header] }}</span>
            </span>
        </td>
<!--        <td>-->
<!--          <button @click="deleteElement(row['id'])">Delete</button>-->
<!--        </td>-->
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
//import { BTable } from 'bootstrap-vue'
//Vue.component('b-table', BTable)
import {computed, Ref, ref} from "vue";
import {Zelt} from "@/models/Zelt";

const props = defineProps({
  domainName:String, data:null});
const emit = defineEmits(['deleteElement','updateRow'])


const headers = computed(() => {
  if (props.data.length === 0) return [];
  return Object.keys(props.data[0]);
});

function deleteElement(id:number){
  emit( 'deleteElement',id);
}

const handleChange = (row: Ref<Zelt>) => {
  emit('updateRow', row);
};

</script>

<style scoped>
.styled-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9em;
  color: #333;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.styled-table thead {
  background-color: #4CAF50;
  color: white;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:nth-of-type(odd) {
  background-color: #fff;
}

.styled-table tbody tr:hover {
  background-color: #e9e9e9;
  transition: background-color 0.2s ease;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #4CAF50;
}

.styled-table th {
  font-weight: 600;
}

.styled-table td:last-child,
.styled-table th:last-child {
  text-align: center;
}

/* Optional: Responsive adjustments */
@media screen and (max-width: 600px) {
  .styled-table {
    font-size: 0.8em;
  }
  .styled-table th,
  .styled-table td {
    padding: 8px 10px;
  }
}

</style>
