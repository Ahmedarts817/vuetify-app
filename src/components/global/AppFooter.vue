<template>
  <div class="app-footer">
    <v-footer :app="true" absolute>
      <v-container>
        <div class="subscribe text-center">
          <h4 style="font-weight: bold; text-transform: uppercase">
            sbscribe to our newsletter
          </h4>
          <p style="font-size: 12px">
            Get the latest on new products and upcoming sales
          </p>
          <div class="form my-5">
            <input type="email" name="" id="" />
            <input type="submit" value="submit" />
          </div>
        </div>
      </v-container>
    </v-footer>
  </div>
</template>
<style scoped lang="scss">
.form {
  input[type="email"] {
    border: 1px solid #ddd;
    border-radius: 15px;
    margin-right: 10px;
    width: 400px;
    padding: 5px 10px;
  }
  input[type="submit"] {
    background-color: rgb(22, 24, 128);
    border-radius: 15px;
    padding: 5px 10px;
    color: white;
    font-size: 14px;
  }
}
</style>
