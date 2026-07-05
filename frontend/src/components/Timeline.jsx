import React from 'react';
import { Calendar, Beaker, Microscope, Award } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      year: '2026',
      quarter: 'Q1',
      icon: Award,
      title: 'FDA Approval: ER-100 Human Trial',
      description:
        'Life Biosciences receives approval for first human epigenetic reprogramming trial targeting optic neuropathies.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      year: '2025',
      quarter: 'Q4',
      icon: Beaker,
      title: 'Chemical Reprogramming Discovery',
      description:
        'Harvard identifies small-molecule cocktails that reverse transcriptomic aging without genetic modification.',
      color: 'from-blue-500 to-teal-500',
    },
    {
      year: '2025',
      quarter: 'Q2',
      icon: Microscope,
      title: 'Neuroinflammation Protection via OSK',
      description:
        'Sinclair lab demonstrates OSK factors protect against neuroinflammation and preserve visual acuity in MS models.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      year: '2024',
      quarter: 'Q3',
      icon: Calendar,
      title: '109% Lifespan Extension Published',
      description:
        'Rejuvenate Bio announces OSK gene therapy doubles remaining lifespan in aged mice with improved healthspan.',
      color: 'from-cyan-600 to-blue-600',
    },
  ];

  return (
    <section id="timeline" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
            Research Timeline
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Journey to Clinical Translation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From laboratory discovery to human trials: key milestones in aging biology research.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-300 to-blue-300 transform -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4 justify-start md:justify-start">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center`}
                        >
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="text-left">
                          <div className="text-2xl font-bold text-gray-900">{milestone.year}</div>
                          <div className="text-sm text-cyan-600 font-semibold">
                            {milestone.quarter}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-left">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block relative z-10">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-4 border-white shadow-lg" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
