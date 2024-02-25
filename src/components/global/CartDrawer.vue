<template>
  <div class="drawer">
    <v-navigation-drawer
      :app="true"
      location="right"
      temporary
      v-model="drawer"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam
        tempore corrupti ipsam, magni cum, quidem obcaecati veritatis tenetur
        repellat sed exercitationem fugit odit, doloremque minus dolorem
        assumenda voluptate. Dolorum?
      </p></v-navigation-drawer
    >
  </div>
</template>
<script>
export default {
  inject: ["Emitter"],
  data() {
    return {
      drawer: false,
    };
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
  },
};
</script>
