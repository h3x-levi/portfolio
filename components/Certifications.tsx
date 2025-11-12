
import React from 'react';
import { Certification as CertificationType } from '../types';
import AnimatedSection from './AnimatedSection';

const certifications: CertificationType[] = [
  {
    name: 'Mastering Ansible',
    issuer: 'Udemy',
    date: 'Issued Jun 2023',
    logo: '/images/udemy.svg',
    credentialUrl: 'https://www.udemy.com/certificate/UC-a8490d13-2b25-4e02-8283-f561990a319d/',
  },
  {
    name: 'Learn DevOps: Infrastructure Automation With Terraform',
    issuer: 'Udemy',
    date: 'Issued Apr 2023',
    logo: '/images/udemy.svg',
    credentialUrl: 'https://www.udemy.com/certificate/UC-8ce472a0-6796-4253-8af9-f08ec7ecf196/',
  },
  {
    name: 'Google Analytics',
    issuer: 'Google',
    date: 'Issued Dec 2022',
    logo: '/images/google.svg',
    credentialUrl: undefined,
  },
  {
    name: 'AWS Cloud for CEO\'s',
    issuer: 'Amazon Web Services',
    date: '',
    logo: '/images/aws.svg',
    credentialUrl: undefined,
  },
  {
    name: 'AWS MemoryDB for Redis',
    issuer: 'Amazon Web Services',
    date: '',
    logo: '/images/aws.svg',
    credentialUrl: undefined,
  },
  {
    name: 'Build With Amazon MemoryDB with Redis',
    issuer: 'Amazon Web Services',
    date: '',
    logo: '/images/aws.svg',
    credentialUrl: undefined,
  },
];

const CertificationCard: React.FC<{ cert: CertificationType }> = ({ cert }) => {
  const cardContent = (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        {cert.logo && <img src={cert.logo} alt={cert.issuer} className="w-12 h-12 object-contain" />}
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-100">{cert.name}</h3>
        <p className="text-sm text-slate-400">{cert.issuer}</p>
        {cert.date && <p className="text-xs text-slate-500 font-mono mt-1">{cert.date}</p>}
      </div>
    </div>
  );

  if (cert.credentialUrl) {
    return (
      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="block p-6 bg-[#112240] rounded-lg shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
        {cardContent}
      </a>
    );
  }

  return (
    <div className="p-6 bg-[#112240] rounded-lg shadow-lg">
      {cardContent}
    </div>
  );
};


const Certifications: React.FC = () => {
  return (
    <AnimatedSection id="certifications">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 relative inline-block">
        <span className="text-teal-300">04.</span> Certifications
        <span className="absolute bottom-[-10px] left-0 w-24 h-1 bg-teal-300/50"></span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Certifications;
