"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        <div className="grid grid-cols-1 gap-8">
          <div className="text-center">
            <p className="text-lg mb-6">
              Hey! I'm Muhaimin, a Management & Computer Science student at the University of Toronto, passionate about building AI-driven solutions, full-stack applications, and automation tools that enhance productivity and efficiency. 
              I specialize in AI/ML, software development, and cloud-based automation, 
              leveraging my skills to solve real-world problems.
            </p>

            <p className="text-lg mb-6">
              Beyond tech, I'm a competitive chess and basketball enthusiast. I follow high-level chess games and analyze strategies, 
              with a current Chess.com rating of ~1400. Magnus Carlsen is my biggest inspiration—his dominance and deep understanding of 
              the game are unmatched. In basketball, Luka Dončić is my favorite player right now, 
              but LeBron James remains my all-time favourite, so you can guess my favourite team.
            </p>

            <p className="text-lg mb-6">
              I'm always excited to connect with fellow developers and explore new opportunities. 
              Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-muted-foreground">
                  <a
s

                  >
                    muhaiminmemon@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-muted-foreground">Toronto, Canada</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

