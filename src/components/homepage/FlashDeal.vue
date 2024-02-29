<template>
  <div class="flash-deal">
    <v-container>
      <h3 class="my-2">Flash Deal</h3>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lang="3"
          class="box mb-5"
          v-for="product in flashdeals"
          :key="product.id"
        >
          <v-card elevation="0" rounded style="border-radius: 10px">
            <img
              class="w-100"
              :src="product.thumbnail"
              alt=""
              style="height: 200px"
            />
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
              <v-btn class="my-2" variant="outlined" rounded="xl"
                >choose options</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ["flashdeals"],
};
</script>
