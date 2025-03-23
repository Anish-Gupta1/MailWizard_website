"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface TutorialProps {
  id: string
}

export default function Tutorial({ id }: TutorialProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section id={id} className="py-20 bg-white">
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
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">How to Use MailWizard</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our tutorial to learn how to use MailWizard and supercharge your email productivity.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="aspect-video rounded-xl overflow-hidden shadow-xl"
        >
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/IjeHfRIgQKw"
              title="MailWizard Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {tutorialSteps.map((step, index) => (
            <div key={index} className="bg-purple-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const tutorialSteps = [
  {
    title: "Install the Extension",
    description: "Download the ZIP file from GitHub and load it as an unpacked extension in Chrome's developer mode.",
  },
  {
    title: "Add Your API Key",
    description: "Set up your OpenAI or Anthropic API key in the extension settings to enable AI-powered email generation.",
  },
  {
    title: "Boost Your Productivity",
    description: "Save hours each week by automating repetitive email tasks with MailWizard.",
  },
]

