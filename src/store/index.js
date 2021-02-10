import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    data: [],
  },

  getters: {
    data(state) {
      return state.data;
    },
    total(state) {
      return state.data.reduce((a, c) => {
        let vendorsum = c.products.reduce((a, b) => a + b.price * b.count, 0);
        return a + vendorsum;
      }, 0);
    },
    totalCount(state) {
      return state.data.reduce((a, c) => {
        let vendorsum = c.products.reduce((a, b) => a + b.count, 0);
        return a + vendorsum;
      }, 0);
    },

    sumproduct(state) {
      state.data.forEach((vendor) => {
        vendor.totalPrice = vendor.products.reduce((total, item) => {
          return total + item.count * item.price;
        }, 0);
        vendor.count = vendor.products.reduce((total, item) => {
          return total + item.count;
        }, 0);
      });
    },
  },

  mutations: {
    inseretData(state, data) {
      data.forEach((vendor) => {
        vendor.totalPrice = null;
        vendor.count = null;
        vendor.products.forEach((product) => {
          product.count = 1;
        });
      });
      state.data = data;
    },
    incrementCounter(state, id) {
      let product = null;
      state.data.forEach((vendor) => {
        product = vendor.products.find((p) => p.id == id);
        if (product)
          if (product.count < product.stock) {
            product.count++;
          }
      });
    },
    decrementCounter(state, id) {
      let product = null;
      state.data.forEach((vendor) => {
        product = vendor.products.find((p) => p.id == id);
        if (product) {
          if (product.count >= 2) {
            product.count--;
          }
        }
      });
    },

    deleteItem(state, id) {
      let product = null;
      let index = null;
      state.data.forEach((vendor) => {
        product = vendor.products.find((p) => p.id == id);
        index = vendor.products.findIndex((p) => p.id == id);
        if (product) {
          vendor.products.splice(index, 1);
        }
      });
    },
  },

  actions: {
    incrementCounter(context, id) {
      context.commit("incrementCounter", id);
    },
    decrementCounter(context, id) {
      context.commit("decrementCounter", id);
    },
    deleteItem(context, id) {
      context.commit("deleteItem", id);
    },
    inseretData(context, data) {
      context.commit("inseretData", data);
    },
  },
});
