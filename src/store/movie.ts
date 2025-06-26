import { create } from "zustand";

interface MovieState {
  keyword: string;
  setKeyword: (k: string) => void;
}

export const useMovieStore = create<MovieState>((set) => ({
  keyword: "",
  setKeyword: (k) => set({ keyword: k }),
}));
