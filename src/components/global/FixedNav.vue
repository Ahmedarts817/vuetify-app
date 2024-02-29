<template>
  <div class="fixed-nav">
    <v-app-bar color="#02218f">
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <img class="w-50" src="../../assets/images/logo.png" alt="" />
          </v-col>
          <v-col cols="5">
            <ul
              class="links d-flex justify-space-between text-white gap-5"
              style="list-style: none; font-size: 14px"
            >
              <li>Theme Demo</li>
              <li>Shop</li>
              <li>Product</li>
              <li>New in</li>
              <li>Must have</li>
              <li>Collections</li>
            </ul>
          </v-col>
          <v-col
            cols="5"
            class="d-flex justify-end align-center"
            style="gap: 20px"
          >
            <div><v-icon color="whitw">mdi-magnify</v-icon></div>
            <div
              @click="openCart"
              class="wishlists d-flex flex-column align-center"
            >
              <v-badge
                location="right top"
                content="2"
                color="red"
                offset-x="12"
              ></v-badge>
              <v-icon color="white">mdi-cart-outline</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  inject: ["Emitter"],
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
};
</script>
