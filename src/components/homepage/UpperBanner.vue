<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="cont text-white">
              <h3><span>Huge Savings </span>on UHD Televisions</h3>
              <p class="hint">save up to 70% on selected items*</p>

              <v-btn
                rounded="xl"
                size="x-large"
                variant="outlined"
                density="compact"
                class="mt-10 px-10"
                >Shop Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  height: 400px;
  background-image: url("../../assets/images/banner-bg.jpg");
  background-size: cover;
  background-position: -60px top;
  .cont {
    padding: 40px 0 0 100px;
    h3 {
      font-size: 40px;
      font-weight: 900;
      span {
        color: rgb(16, 255, 218);
      }
    }
    .hint {
      margin-top: 20px;
    }
  }
}
</style>
