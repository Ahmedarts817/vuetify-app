<template>
  <div class="cyber-panner">
    <img class="w-100" src="@/assets/images/cyber-banner.webp" alt="" />
  </div>
  <h2 class="text-center py-5 text-black">Top Categories</h2>
  <v-container fluid class="px-15">
    <v-row>
      <v-col v-if="!categories" cols="12">
        <v-row>
          <v-col cols="2" v-for="num in 6" :key="num">
            <v-skeleton-loader
              type="image"
              class="rounded-bell"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-else cols="2" v-for="category in categories" :key="category">
        <v-card :elevation="0">
          <div class="image">
            <router-link
              :to="{ name: 'category', params: { id: category } }"
              style="text-decoration: none !important"
            >
              <a>{{ category.name }}</a>
            </router-link>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { RouterLink } from "vue-router";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";

export default {
  props: ["categories"],
  components: { VSkeletonLoader },
};
</script>
<style scoped lang="scss">
.image {
  background-color: #eee;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100px;
  height: 100px;
  .text {
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }
}
</style>
