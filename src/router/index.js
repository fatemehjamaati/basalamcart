import Body from "@/components/Body/Body.vue";
import basket from "@/components/Body/basket/basket.vue";
import addresspage from "@/components/addresspage";
import PaymentPage from "@/components/PaymentPage";

export const routes = [
  { path: "/", component: Body, name: "home" },
  { path: "/basket", component: basket },
  { path: "/address", component: addresspage, name: "address" },
  { path: "/payment", component: PaymentPage },
];
