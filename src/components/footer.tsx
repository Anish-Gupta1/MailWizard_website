import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-6 w-6" />
              <span className="font-bold text-xl">MailWizard</span>
            </div>
            <p className="text-purple-200 mb-6 max-w-md">
              MailWizard is a powerful Chrome extension that helps you automate
              your email workflow, save time, and increase productivity.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://github.com/Anish-Gupta1"
                  className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/Anishgu76418476"
                  className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
                >
                  {/* X logo as SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>X</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/anish-gupta-33677731b"
                  className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Work With Me</h3>
            <p className="text-purple-200 mb-4">
              Interested in working together? I&apos;d love to hear from you!
            </p>
            <Link
              href="mailto:anish.16.02.06@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-md text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Send Email</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-12 pt-6 text-center text-purple-300 text-sm">
          <p>© {new Date().getFullYear()} MailWizard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
