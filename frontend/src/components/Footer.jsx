import React from 'react';
import { Heart, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Longevity Lab
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Advancing the science of aging through rigorous research in epigenetic
              reprogramming, cellular rejuvenation, and longevity biology.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-cyan-400 fill-cyan-400" />
              <span>for human healthspan</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#research" className="hover:text-cyan-400 transition-colors">
                  Research Areas
                </a>
              </li>
              <li>
                <a href="#discoveries" className="hover:text-cyan-400 transition-colors">
                  Discoveries
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-cyan-400 transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-cyan-400 transition-colors">
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-400" />
                <a
                  href="mailto:contact@longevitylab.org"
                  className="hover:text-cyan-400 transition-colors"
                >
                  contact@longevitylab.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-400" />
                <a
                  href="mailto:research@longevitylab.org"
                  className="hover:text-cyan-400 transition-colors"
                >
                  research@longevitylab.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            © {currentYear} Longevity Lab. All rights reserved. 
            <span className="mx-2">•</span>
            Evidence-based aging biology research.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
