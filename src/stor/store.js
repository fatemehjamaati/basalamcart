import Vue from 'vue'
import Vuex from 'vuex'
import mydata2 from "@/components/Body/mydata.json";

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    mydata2,
  },

  getters:{
    total(state){
      return state.mydata2.reduce((a,c) => {
        let vendorsum = c.product.reduce((a,b)=> a + b.afterprice * b.count ,0);
        return a +vendorsum;
      },0);
    },

    sumproduct(state){
      return state.mydata2.reduce((a,c) => {
        let vendorsum = c.product.reduce((a,b)=> a + b.afterprice * b.count ,0);
        return  vendorsum;
      },0);
      


    }
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
    },
    
    deleteItem (state,id) {
      let product=null;
      let index = null;
      state.mydata2.forEach((vendor) => {
        product=vendor.product.find((p) => p.id==id); 
        index=vendor.product.findIndex((p) => p.id==id);
        if(product){
          vendor.product.splice(index,1)
        }
      
      });
      
    },

  },


  actions: {
    incrementCounter(context,a){
      context.commit("incrementCounter",a)
    },
    decrementCounter (context,b){
      context.commit("decrementCounter",b)
    },
    deleteItem(context,c){
      context.commit("deleteItem",c)
    }
  }
  
  })