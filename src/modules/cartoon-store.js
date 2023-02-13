import { create } from "zustand";
import { getCartoons } from "../lib/api";

export const useCartoonStore = create((set, get) => ({
  cartoons: [],
  likedCartoons: [],
  getAll: async () => {
    const items = await getCartoons();
    set({ cartoons: items });
  },
  like: (id) => {
    const likedCartoons = get().likedCartoons;
    if (likedCartoons.includes(id)) {
      const removed = likedCartoons.filter((itemId) => itemId !== id);
      set({ likedCartoons: removed });
    } else {
      const added = [...likedCartoons, id];
      set({ likedCartoons: added });
    }
  },
}));
