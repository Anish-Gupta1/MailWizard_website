"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/button";
import { motion, useInView, useAnimation } from "framer-motion";
import { redirectToExtension } from "./installExtension";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section className="h-screen flex items-center justify-center px-4 md:pt-40 md:pb-28">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6">
          AI-Powered Email Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Type a prompt, get a perfect email. MailWizard generates polished
            emails directly in your compose box—no copy-pasting required. Save
            time and stay in your workflow with AI that works where you do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={redirectToExtension} className="bg-purple-600 hover:bg-purple-700 text-lg py-6 px-8">
              Install Extension
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
