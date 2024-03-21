<template>
  <div class="shop-with-us">
    <v-container class="py-12">
      <div class="title">
        <h2 class="mb-5"><span>Why Shop</span> WIth Us</h2>
      </div>
      <v-row>
        <v-col cols="3">
          <div class="card text-center">
            <div class="image">
              <img src="@/assets/images/free-shipping.png" alt="" />
              <div class="text text-white">
                <h4 class="mb-3">Free Shipping on first order</h4>
                <p>present sudpense on facilites</p>
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="card text-center">
            <div class="image">
              <img src="@/assets/images/weekly-flash-sales.png" alt="" />
              <div class="text text-white">
                <h4 class="mb-3">Weekly flash sale</h4>
                <p>present sudpense on facilites</p>
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="card text-center">
            <div class="image">
              <img src="@/assets/images/discount.png" alt="" />
              <div class="text text-white">
                <h4 class="mb-3">Annual payment program</h4>
                <p>present sudpense on facilites</p>
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="card text-center">
            <div class="image">
              <img src="@/assets/images/cash-back.png" alt="" />
              <div class="text text-white">
                <h4 class="mb-3">Cashback reward program</h4>
                <p>present sudpense on facilites</p>
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
.shop-with-us {
  background-image: url(../../assets/images/why-shop-with-us-banner.webp);
  background-repeat: repeat-x;
  background-size: cover;
  h2 {
    color: white;
    text-align: center;
    span {
      color: rgb(16, 255, 218);
    }
  }
  .card {
    h4 {
      line-height: 1.2;
    }
    p {
      font-size: 12px;
    }
    a {
      color: white;
      font-size: 12px;
      font-weight: bold;
    }
  }
}
</style>
