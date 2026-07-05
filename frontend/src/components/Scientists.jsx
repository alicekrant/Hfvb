import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

const Scientists = () => {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Principal Investigator',
      specialty: 'Epigenetic Reprogramming',
      bio: 'Leading research on partial reprogramming protocols and the boundary between rejuvenation and pluripotency. 15 years in aging biology.',
      links: [
        { type: 'Email', url: 'mailto:s.chen@longevitylab.org' },
        { type: 'Publications', url: '#' },
      ],
    },
    {
      name: 'Dr. Michael Torres',
      role: 'Senior Researcher',
      specialty: 'NAD+ Metabolism & Mitochondria',
      bio: 'Investigating NAD+ restoration therapies and mitochondrial quality control in aging cells. Expert in metabolic biochemistry.',
      links: [
        { type: 'Email', url: 'mailto:m.torres@longevitylab.org' },
        { type: 'Publications', url: '#' },
      ],
    },
    {
      name: 'Dr. Elena Volkov',
      role: 'Research Scientist',
      specialty: 'Cellular Senescence',
      bio: 'Characterizing senescent cell phenotypes and developing targeted SASP reduction strategies for healthspan extension.',
      links: [
        { type: 'Email', url: 'mailto:e.volkov@longevitylab.org' },
        { type: 'Publications', url: '#' },
      ],
    },
    {
      name: 'Dr. James Park',
      role: 'Computational Biologist',
      specialty: 'Epigenetic Clocks & Data Analysis',
      bio: 'Developing next-generation epigenetic clocks and machine learning models to predict biological age and intervention efficacy.',
      links: [
        { type: 'Email', url: 'mailto:j.park@longevitylab.org' },
        { type: 'Publications', url: '#' },
      ],
    },
  ];

  return (
    <section id="team" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Research Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Scientists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A multidisciplinary team of researchers dedicated to understanding and reversing the
            biology of aging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-cyan-600 font-semibold mb-1">{member.role}</div>
                  <div className="text-sm text-gray-500 mb-4">{member.specialty}</div>
                  <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    {member.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg text-sm font-medium hover:bg-cyan-100 transition-colors"
                      >
                        {link.type === 'Email' ? <Mail size={16} /> : <ExternalLink size={16} />}
                        {link.type}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-12 border border-cyan-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h3>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate researchers, postdocs, and collaborators
              interested in aging biology and longevity science.
            </p>
            <a
              href="mailto:careers@longevitylab.org"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Mail size={20} />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scientists;
