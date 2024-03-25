<template>
  <div class="new-products">
    <v-container fluid>
      <h3 class="mb-5">New Products</h3>
      <v-row>
        <v-col cols="7" v-if="!products.length" class="pt-14">
          <v-row
            ><v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader> </v-col
          ></v-row>
        </v-col>
        <v-col cols="7" v-else class="pt-14">
          <swiper
            navigation
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            :autoplay="{ delay: 3000 }"
            class="products-swiper px-9 pb-10"
          >
            <swiper-slide v-for="product in products" :key="product.id">
              <v-card elevation="0" rounded style="border-radius: 10px">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="image-parent"
                    style="height: 200px; overflow: hidden"
                  >
                    <img
                      class="w-100 h-100"
                      :src="product.thumbnail"
                      alt=""
                      :style="`transition: 0.5s all ease-in-out; scale: ${
                        isHovering ? 1.1 : 1
                      }`"
                      v-bind="props"
                    />
                  </div>
                </v-hover>
                <v-card-text>
                  <p class="description mb-3" style="min-height: 50px">
                    {{
                      product.description.split(" ").length <= 5
                        ? product.description
                        : product.description.split(" ").slice(0, 4).join(" ") +
                          " ..."
                    }}
                  </p>

                  <v-rating
                    readonly
                    v-model="product.rating"
                    color="orange-lighten-1"
                    size="x-small"
                  ></v-rating>
                  <p class="price mb-3">
                    <span style="text-decoration: line-through"
                      >${{ product.price }}
                    </span>
                    From
                    <span style="font-weight: bold; color: red">
                      ${{
                        Math.ceil(
                          product.price -
                            (product.price / 100) * product.discountPercentage
                        )
                      }}</span
                    >
                  </p>
                  <v-btn
                    class="my-2 pa-2"
                    variant="outlined"
                    size="large
                    "
                    rounded="xl"
                    >choose options</v-btn
                  >
                </v-card-text>
              </v-card>
            </swiper-slide>
          </swiper></v-col
        >
        <v-col cols="5"
          ><img src="../../assets/images/vr-banner.webp" alt=""
        /></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
//swiper sttyles
import "swiper/css";
import "swiper/css/navigation";

export default {
  props: ["products"],
  components: { Swiper, SwiperSlide, VSkeletonLoader },
  setup() {
    return {
      modules: [Navigation, Autoplay],
    };
  },
};
</script>
<style lang="scss">
.products-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    top: 45%;
    &::after {
      border: 1px solid black;
      border-radius: 50%;
      font-size: 14px;
      font-weight: bold;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      color: #000;
    }
  }
}
</style>
