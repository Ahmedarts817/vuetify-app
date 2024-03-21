<template>
  <div class="cyber-panner">
    <img class="w-100" src="@/assets/images/cyber-banner.webp" alt="" />
  </div>
  <h2 class="text-center py-5 text-black">Top Categories</h2>
  <v-container fluid class="px-15">
    <v-row>
      <v-col cols="2" v-for="category in categories" :key="category.id">
        <v-card :elevation="0">
          <div class="image">
            <v-hover v-slot="{ isHovering, props }">
              <img
                :src="category.image"
                alt=""
                :style="`scale:${isHovering ? 1.1 : 1}`"
                v-bind="props"
              />
            </v-hover>
          </div>
          <v-card-text>{{ category.name }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: ["categories"],
};
</script>
<style scoped lang="scss">
.image {
  background-color: #eee;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }
}
</style>
