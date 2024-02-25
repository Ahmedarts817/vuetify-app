<template>
  <div class="nav-bar">
    <v-app-bar color="#02218f" height="fit-content" py-3>
      <!-- <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon> -->
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <img src="@/assets/images/logo.png" alt="" />
          </v-col>
          <v-col cols="5">
            <div class="position-relative" style="width: 90%">
              <input
                type="search"
                name="naveSearch"
                id="navSearch"
                placeholder="search the store"
                class="bg-white py-2 px-5"
                style="border-radius: 30px; width: 100%"
              />
              <v-icon
                color="black"
                style="
                  position: absolute;
                  right: 10px;
                  top: 50%;
                  transform: translateY(-50%);
                "
                >mdi-magnify</v-icon
              >
            </div>
          </v-col>
          <v-col cols="4">
            <div
              class="parent text-white d-flex justify-space-between align-center"
            >
              <div class="available">
                <span>available 24/7 at</span> <br />
                <strong>(090) 123-456-789</strong>
              </div>
              <div class="wishlists d-flex flex-column align-center">
                <v-icon>mdi-heart-outline</v-icon>
                <span>Wishlist</span>
              </div>
              <div class="wishlists d-flex flex-column align-center">
                <v-icon>mdi-account-outline</v-icon>
                <span>Sign in</span>
              </div>
              <div
                @click="openCart"
                class="wishlists d-flex flex-column align-center"
              >
                <v-badge
                  location="right top"
                  content="2"
                  color="blue"
                  offset-x="12"
                ></v-badge>
                <v-icon color="#ffb547">mdi-cart-outline</v-icon>
                <span>Cart</span>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="7">
            <ul class="links d-flex justify-space-between align-center">
              <li>Theme Demo</li>
              <li>Shop</li>
              <li>Product</li>
              <li>New in</li>
              <li>Must have</li>
              <li>Collections</li>
              <li>Pages</li>
              <li>Buy Ella</li>
            </ul>
          </v-col>
          <v-col cols="2"></v-col>
          <v-col cols="3" class="d-flex justify-end flex-end align-center">
            <div
              class="help d-flex me-3 pe-3"
              style="border-right: 1px solid rgb(67, 73, 111)"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-headset"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-user-headset fa-w-14 fa-3x me-1 color-blue"
                style="width: 20px"
              >
                <path
                  fill="#1564f3"
                  d="M320 352h-23.1a174.08 174.08 0 0 1-145.8 0H128A128 128 0 0 0 0 480a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32 128 128 0 0 0-128-128zM48 224a16 16 0 0 0 16-16v-16c0-88.22 71.78-160 160-160s160 71.78 160 160v16a80.09 80.09 0 0 1-80 80h-32a32 32 0 0 0-32-32h-32a32 32 0 0 0 0 64h96a112.14 112.14 0 0 0 112-112v-16C416 86.13 329.87 0 224 0S32 86.13 32 192v16a16 16 0 0 0 16 16zm160 0h32a64 64 0 0 1 55.41 32H304a48.05 48.05 0 0 0 48-48v-16a128 128 0 0 0-256 0c0 40.42 19.1 76 48.35 99.47-.06-1.17-.35-2.28-.35-3.47a64.07 64.07 0 0 1 64-64z"
                  class=""
                ></path>
              </svg>
              <span>Help</span>
            </div>
            <div class="lang d-flex align-center" id="">
              <span v-html="selectedLang[0].icon" class="me-2"></span>
              <span
                >{{ selectedLang[0].lang }} / {{ selectedLang[0].currency }}
              </span>
              <v-icon>mdi-chevron-down</v-icon>
              <v-menu activator="parent">
                <v-list v-model:selected="selectedLang">
                  <v-list-item
                    v-for="lang in langs"
                    :key="lang.lang"
                    :value="lang"
                    class="d-flex align-center"
                  >
                    <v-list-item-title>
                      <span v-html="lang.icon" class="me-2"></span>
                      {{ lang.lang }} / {{ lang.currency }}</v-list-item-title
                    >
                  </v-list-item>
                </v-list></v-menu
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data: () => ({
    selectedLang: [
      {
        icon: ` <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512; width: 20px"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                class="me-1"
                style="width:20px"
              >
                <circle
                  style="fill: #f0f0f0"
                  cx="256"
                  cy="256"
                  r="256"
                ></circle>
                <g>
                  <path
                    style="fill: #0052b4"
                    d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"
                  ></path>
                </g>
                <g>
                  <path
                    style="fill: #d80027"
                    d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z"
                  ></path>
                </g>
              </svg>`,
        lang: "EN",
        currency: "USD",
      },
    ],
    langs: [
      {
        icon: ` <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512; width: 20px"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                class="me-1"
                style="width:20px"
              >
                <circle
                  style="fill: #f0f0f0"
                  cx="256"
                  cy="256"
                  r="256"
                ></circle>
                <g>
                  <path
                    style="fill: #0052b4"
                    d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"
                  ></path>
                  <path
                    style="fill: #0052b4"
                    d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"
                  ></path>
                </g>
                <g>
                  <path
                    style="fill: #d80027"
                    d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z"
                  ></path>
                </g>
              </svg>`,
        lang: "EN",
        currency: "USD",
      },
      {
        icon: `<svg width="20px"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M29.324 35.378l-.578 2.052c-.059-.016-.117-.031-.172-.05c-.385-.127-.84-.069-.84.386c-.56-.121-.804.765-.197.966c0 .258 0 .455.396.524c.897.258 2.447.384 4.066.384c1.62 0 3.17-.126 4.079-.384c.385-.069.385-.267.385-.524c.605-.201.361-1.087-.198-.966c0-.455-.454-.513-.839-.386a2.394 2.394 0 0 1-.174.052l-.605-2.153l3.226 3.143l-.414-10.268c-.06-1.556-1.349-1.198-2.284-.638a2.934 2.934 0 0 1-1.412.497c-.671-1.222-.299-2.72-.787-3.159c-.229-.207-.924-.467-1.357-.493c-.247-.014-.207.205-.207.205c-.455-.131-.881-.075-1.086.077c-.193.144-.003 1.058.139.932c.343-.306.408-.222.614.113c.169.272-.212 1.451-.691 2.335a2.943 2.943 0 0 1-1.559-.507c-.936-.561-2.224-.918-2.285.638l-.414 10.268l3.194-3.044m2.675 2.316c-.368-.016-.742-.028-1.107-.042l.731-3.326c.119.105.242.211.375.313c.133-.104.258-.209.377-.314l.738 3.353c-.367.012-.744.016-1.114.016m-.862-4.292v-3.709c.35-.107.68-.246.878-.396c.179.153.476.286.797.388v3.774c-.005.006-.01.011-.015.019a5.662 5.662 0 0 1-.799.773a5.689 5.689 0 0 1-.743-.709l-.07-.08a.9.9 0 0 1-.048-.06m.061-6.461c.206-.684.216-1.27.073-1.478c-.164-.235-.398-.432-.669-.217c-.112.091-.081-.421.073-.522c.161-.107.522-.072.881.02c0 0-.031-.155.164-.146c.343.02.865.164 1.027.325c.128.127.287.469.252 1.335c-.027.616.131 1.344.342 1.763a4.487 4.487 0 0 1-1.342-.288c-.46.169-.911.269-1.348.288c.189-.277.426-.678.547-1.08m-2.239.924c.412.265.853.409 1.312.451l.161.012c.502.021 1.029-.075 1.568-.266c.543.19 1.07.286 1.576.266c.106-.006.212-.018.316-.033a2.87 2.87 0 0 0 1.148-.43c.84-.48 1.975-.795 2.164.328c-.193-.127-.468-.286-.584-.286l.392 9.348l-.192-.179l-.404-9.023c-.133.131-.527.458-.601.53l.335 7.871l-.268-.248l-.332-7.417c-.131.132-.396.324-.469.397l.262 6.519l-.781-.725l-.733-2.603c.69-1.469.593-2.766.593-2.766c-.07.014-.137.021-.207.021c-.485 0-1.561-.244-2.029-.574a.815.815 0 0 1-.162-.147a.872.872 0 0 1-.176.14c-.491.312-1.582.582-2.064.582c-.07 0-.139-.008-.205-.021c0 0-.101 1.299.592 2.768l-.758 2.689l-.751.682l.265-6.628c-.072-.075-.342-.271-.477-.405l-.338 7.53l-.272.248l.341-7.987c-.072-.073-.477-.405-.612-.54l-.409 9.144l-.197.179l.397-9.471c-.107 0-.348.133-.54.256c.249-.984 1.33-.673 2.139-.212" fill="#000000"></path><path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zM5.787 22.167h52.426C59.365 25.229 60 28.541 60 32s-.635 6.771-1.787 9.833H5.787C4.635 38.771 4 35.459 4 32s.635-6.771 1.787-9.833z" fill="#ff0000"></path></svg>`,
        lang: "AR",
        currency: "LE",
      },
    ],
  }),
  inject: ["Emitter"],
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
};
</script>
<style scoped>
input {
  outline: none;
}
.wishlists {
  color: #fc9e0f;
  cursor: pointer;
}
ul {
  list-style: none;
}
.lang {
  cursor: pointer;
}
</style>
