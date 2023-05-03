<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-semibold mb-6">Your Cart</h1>
    <table v-if="cartProducts.length" class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="product in cartProducts" :key="product.id">
          <td class="px-6 py-4 whitespace-nowrap">{{ product.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ product.sku }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ product.price }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ product.pivot.quantity }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else class="text-lg text-gray-600">Your cart is empty.</p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const router = useRouter();
const cartProducts = ref([]);


onMounted(async () => {
  await fetchCart();
});

watch(
  () => authStore.user,
  (newUser) => {
    if (!newUser) {
      router.push({ name: 'Login' });
    }
  }
);

const fetchCart = async () => {
  try {
    const response = await axios.get('/api/cart');
    cartProducts.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
};
</script>