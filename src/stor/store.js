import Vue from 'vue'
import Vuex from 'vuex'
import mydata2 from "@/components/Body/mydata.json";

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    mydata2,
  },
  mutations: {
    incrementCounter (state,id) {
      let product=null;
      state.mydata2.forEach((vendor) => {
        product=vendor.product.find((p) => p.id==id);
        if(product){product.count++;}
        
      });
    },
    decrementCounter (state,id){
      let product=null;
      state.mydata2.forEach((vendor) => {
        product=vendor.product.find((p) => p.id==id);
        if(product){
          
          if(product.count>=2) {product.count--;}
        }
        
      });
    }
  },
  actions: {
    incrementCounter(context,a){
      context.commit("incrementCounter",a)
    },
    decrementCounter (context,b){
      context.commit("decrementCounter",b)
    }
  }
  })