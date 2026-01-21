<script setup lang="ts">

import DomainClassView from "@/components/DomainClassView.vue";
import {computed} from "vue";
import {getAllComponents} from "@/models/Zelt";
const props = defineProps(['data']);
const totalComponents = computed(() => {

  return getAllComponents(props.data);
})
</script>

<template>
<DomainClassView  domainName="Benötigtes Material" :data="totalComponents"/>
</template>
<!--v-if="totalComponents.length>0"-->
<style scoped>

</style>