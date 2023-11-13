"use client";

import Contacts from "@/components/ui/contacts";
import Expertise from "@/components/ui/prices";
import Hero from "@/components/ui/hero";
import { useEffect } from "react";
import Work from "@/components/ui/work";

import StickyNavbar from "@/components/ui/sticky-navbar";
import GoUp from "@/components/ui/go-up";
import MountProvider from "@/providers/mount-provider";
import Phases from "@/components/ui/phases";
import ContactForm from "@/components/form/contact-form";
import Footer from "../../../components/ui/footer";

export default function Home() {
  useEffect(() => {
    (async () => {
      const { default: LocomotiveScroll } = await import("locomotive-scroll");
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <StickyNavbar />

      <Hero />
      <GoUp />

      <MountProvider />

      <Expertise />

      <Phases />

      {/*Contacts Block */}
      <ContactForm />

      {/* <Contacts /> */}
      <Footer />
    </main>
  );
}
