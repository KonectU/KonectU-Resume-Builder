import { ResumeData } from "@Konect U -resume/schema";
import { create } from "zustand";//zustand

export type ArtboardStore = {
  resume: ResumeData;
  setResume: (resume: ResumeData) => void;
};

export const useArtboardStore = create<ArtboardStore>()((set) => ({
  resume: null as unknown as ResumeData,
  setResume: (resume) => {
    set({ resume });
  },
}));
