<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <AppNav />
      <AppFooter />
      <v-main style="padding-top: 130px">
        <slot></slot>
      </v-main>
    </v-layout>
  </div>
</template>
<script>
import CartDrawer from "./CartDrawer.vue";
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
export default {
  components: {
    CartDrawer,
    AppNav,
    AppFooter,
  },
};
</script>
