<template>
  <div class="flash-deal">
    <v-container>
      <h3>Flash Deal</h3>
      <v-row>
        <v-col
          cols="3"
          class="box mb-5"
          v-for="product in flashdeals"
          :key="product.id"
        >
          <v-card>
            <img
              class="w-100"
              :src="product.thumbnail"
              alt=""
              style="height: 200px"
            />
            <v-card-text>{{
              product.description.split(" ").length <= 10
                ? product.description
                : product.description.split(" ").slice(0, 8).join(" ") + " ..."
            }}</v-card-text>
            <v-rating
              readonly
              v-model="product.rating"
              color="orange-lighten-1"
              size="x-small"
            ></v-rating>
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
