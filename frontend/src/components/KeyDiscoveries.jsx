import React from 'react';
import { Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

const KeyDiscoveries = () => {
  const discoveries = [
    {
      year: '2026',
      status: 'Breakthrough',
      title: 'First Human Epigenetic Reprogramming Trial',
      description:
        'FDA-approved ER-100 trial using Yamanaka factors (OSKM) begins human testing for optic neuropathies and age-related vision loss.',
      impact: 'Clinical translation milestone',
      highlight: true,
    },
    {
      year: '2025',
      status: 'Validated',
      title: '75% Age Reversal in Animal Tissues',
      description:
        'Sinclair lab demonstrates dramatic tissue rejuvenation within weeks, restoring vision in blind animal models using OSK factors.',
      impact: 'Functional age reversal confirmed',
    },
    {
      year: '2025',
      status: 'Innovation',
      title: 'Chemical Reprogramming Without Genes',
      description:
        'Harvard team identifies six small-molecule cocktails that reverse transcriptomic aging in human cells, bypassing genetic manipulation.',
      impact: 'Safer clinical pathway',
    },
    {
      year: '2024',
      status: 'Validated',
      title: '109% Lifespan Extension via OSK',
      description:
        'Systemic OSK gene therapy in aged mice increases median remaining lifespan by 109% with improved frailty scores and healthspan.',
      impact: 'Longevity intervention validated',
    },
  ];

  const positions = [
    {
      number: '01',
      text: 'Epigenetic clocks correlate with biological age across tissues and species, but causal relationships between methylation drift and aging remain unresolved.',
    },
    {
      number: '02',
      text: 'Partial reprogramming reverses epigenetic age markers. The boundary between rejuvenation and identity loss is incompletely characterized.',
    },
    {
      number: '03',
      text: 'NAD+ decline impairs mitochondrial function and accelerates senescence. Restoration therapies show promise but require multi-hallmark targeting.',
    },
    {
      number: '04',
      text: 'Cellular senescence functions as both driver and consequence of aging. SASP reduction extends healthspan but mechanisms remain complex.',
    },
  ];

  return (
    <section id="discoveries" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Key Discoveries */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Major Breakthroughs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recent Discoveries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Landmark findings from 2024–2026 that are reshaping our understanding of aging
              and longevity.
            </p>
          </div>

          <div className="space-y-6">
            {discoveries.map((discovery, index) => (
              <div
                key={index}
                className={`group rounded-2xl p-8 transition-all duration-300 hover:shadow-lg ${
                  discovery.highlight
                    ? 'bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-4xl font-bold text-cyan-600">{discovery.year}</div>
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-xs font-semibold text-cyan-700">
                      {discovery.status === 'Breakthrough' && <Sparkles size={14} />}
                      {discovery.status === 'Validated' && <CheckCircle size={14} />}
                      {discovery.status === 'Innovation' && <TrendingUp size={14} />}
                      {discovery.status}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {discovery.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{discovery.description}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600">
                      <TrendingUp size={16} />
                      {discovery.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Positions */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
              Scientific Positions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Know
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear statements on the current state of evidence, with explicit acknowledgment of
              unresolved questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="text-3xl font-bold text-cyan-600">{position.number}</div>
                  <p className="text-gray-700 leading-relaxed pt-1">{position.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyDiscoveries;
