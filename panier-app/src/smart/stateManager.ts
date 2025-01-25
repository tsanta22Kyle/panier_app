import { create } from "zustand";

export const useProductStore = create((set) => ({
    productList: [],
    addProduct: (newproducts) =>
      set((state) => ({ productList: [...newproducts] }))
  }));

export const useCartStore = create((set)=>(
    {
        cartList:[],
        addItem: (item)=>set((state)=>({cartList: [...state.cartList,item]})),
        incrementCount : (id)=>set((state)=>({cartList: state.cartList.map((item)=>item.id == id ? {...item,count : item.count+1}: item )})),
        removeItem: (id)=>set((state)=>({
            cartList: state.cartList.filter((item)=>item.id !== id)
        })),
        removeAll: ()=>set((state)=>({
            cartList: state.cartList.filter((item)=>item.id === "tay be")
        })),
        discrementCount : (id)=>set((state)=>({
            cartList : state.cartList.map((item)=>item.id == id ? {...item,count : item.count-1}:item)
        }))
    }
))



// export const useVerifyStore