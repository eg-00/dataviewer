<script setup lang="ts">
import DomainClassView from "@/components/DomainClassView.vue";
import {computed, ref} from "vue";
import { onMounted } from 'vue';
import DomainNavigation from "@/components/DomainNavigation.vue";
import TentCalculator from "@/components/TentCalculator.vue";

let domainClasses = ref<[][]>([]);
let currentDomainClass = ref({"name": "Person"})
// onMounted(async() => {
//   const response = await fetch('/domainClasses.json');
//   if (!response.ok) {
//     throw new Error('Failed to fetch JSON');
//   }
//   let temp = await response.json();
//   domainClasses.value = temp.domainClasses[0]
//   console.log(domainClasses.value);
//   //console.log(domainClasses.value[0].Person);
//   currentDomainClass = ref(domainClasses.value[0])
// });
//
// function updateDomainView(index: number) {
//   currentDomainClass.value = domainClasses.value[index];
// }
</script>

<template>
  <main>
<!--    <DomainClassView-->
<!--        v-for="domainClass in domainClasses"-->
<!--        :domainClass="domainClass"-->
<!--    />-->
    <tent-calculator/>
<!--    <DomainNavigation :domainClasses="domainClasses" :currentDomainClass="currentDomainClass" @updateDomainView="updateDomainView" />-->
<!--    <DomainClassView :domainName="currentDomainClass.name", :domainClass="currentDomainClass"/>-->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

</style>
