import { ProjectItem, projects } from "@/service/get-data";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ProjectProps {
  items: ProjectItem[];
  filterItems: (category: string) => void;
  active: string;
}

const useProject = create(
  persist<ProjectProps>(
    (set) => ({
      items: [...projects],
      filterItems: (category: string) => {
        let filteredList = projects.filter(
          (item) => item.category === category
        );
        if (category === "All") {
          filteredList = projects;
        }
        set({ items: [...filteredList], active: category });
      },
      active: "",
    }),
    {
      name: "project-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProject;
