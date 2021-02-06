import Body from "@/components/Body/Body.vue";
import basket from "@/components/Body/basket/basket.vue";
import addresspage from "@/components/addresspage";
import PaymentPage from "@/components/PaymentPage";

export const routes = [
    {path: '/shopcart', component:Body},
    {path: '/basket', component:basket},
    {path: '/address', component:addresspage},
    {path: '/payment', component:PaymentPage},
]
