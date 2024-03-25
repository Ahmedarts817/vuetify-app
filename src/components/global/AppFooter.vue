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
        <v-row class="mt-12">
          <v-col cols="3"
            ><v-card elevation="0">
              <v-card-title style="font-weight: bold" class="mb-5"
                >Shop</v-card-title
              >
              <v-card-text>Electronics</v-card-text>
              <v-card-text>Computers and laptops</v-card-text>
              <v-card-text> Mobiles and tablets</v-card-text>
              <v-card-text>Home applisances</v-card-text>
              <v-card-text>Groceries</v-card-text>
              <v-card-text>Home furniture</v-card-text>
              <v-card-text>Special offers</v-card-text>
            </v-card></v-col
          >
          <v-col cols="3"
            ><v-card elevation="0">
              <v-card-title style="font-weight: bold" class="mb-5"
                >Further info</v-card-title
              >
              <v-card-text>About</v-card-text>
              <v-card-text>Costumer service</v-card-text>
              <v-card-text> Mobiles and tablets</v-card-text>
              <v-card-text>Reward program</v-card-text>
              <v-card-text>Shipping and return </v-card-text>
              <v-card-text>Privacy policy</v-card-text>
              <v-card-text>Terms asnd conditions</v-card-text>
              <v-card-text>Blog</v-card-text>
            </v-card></v-col
          >
          <v-col cols="3"
            ><v-card elevation="0">
              <v-card-title style="font-weight: bold" class="mb-5"
                >Custoker service
              </v-card-title>
              <v-card-text>Search terms </v-card-text>
              <v-card-text>Sdvanced search</v-card-text>
              <v-card-text> Order and return </v-card-text>
              <v-card-text>Theme FAQ </v-card-text>
              <v-card-text>Consultant</v-card-text>
              <v-card-text>Store location</v-card-text>
            </v-card></v-col
          >
          <v-col cols="3">
            <img src="../../assets/images/footer-logo.webp" alt="" />
            <v-card-text class="d-flex">
              <svg
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="me-3"
              >
                <path
                  d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
                ></path>
              </svg>
              <span>658 Market place san fransisco california</span>
            </v-card-text>
            <v-card-text>
              <svg
                width="20px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone-alt"
                role="img"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-phone-alt fa-w-16 fa-7x me-3"
              >
                <path
                  fill="currentColor"
                  d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                  class=""
                ></path>
              </svg>
              <span>123-456-789</span>
            </v-card-text>
            <v-card-text
              ><svg
                width="20px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-envelope fa-w-16 fa-7x me-3"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  class=""
                ></path>
              </svg>
              <span>Ellamart@google.com</span></v-card-text
            >
            <ul
              style="list-style: none; font-size: 30px"
              class="d-flex text-center justify-center mt-5"
            >
              <li class="bg-darken-1">
                <v-icon class="me-2">mdi-facebook</v-icon>
              </li>
              <li><v-icon class="me-2">mdi-twitter</v-icon></li>
              <li><v-icon class="me-2">mdi-youtube</v-icon></li>
              <li><v-icon class="me-2">mdi-pinterest</v-icon></li>
              <li><v-icon class="me-2">mdi-wikipedia</v-icon></li>
            </ul>
          </v-col>
        </v-row>
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
