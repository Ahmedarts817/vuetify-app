<template>
  <div class="top-offers py-5 bg-grey-lighten-4">
    <v-container>
      <v-row>
        <v-col cols="4">
          <div class="image">
            <img src="../../assets/images/headset.webp" alt="" />
          </div>
        </v-col>
        <v-col cols="4">
          <div class="image">
            <img src="../../assets/images/chairs.webp" alt="" />
          </div>
        </v-col>
        <v-col cols="4">
          <div class="image">
            <img src="../../assets/images/playstations.webp" alt="" />
          </div>
        </v-col>
        <v-col cols="6">
          <div class="image">
            <img src="../../assets//images/iphones.webp" alt="" />
          </div>
        </v-col>
        <v-col cols="6">
          <div class="image">
            <img src="../../assets//images/laptops.webp" alt="" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.image {
  overflow: hidden;
  border-radius: 10px;
  img {
    width: 100%;
    transition: 0.3s;
    &:hover {
      transform: scale(1.05) rotate(2deg);
    }
  }
}
</style>
