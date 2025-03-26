import Link from "next/link";
import Image from "next/image";
import { socialLinks, footerSections } from "@/src/data/footer";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Bottom Footer (primero) */}
        <div className="mb-8 flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" className="mb-2">
              <Image
                src="/ps-logo-text-flex.svg"
                alt="PartySpot Logo"
                width={150}
                height={50}
                className="h-auto"
              />
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Main Footer Content (segundo) */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
          {footerSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="mb-4 text-center text-lg font-semibold md:text-left">
                {section.title}
              </h3>
              <ul className="space-y-2 text-center md:text-left">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 transition-colors hover:text-pink-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="my-8 border-t border-gray-200"></div>
        <div className="mt-8 flex justify-center">
          <p className="text-sm text-gray-600">
            ©PartySpot. Hecho en San Miguel de Tucumán, Tucumán, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
