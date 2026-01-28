<template>
  <nav>
    <ul class="nav-list">
      <li v-for="(domainClass, index) in domainClasses" :key="domainClass.name" class="nav-item">

        <button @click="handleNavClick(index)" class="nav-link">
          {{ domainClass.name }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  domainClasses:null,
  currentDomainClass:null});

const emit=defineEmits(["updateDomainView"])

const handleNavClick = (index) => {
  emit('updateDomainView',index)
};
</script>

<style scoped>/* Base Navigation Styles */
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  background-color: #333;
  border-radius: 4px;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: block;
  padding: 12px 20px;
  color: white;
  text-decoration: none;
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #555;
}

/* Dropdown Menu Styles */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.dropdown-menu li {
  padding: 0;
}

.dropdown-menu a {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.dropdown-menu a:hover {
  background-color: #ddd;
}

</style>
