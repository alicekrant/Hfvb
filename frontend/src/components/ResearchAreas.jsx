import React from 'react';
import { Dna, Activity, Zap, Brain, Shield, Clock } from 'lucide-react';

const ResearchAreas = () => {
  const areas = [
    {
      icon: Dna,
      title: 'Epigenetic Reprogramming',
      description:
        'Investigating partial reprogramming using Yamanaka factors (OSK) to reverse cellular aging without losing cell identity.',
      stats: '109% lifespan increase in aged mice',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Activity,
      title: 'NAD+ & Mitochondrial Function',
      description:
        'Targeting NAD+ restoration to enhance mitochondrial health and reverse age-related metabolic decline.',
      stats: '50% NAD+ decline reversed',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Cellular Senescence',
      description:
        'Understanding and eliminating senescent cells that drive chronic inflammation and tissue dysfunction.',
      stats: 'SASP reduction protocols',
      color: 'from-teal-500 to-blue-500',
    },
    {
      icon: Clock,
      title: 'Epigenetic Clocks',
      description:
        'Developing DNA methylation-based biomarkers to measure biological age and validate anti-aging interventions.',
      stats: 'Clinical integration 2026',
      color: 'from-cyan-600 to-blue-600',
    },
    {
      icon: Brain,
      title: 'Neuroinflammation & Aging',
      description:
        'Protecting neural tissue from age-related inflammation and restoring cognitive function through OSK therapy.',
      stats: 'Vision restoration achieved',
      color: 'from-blue-600 to-teal-600',
    },
    {
      icon: Zap,
      title: 'Combination Therapies',
      description:
        'Synergistic approaches combining rapamycin, acarbose, and GLP-1 agonists for multi-system rejuvenation.',
      stats: '36.6% lifespan boost',
      color: 'from-teal-600 to-cyan-600',
    },
  ];

  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
            Research Areas
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Investigate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six interconnected domains of aging biology, each targeting fundamental mechanisms
            of cellular decline and rejuvenation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm font-semibold text-cyan-600">{area.stats}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
