<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="authStore.user">
      <h1 class="text-2xl font-semibold mb-4">{{ authStore.user.name }}</h1>
      <p class="text-lg text-gray-600">{{ authStore.user.email }}</p>
    </div>
    <div v-else>
      <h1 class="text-2xl font-semibold text-gray-700">Login Please</h1>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();
onMounted(async () => {
  await authStore.getUser();
});
</script>