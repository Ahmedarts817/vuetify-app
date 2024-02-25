<template>
  <div class="features">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <v-icon size="large" icon="mdi-truck"></v-icon>
          <span class="ms-2">free shipping and returns</span>
        </v-col>
        <v-col class="text-center second">
          <v-icon
            size="large"
            icon="mdi-certificate
          "
          ></v-icon>
          <span class="ms-2">Lowest Price guarantee</span>
        </v-col>
        <v-col class="text-center">
          <v-icon size="large" icon="mdi-trophy"></v-icon>
          <span class="ms-2">Longest wrantees offer</span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped lang="scss">
.second {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    height: 60%;
    width: 1px;
    background-color: rgb(43, 42, 42);
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &::after {
    content: "";
    position: absolute;
    height: 60%;
    width: 1px;
    background-color: rgb(43, 43, 43);
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
