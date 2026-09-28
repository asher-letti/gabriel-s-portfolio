import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Download, FileCode, Mail, Phone, Github, Linkedin } from 'lucide-react';

interface Project {
  title: string;
  status: string;
  description: string;
  link?: string;
  linkText?: string;
}

interface Idea {
  title: string;
  description: string;
}

export default function App() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const downloadStandaloneHtml = () => {
    const link = document.createElement('a');
    link.href = '/portfolio.html';
    link.download = 'gabriel-mwendwa-portfolio.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projects: Project[] = [
    {
      title: 'Clinic Booking Assistant',
      status: 'Prototype',
      description:
        'WhatsApp and Telegram bot using retrieval-augmented generation (RAG) to automate patient appointment scheduling, clinic FAQs, and triage workflows.',
    },
    {
      title: 'Cedar LMS',
      status: 'Live',
      description:
        'Lightweight learning management system for tracking student course progress, grading, and coursework delivery. Built with Next.js and Supabase.',
      link: 'https://cedarlms.vercel.app',
      linkText: 'cedarlms.vercel.app',
    },
    {
      title: 'Tenda',
      status: 'Team prototype',
      description:
        'Blue-collar service directory connecting informal trade artisans and technicians with local homeowners and contractors. Developed collaboratively as a team prototype.',
    },
    {
      title: 'NSE Power BI Rebuild',
      status: 'Completed',
      description:
        'End-to-end data model restructuring of Nairobi Securities Exchange equity transaction data into a normalized star schema for reliable financial reporting and analytics.',
    },
    {
      title: 'Kenya Crop Yield Analysis',
      status: 'Completed',
      description:
        'Applied agricultural machine learning models (Prophet and XGBoost) to historical weather and soil records to predict regional crop yields and seasonal variability.',
    },
    {
      title: 'Chama & Business Automation',
      status: 'In progress',
      description:
        'n8n workflow suite automating monthly contribution registers, payment reconciliations, and member SMS/WhatsApp alerts for informal investment groups (chamas) and SMEs.',
    },
    {
      title: 'Attendance Register Automation',
      status: 'In progress',
      description:
        'Automated ETL pipeline using Python scripts and n8n webhooks to ingest raw biometric and roll-call logs, detect missing records, and generate consolidated reports.',
    },
    {
      title: 'Nova-Z',
      status: 'Hackathon demo (not fully working)',
      description:
        'Fast-paced hackathon project exploring agentic search and autonomous workflows. Built as an experimental demo; core integration was partial and not fully working.',
    },
  ];

  const ideas: Idea[] = [
    {
      title: 'LughaDeul',
      description:
        'A dual-language learning platform focused on indigenous Kenyan and regional African languages and everyday dialect fluency.',
    },
    {
      title: 'KSL Recognition',
      description:
        'A computer vision model leveraging hand landmark detection for real-time Kenyan Sign Language gesture interpretation.',
    },
    {
      title: 'Jumla Agent',
      description:
        'An automated procurement and price-comparison bot designed for retail shopkeepers ordering bulk goods from wholesale distributors.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#000000] dark:text-[#ffffff] font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Top Bar Navigation */}
      <header className="border-b border-black dark:border-white">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between gap-4">
          <a
            href="#hero"
            className="font-serif text-lg font-semibold tracking-tight text-black dark:text-white no-underline hover:opacity-80"
          >
            Gabriel Mwendwa
          </a>

          <div className="flex items-center gap-4 sm:gap-6 text-sm">
            <nav className="flex items-center gap-4 sm:gap-6" aria-label="Page navigation">
              <a
                href="#what-i-do"
                className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white no-underline transition-colors"
              >
                What I do
              </a>
              <a
                href="#about"
                className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white no-underline transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white no-underline transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white no-underline transition-colors font-medium"
              >
                Contact
              </a>
            </nav>

            <button
              onClick={() => setShowExportModal(true)}
              title="Get single self-contained HTML file"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-neutral-300 dark:border-neutral-700 px-2 py-1 cursor-pointer"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>HTML File</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-5 sm:px-6">
        {/* Section 1: Hero */}
        <section id="hero" className="py-14 sm:py-20">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 tracking-normal">
            Nairobi, Kenya
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] mb-5 text-black dark:text-white">
            Gabriel Mwendwa
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-black dark:text-white font-normal">
            Automation workflows, data and AI, web software. Co-founder of Samga Automations.
          </p>
        </section>

        {/* Section Divider */}
        <hr className="border-0 border-t border-black dark:border-white m-0" />

        {/* Section 2: What I do */}
        <section id="what-i-do" className="py-14 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight mb-10 text-black dark:text-white">
            What I do
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-1 text-black dark:text-white">
                Automation
              </h3>
              <p className="text-sm font-medium text-black dark:text-white mb-2">
                n8n, Python
              </p>
              <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                Building webhook pipelines, automated business logic, scheduled data syncing, and external API integrations to eliminate repetitive manual work.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold mb-1 text-black dark:text-white">
                Data &amp; AI
              </h3>
              <p className="text-sm font-medium text-black dark:text-white mb-2">
                Power BI, ML, LLM assistants
              </p>
              <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                Designing normalized star schema models, financial dashboards, predictive machine learning pipelines, and practical RAG-powered assistants for WhatsApp and Telegram.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold mb-1 text-black dark:text-white">
                Software &amp; web
              </h3>
              <p className="text-sm font-medium text-black dark:text-white mb-2">
                Next.js, Supabase
              </p>
              <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                Developing full-stack web applications with relational PostgreSQL schemas, secure user authentication, clean interfaces, and straightforward hosting.
              </p>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <hr className="border-0 border-t border-black dark:border-white m-0" />

        {/* Section 3: About */}
        <section id="about" className="py-14 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight mb-8 text-black dark:text-white">
            About
          </h2>

          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-neutral-900 dark:text-neutral-100">
            <p>
              I am a co-founder and AI engineer at Samga Automations, where we design reliable automation systems and AI workflows for organizations seeking operational efficiency.
            </p>
            <p>
              I am currently pursuing a Bachelor of Business Information Technology (BIT) at Kabarak University, with graduation scheduled for December 2026.
            </p>
            <p>
              I learn by building directly. I direct and accelerate development with AI coding tools, while maintaining rigorous understanding of what each project does, how its data flows, and why the architecture works.
            </p>
          </div>
        </section>

        {/* Section Divider */}
        <hr className="border-0 border-t border-black dark:border-white m-0" />

        {/* Section 4: Projects */}
        <section id="projects" className="py-14 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight mb-10 text-black dark:text-white">
            Projects
          </h2>

          <div className="space-y-10">
            {projects.map((project, idx) => (
              <article key={idx} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-serif text-lg font-semibold text-black dark:text-white">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-black dark:text-white hover:underline underline-offset-4 decoration-1 hover:decoration-2"
                      >
                        {project.title}
                        <ArrowUpRight className="w-4 h-4 inline-block" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono tracking-tight">
                    [{project.status}]
                  </span>
                </div>

                <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {project.description}
                  {project.link && (
                    <span className="block mt-1 text-sm">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-900 dark:text-neutral-100 underline underline-offset-2"
                      >
                        {project.linkText}
                      </a>
                    </span>
                  )}
                </p>
              </article>
            ))}
          </div>

          {/* Unbuilt Ideas */}
          <div className="mt-14 pt-8 border-t border-black dark:border-white">
            <h3 className="font-serif text-lg font-semibold mb-6 text-black dark:text-white">
              Ideas
            </h3>

            <div className="space-y-6">
              {ideas.map((idea, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-medium text-base text-black dark:text-white">
                      {idea.title}
                    </h4>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                      [Unbuilt]
                    </span>
                  </div>
                  <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {idea.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <hr className="border-0 border-t border-black dark:border-white m-0" />

        {/* Section 5: Contact */}
        <section id="contact" className="py-14 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight mb-4 text-black dark:text-white">
            Contact
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-neutral-900 dark:text-neutral-100 mb-8">
            Open to full-time roles, contract work, and technical partnerships.
          </p>

          <div className="border-t border-black dark:border-white divide-y divide-black dark:divide-white">
            {/* Email */}
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-sm text-neutral-600 dark:text-neutral-400 w-32 flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                Email
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:gabrielmwendwa61@gmail.com"
                  className="text-base font-medium text-black dark:text-white underline underline-offset-4 decoration-1 hover:decoration-2"
                >
                  gabrielmwendwa61@gmail.com
                </a>
                <button
                  onClick={() => copyToClipboard('gabrielmwendwa61@gmail.com', 'email')}
                  className="text-neutral-500 hover:text-black dark:hover:text-white cursor-pointer p-1"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-black dark:text-white" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-sm text-neutral-600 dark:text-neutral-400 w-32 flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                Phone
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="tel:0727779477"
                  className="text-base font-medium text-black dark:text-white underline underline-offset-4 decoration-1 hover:decoration-2"
                >
                  0727779477
                </a>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  (+254 727 779477)
                </span>
                <button
                  onClick={() => copyToClipboard('0727779477', 'phone')}
                  className="text-neutral-500 hover:text-black dark:hover:text-white cursor-pointer p-1"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-black dark:text-white" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* GitHub */}
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-sm text-neutral-600 dark:text-neutral-400 w-32 flex items-center gap-1.5">
                <Github className="w-4 h-4" />
                GitHub
              </span>
              <a
                href="https://github.com/asher-letti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-base font-medium text-black dark:text-white underline underline-offset-4 decoration-1 hover:decoration-2"
              >
                github.com/asher-letti
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* LinkedIn */}
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-sm text-neutral-600 dark:text-neutral-400 w-32 flex items-center gap-1.5">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </span>
              <a
                href="https://linkedin.com/in/gabriel-mwendwa-250a93250"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-base font-medium text-black dark:text-white underline underline-offset-4 decoration-1 hover:decoration-2"
              >
                linkedin.com/in/gabriel-mwendwa-250a93250
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Location */}
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-sm text-neutral-600 dark:text-neutral-400 w-32">
                Location
              </span>
              <span className="text-base text-neutral-800 dark:text-neutral-200">
                Nairobi, Kenya
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black dark:border-white py-8 mt-12">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-baseline sm:items-center justify-between gap-4 text-xs text-neutral-600 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} Gabriel Mwendwa</p>
          <div className="flex items-center gap-4">
            <button
              onClick={downloadStandaloneHtml}
              className="inline-flex items-center gap-1 hover:text-black dark:hover:text-white cursor-pointer underline underline-offset-2"
            >
              <Download className="w-3.5 h-3.5" />
              Download single-file HTML
            </button>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </footer>

      {/* Export / Standalone HTML Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-black border border-black dark:border-white p-6 max-w-lg w-full space-y-4">
            <div className="flex items-center justify-between border-b border-black dark:border-white pb-3">
              <h3 className="font-serif text-lg font-semibold text-black dark:text-white">
                Standalone HTML File
              </h3>
              <button
                onClick={() => setShowExportModal(false)}
                className="text-sm font-mono hover:opacity-70 cursor-pointer"
                aria-label="Close modal"
              >
                [✕]
              </button>
            </div>

            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              This is a 100% self-contained single HTML file with inline CSS and zero external JavaScript dependencies. You can host it immediately on Vercel, GitHub Pages, or attach it directly in an email to contacts.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={downloadStandaloneHtml}
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white dark:bg-white dark:text-black text-sm font-medium cursor-pointer hover:opacity-90"
              >
                <Download className="w-4 h-4" />
                Download portfolio.html
              </button>

              <a
                href="/portfolio.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-black dark:border-white text-sm font-medium text-black dark:text-white cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900 no-underline"
              >
                <ArrowUpRight className="w-4 h-4" />
                Open Standalone File
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
