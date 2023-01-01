import create from "zustand";

const useUserStore = create((set) => ({
  user: {},
  addUser: (newUser) => set(() => ({ user: newUser })),
  updateUser: (newUser) =>
    set((state) => ({ user: { ...state.user, ...newUser } })),
  removeUser: () =>
    set(() => ({
      user: {
        profile: {},
        package: {},
      },
    })),
}));
export default useUserStore;
