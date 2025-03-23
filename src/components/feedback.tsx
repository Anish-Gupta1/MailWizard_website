"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import FeedbackCard from "./feedback-card";
import Link from "next/link";

interface FeedbackProps {
  id: string;
}

interface Feedback {
  id: string;
  content: string;
  user: {
    name: string | null;
    email: string | null;
    image: string | null;
  };
}

export default function Feedback({ id }: FeedbackProps) {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch("/api/feedback", { cache: "no-store" });
        if (response.ok) {
          const data = await response.json();
          setFeedbacks(data);
        }
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <section id={id} className="py-20 bg-purple-50">
      <div className="container mx-auto max-w-6xl px-4" ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our growing community of users discovering how MailWizard
            transforms their email workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <FeedbackCard
                name={feedback.user.name || "Anonymous"}
                email={feedback.user.email || ""}
                content={feedback.content}
                avatar={
                  feedback.user.image || "/placeholder.svg?height=100&width=100"
                }
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/feedback"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Share Your Experience
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
