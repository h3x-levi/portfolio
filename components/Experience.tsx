
import React from 'react';
import { Experience as ExperienceType } from '../types';
import AnimatedSection from './AnimatedSection';

interface CompanyExperience {
  company: string;
  totalPeriod: string;
  roles: ExperienceType[];
}

const amazonRoles: ExperienceType[] = [
  {
    role: 'DevOps Engineer',
    company: 'Amazon',
    period: 'Sep 2025 - Present · 3 mos',
    logo: '/images/amazon.svg',
    description: [
      'Building and scaling cloud infrastructure and DevOps pipelines.',
    ],
    tech: ['AWS', 'DevOps', 'Automation', 'Infrastructure'],
  },
  {
    role: 'QA Engineer',
    company: 'Amazon',
    period: 'Dec 2024 - Sep 2025 · 10 mos',
    logo: '/images/amazon.svg',
    description: [
      'Executed test case instructions and reported discrepancies on Fire TV and non-Amazon devices.',
      'Created detailed test cases and scripts for manual and automated testing using Testrail.',
      'Designed and maintained automation scripts using Selenium WebDriver, Java, and Python.',
    ],
    tech: ['Selenium', 'Python', 'JIRA', 'Testrail', 'QA Automation'],
  },
  {
    role: 'Device Associate',
    company: 'Amazon',
    period: 'Feb 2022 - Dec 2024 · 2 yrs 11 mos',
    logo: '/images/amazon.svg',
    description: [
        'Executed comprehensive test cases and reported discrepancies on Amazon Fire TV devices.',
        'Developed automation scripts with Selenium WebDriver, Java, and Python for regression testing.',
        'Tested apps and games on Fire TV to ensure adherence to Amazon content policies.',
        'Tracked and managed defects in JIRA, collaborating with stakeholders to resolve issues.',
    ],
    tech: ['Selenium', 'Python', 'Java', 'JIRA', 'Testrail', 'Linux', 'QA Automation'],
  },
];

const otherExperiences: ExperienceType[] = [
  {
    role: 'HR Generalist',
    company: 'MeFy Care',
    period: 'Jun 2019 - Jul 2020 · 1 yr 2 mos',
    description: [
      'Managed employee records and HR documentation systems, improving efficiency and accuracy.',
      'Developed and delivered engaging onboarding and training programs, boosting employee retention by 20%.',
      'Provided expert HR guidance and support to managers and employees.',
      'Collaborated with Senior Manager to shortlist and contact candidates, reducing time-to-hire by 30%.',
    ],
    tech: ['HRIS', 'Onboarding', 'HR Documentation', 'Recruitment'],
  },
  {
    role: 'Realtor',
    company: 'Self-employed',
    period: 'Jul 2020 - Feb 2022 · 1 yr 8 mos',
    description: [
      'Successfully listed and sold over 20 properties in 6 months.',
      'Demonstrated strong negotiation and problem-solving skills in real estate transactions.',
      'Developed deep understanding of local market trends and customer needs.',
      'Managed client relationships with professionalism and attention to detail.',
    ],
    tech: ['Sales', 'Negotiation', 'Real Estate', 'Market Analysis'],
  },
  {
    role: 'Jio Advisor (Customer Service)',
    company: 'Concentrix',
    period: 'Feb 2018 - Jun 2018 · 5 mos',
    logo: '/images/csx.svg',
    description: [
      'Handled all customer interactions with ownership and professionalism within established guidelines.',
      'Achieved 95% customer satisfaction rating through solution-focused communication.',
      'Reduced repeat inquiries by 10% through proactive customer education.',
    ],
    tech: ['Customer Service', 'Communication', 'Problem Solving'],
  },
];

const CompanyHeader: React.FC<{ company: string; totalPeriod: string; logo?: string }> = ({ company, totalPeriod, logo }) => (
  <div className="mb-8 relative pl-16 before:absolute before:left-5 before:top-5 before:w-0.5 before:h-full before:bg-slate-700">
    <div className="absolute left-0 top-3 w-10 h-10 bg-slate-800 border-2 border-teal-300 rounded-full flex items-center justify-center">
      {logo ? (
        <img src={logo} alt={company} className="w-6 h-6 object-contain" />
      ) : (
        <div className="w-3 h-3 bg-teal-300 rounded-full"></div>
      )}
    </div>
    <h3 className="text-2xl font-bold text-teal-300 mb-1">{company}</h3>
    <p className="text-sm text-slate-400 font-mono">Full-time · {totalPeriod}</p>
  </div>
);

const RoleItem: React.FC<{ experience: ExperienceType; isNested?: boolean }> = ({ experience, isNested = false }) => {
  return (
    <div className={`${isNested ? 'mb-8 ml-8 pl-8 relative before:absolute before:left-0 before:top-2 before:w-0.5 before:h-12 before:bg-slate-700' : 'mb-12 relative pl-16 before:absolute before:left-5 before:top-2 before:w-0.5 before:h-full before:bg-slate-700'}`}>
      {!isNested && (
        <div className="absolute left-0 top-2 w-10 h-10 bg-slate-800 border-2 border-teal-300 rounded-full flex items-center justify-center">
          {experience.logo ? (
            <img src={experience.logo} alt={experience.company} className="w-6 h-6 object-contain" />
          ) : (
            <div className="w-3 h-3 bg-teal-300 rounded-full"></div>
          )}
        </div>
      )}
      <h4 className={`${isNested ? 'text-lg' : 'text-xl'} font-bold text-slate-100 mb-1`}>{experience.role}</h4>
      <p className="text-sm text-slate-400 font-mono mb-4">{experience.period}</p>
      <ul className="space-y-2 mb-4">
        {experience.description.map((point, index) => (
          <li key={index} className="flex text-sm">
            <span className="text-teal-300 mr-3 mt-0.5">▹</span>
            <span className="text-slate-400">{point}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {experience.tech.map((tech, index) => (
          <span key={index} className="bg-teal-400/10 text-teal-300 text-xs font-mono px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience">
      <h2 className="text-3xl font-bold text-slate-100 mb-12 relative inline-block">
        <span className="text-teal-300">02.</span> Where I've Worked
        <span className="absolute bottom-[-10px] left-0 w-24 h-1 bg-teal-300/50"></span>
      </h2>
      <div className="max-w-3xl">
        {/* Amazon - grouped with nested roles */}
        <CompanyHeader company="Amazon" totalPeriod="3 yrs 10 mos" logo="/images/amazon.svg" />
        <div className="mb-12">
          {amazonRoles.map((role, index) => (
            <RoleItem key={index} experience={role} isNested={true} />
          ))}
        </div>

        {/* Other companies */}
        {otherExperiences.map((exp, index) => (
          <RoleItem key={index} experience={exp} isNested={false} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;