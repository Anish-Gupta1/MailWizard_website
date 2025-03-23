import React from "react";
import Head from "next/head";
import Link from "next/link";


const DocsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>MailWizard - Documentation</title>
        <meta
          name="description"
          content="Documentation for MailWizard Chrome Extension"
        />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-purple-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span className="ml-2 text-xl font-bold text-purple-600">
              MailWizard
            </span>
          </div>
          <nav className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600">
              Home
            </Link>
            <Link href="/docs" className="text-purple-600 font-medium">
              Docs
            </Link>
            <Link
              href="/#tutorial"
              className="text-gray-700 hover:text-purple-600"
              scroll={false}
            >
              Tutorial
            </Link>
            <Link
              href="/#feedback"
              className="text-gray-700 hover:text-purple-600"
              scroll={false}
            >
              Feedback
            </Link>
          </nav>
          <a
            href="/install"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Install Extension
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b">
            <h1 className="text-3xl font-bold text-gray-900">Documentation</h1>
            <p className="mt-1 text-gray-500">
              Everything you need to know about using MailWizard
            </p>
          </div>

          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold text-purple-600 mb-4">
                  Getting Started
                </h2>

                <div className="prose">
                  <h3 className="text-lg font-medium text-gray-900 mt-4">
                    Installation
                  </h3>
                  <p className="text-gray-700">
                    Download the ZIP file from our GitHub repository and install
                    it as an unpacked extension:
                  </p>
                  <ol className="list-decimal pl-5 mt-2 text-gray-700">
                    <li>Download the ZIP file from our GitHub repository</li>
                    <li>Extract the ZIP file to a folder on your computer</li>
                    <li>
                      Open Chrome and navigate to{" "}
                      <code className="bg-gray-100 px-1">
                        chrome://extensions
                      </code>
                    </li>
                    <li>
                      Enable "Developer mode" using the toggle in the top-right
                      corner
                    </li>
                    <li>
                      Click "Load unpacked" and select the extracted folder
                    </li>
                    <li>
                      The MailWizard icon should now appear in your Chrome
                      toolbar
                    </li>
                  </ol>

                  <h3 className="text-lg font-medium text-gray-900 mt-6">
                    API Setup
                  </h3>
                  <p className="text-gray-700">
                    MailWizard requires an OpenAI or Anthropic API key to
                    generate email content:
                  </p>
                  <ol className="list-decimal pl-5 mt-2 text-gray-700">
                    <li>Click on the MailWizard icon in your Chrome toolbar</li>
                    <li>Paste your API key in the field</li>
                    <li>
                      The extension will automatically detect if it's an
                      Anthropic or OpenAI API key
                    </li>
                    <li>Click "Submit" to complete setup</li>
                  </ol>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-purple-600 mb-4">
                  Using MailWizard
                </h2>

                <div className="prose">
                  <h3 className="text-lg font-medium text-gray-900 mt-4">
                    Basic Usage
                  </h3>
                  <p className="text-gray-700">
                    To generate an email using MailWizard:
                  </p>
                  <ol className="list-decimal pl-5 mt-2 text-gray-700">
                    <li>Open Gmail and click "Compose" to start a new email</li>
                    <li>
                      Click the MailWizard icon that appears in the compose
                      window
                    </li>
                    <li>
                      Enter a prompt describing the email you want to write
                    </li>
                    <li>
                      Example: "Write a polite follow-up email to a client who
                      hasn't responded in two weeks"
                    </li>
                    <li>
                      Click "Generate" and wait for the AI to create your email
                    </li>
                    <li>
                      The generated email will appear directly in your compose
                      window
                    </li>
                    <li>Edit as needed before sending</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t pt-6">
              <h2 className="text-xl font-semibold text-purple-600 mb-4">
                Important Note for Anthropic API Users
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
                <p className="text-yellow-900">
                  If you are using the Anthropic API, make sure to run the
                  Anthropic backend service in the background. You can find the
                  required code and setup instructions in this{" "}
                  <a
                    href="https://github.com/Anish-Gupta1/claude_api_mailwizard-"
                    className="text-purple-600 underline"
                  >
                    repository
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span className="ml-2 text-lg font-semibold text-purple-600">
                MailWizard
              </span>
            </div>
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} MailWizard. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DocsPage;
