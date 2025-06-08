import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-900 to-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Lucky Meena
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            A seasoned IT professional turned developer — passionate about
            building efficient, modern web experiences.
          </p>
          <div className="space-x-4">
            <Link href="/resume">
              <Button className="text-lg px-6 py-3">View Resume</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-lg px-6 py-3">
                Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-950 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 text-lg">
            I began my career as a network technician and gradually transitioned into
            full-stack development. Over the years, I’ve worked on multiple real-world
            projects that strengthened my skills in both frontend and backend.
            I’m proficient in JavaScript, React, Node.js, and cloud technologies. 
            I love clean code, user-centric design, and automation.
          </p>
        </motion.div>
      </section>

      <section id="projects" className="py-20 px-6 bg-black text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-10">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Project 1: Portfolio Website</h3>
              <p className="text-gray-400 text-sm">
                Built this site using Next.js, Tailwind CSS, and Framer Motion. Fully responsive
                with modern animations and routing.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Project 2: IT Helpdesk Tool</h3>
              <p className="text-gray-400 text-sm">
                A ticketing system for internal IT teams. Built with React, Firebase Auth, and Firestore.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="resume" className="py-20 px-6 bg-gray-950 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <p className="text-gray-400 mb-4">
            Download my full resume in PDF format or check out my experience below.
          </p>
          <a
            href="/Lucky_Meena_Resume.pdf"
            download
            className="underline text-blue-400"
          >
            Download Resume
          </a>
        </motion.div>
      </section>

      <section id="contact" className="py-20 px-6 bg-black text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-400 mb-6">
            Let’s get in touch! You can reach me through email or LinkedIn.
          </p>
          <p className="mb-2">📧 lucky.meena@example.com</p>
          <p className="mb-2">🔗 <a href="https://linkedin.com/in/luckymeena" className="underline text-blue-400">LinkedIn</a></p>
          <p>🐱 <a href="https://github.com/luckymeena" className="underline text-blue-400">GitHub</a></p>
        </motion.div>
      </section>
    </main>
  );
}
