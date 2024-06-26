<template>
  <div class="flash-deal pa-5">
    <h3 class="mb-5 text-bold" :style="`color:${color}`">{{ title }}</h3>
    <v-container fluid>
      <v-row>
        <v-col cols="12" v-if="!products.length">
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader type="image, article"> </v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <swiper
            :pagination="{ clickable: true }"
            navigation
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            :autoplay="{ delay: 3000 }"
            class="products-swiper px-15 pb-10"
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
                      product.description.split(" ").length <= 10
                        ? product.description
                        : product.description.split(" ").slice(0, 8).join(" ") +
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
                  <router-link
                    :to="{ name: 'product', params: { id: product.id } }"
                  >
                    <v-btn class="my-2" variant="outlined" rounded="xl"
                      >choose options</v-btn
                    >
                  </router-link>
                </v-card-text>
              </v-card>
            </swiper-slide>
          </swiper></v-col
        >
      </v-row></v-container
    >
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
//swiper sttyles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
export default {
  props: {
    products: { type: Array },
    title: { type: String },
    color: { type: String },
  },
  components: { Swiper, SwiperSlide, VSkeletonLoader },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
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
