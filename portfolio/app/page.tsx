import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiLinkedin } from "react-icons/si";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-2xl font-semibold">Tommy Tran</h1>
            <p className="text-gray-400">Software Engineer</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="mailto:txtran224@gmail.com"
              className="p-2 rounded-full hover:bg-gray-800"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/txtran224"
              className="p-2 rounded-full hover:bg-gray-800"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="w-5 h-5 text-blue-400" />
            </Link>
            <Link
              href="tel:302-373-0412"
              className="p-2 rounded-full hover:bg-gray-800"
            >
              <Phone className="w-5 h-5" />
            </Link>
            <Button variant="outline" className="ml-2">
              Resume
            </Button>
            <div className="flex items-center gap-1 ml-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-400">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Objective Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Objective</h2>
          <p className="text-gray-400">
            To secure a position as a Software Engineer where I can leverage my
            programming skills and knowledge of software development principles
            to contribute to innovative projects.
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Education</h2>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-medium text-white">
                    Code Differently Full-Stack Software Engineer Program
                  </h3>
                  <p className="text-gray-400">
                    Wilmington, DE | Oct 2024 - Dec 2024
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>
                  Comprehensive training in front-end (HTML, CSS) and back-end
                  (Java, TypeScript) development in a bootcamp training format
                  (50+ hours per week)
                </li>
                <li>Kan-Ban Application</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-medium text-white">
                    Associate's Degree in Applied Science in Business Accounting
                  </h3>
                  <p className="text-gray-400">
                    Delaware Technical Community College | 2018 - 2021
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>
                  Developed strong analytical skills through extensive data
                  analysis projects
                </li>
                <li>
                  Completed coursework in financial accounting, managerial
                  accounting, and business law
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Work Experience</h2>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-medium text-white">Service Technician</h3>
                  <p className="text-gray-400">
                    1 Hour Heating and Air, Wilmington, DE | 2022 - 2024
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>
                  Installed HVAC systems valued between $6,000 and $15,000 and
                  ensured high standards of quality and safety for customers
                </li>
                <li>
                  Diagnosed and resolved HVAC issues, enhancing customer
                  satisfaction and system performance through logic-based
                  procedures
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-medium text-white">
                    Online Store Manager
                  </h3>
                  <p className="text-gray-400">eBay and Amazon | 2021 - 2023</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>
                  Managed inventory, bookkeeping, and logistics for an online
                  store generating $200,000 to $300,000 in gross revenue
                  annually
                </li>
                <li>Optimized operations and enhanced user experience</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">
            Technical Skills & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-white mb-2">Languages</h3>
              <p className="text-gray-400">
                Java, TypeScript, HTML, CSS, SASS, React, NodeJS
              </p>
            </div>
            <div>
              <h3 className="text-white mb-2">Tools</h3>
              <p className="text-gray-400">
                Git, Visual Studio Code, HackerRank
              </p>
            </div>
            <div>
              <h3 className="text-white mb-2">Software</h3>
              <p className="text-gray-400">
                Microsoft Office (Excel, Word, PowerPoint)
              </p>
            </div>
            <div>
              <h3 className="text-white mb-2">Concepts</h3>
              <p className="text-gray-400">
                Algorithms, Data Structures, Object Oriented Programming, SDLC
              </p>
            </div>
            <div>
              <h3 className="text-white mb-2">Certifications</h3>
              <p className="text-gray-400">
                Responsive Web Design (Free Code Camp), Scrum
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-center gap-4 bg-black/50 backdrop-blur-sm">
          <button className="p-2 rounded-lg hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M12 3v12" />
              <path d="M8 11c-3.866 0-7 3.134-7 7 0 2.577 1.988 5 6 5 4.011 0 5-2.423 5-5" />
              <path d="M16 11c3.866 0 7 3.134 7 7 0 2.577-1.988 5-6 5-4.011 0-5-2.423-5-5" />
            </svg>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
