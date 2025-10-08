import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-gradient-to-b from-zinc-900/40 to-black backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 text-gray-300">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2">
              
              <span className="font-extrabold text-2xl bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Magnified
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm text-gray-400 leading-relaxed">
              Transform your photos with AI-powered editing tools. Create stunning
              visuals effortlessly with just a few clicks.
            </p>

            <div className="mt-6 flex gap-4">
              {[
                {
                  href: "https://x.com/immortalcoder_",
                  label: "Twitter",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  ),
                },
                {
                  href: "https://github.com/rakesh0x/magnified",
                  label: "GitHub",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  ),
                },
              ].map(({ href, label, icon }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-white/10 bg-white/5 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
                  asChild
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    {icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {[
              {
                title: "Company",
                links: ["About", "Pricing", "Blog", "Careers"],
              },
              {
                title: "Help",
                links: ["FAQ", "Contact", "Privacy", "Terms"],
              },
              {
                title: "Resources",
                links: ["Documentation", "API Reference", "Community"],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gray-200 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((item) => (
                    <li key={item}>
                      <Link
                        href="/"
                        className="text-gray-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-cyan-300 font-medium">Magnified</span>. All
              rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="/"
                className="hover:text-cyan-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="hover:text-cyan-300 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
