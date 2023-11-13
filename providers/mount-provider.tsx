"use client";

import { useEffect, useState } from "react";

import ProjectsCollage from "@/components/ui/projects-collage";
import AboutExperience from "@/components/ui/about-experience";

const MountProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <AboutExperience />;
};

export default MountProvider;
