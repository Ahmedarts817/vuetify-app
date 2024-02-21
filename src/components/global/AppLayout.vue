<template>
  <div class="layout">
    <v-layout>
      <CartDrawer />

      <AppNav />
      <v-main>
        <slot></slot>
      </v-main>
      <AppFooter />
    </v-layout>
  </div>
</template>
<script>
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
export default {
  data: () => ({
    drawer: false,
  }),
  components: {
    AppNav,
    CartDrawer,
    AppFooter,
  },
};
</script>
