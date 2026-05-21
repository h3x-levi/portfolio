import React from 'react';
import AnimatedSection from './AnimatedSection';

interface CertType {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo: string;
}

const certifications: CertType[] = [
  {
    name: 'Mastering Ansible',
    issuer: 'Udemy',
    date: 'Issued Jun 2023',
    logo: '/udemy.svg',
    credentialUrl: 'https://www.udemy.com/certificate/UC-a8490d13-2b25-4e02-8283-f561990a319d/',
  },
  {
    name: 'Infrastructure Automation With Terraform',
    issuer: 'Udemy',
    date: 'Issued Apr 2023',
    logo: '/udemy.svg',
    credentialUrl: 'https://www.udemy.com/certificate/UC-8ce472a0-6796-4253-8af9-f08ec7ecf196/',
  },
  {
    name: 'Google Analytics',
    issuer: 'Google',
    date: 'Issued Dec 2022',
    logo: '/google.svg',
  },
  {
    name: "AWS Cloud for CEO's",
    issuer: 'Amazon Web Services',
    date: '',
    logo: '/aws.svg',
  },
  {
    name: 'AWS MemoryDB for Redis',
    issuer: 'Amazon Web Services',
    date: '',
    logo: '/aws.svg',
  },
  {
    name: 'Build With Amazon MemoryDB with Redis',
    issuer: 'Amazon Web Services',
    date: '',
    logo: '/aws.svg',
  },
];

const Certifications: React.FC = () => {
  return (
    <AnimatedSection id="certifications" className="py-20 md:py-28 bg-stone-100/50 dark:bg-stone-900/30">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 mb-10">
          <span className="text-orange-600">04.</span> Certifications
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => {
            const inner = (
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex items-center justify-center overflow-hidden p-1.5">
                  <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain dark:brightness-90" />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-stone-900 dark:text-stone-100 font-semibold text-sm leading-snug">{cert.name}</h3>
                  <p className="text-stone-500 dark:text-stone-400 text-xs mt-0.5">{cert.issuer}</p>
                  {cert.date && <p className="text-stone-400 dark:text-stone-500 text-xs font-mono mt-1">{cert.date}</p>}
                </div>
                {cert.credentialUrl && (
                  <span className="flex-shrink-0 text-orange-600 dark:text-orange-400 text-xs font-medium mt-0.5">
                    Verify →
                  </span>
                )}
              </div>
            );

            if (cert.credentialUrl) {
              return (
                <a
                  key={index}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-xl p-5 hover:border-orange-300 dark:hover:border-orange-500 hover:shadow-md transition-[border-color,box-shadow,transform] duration-200 active:scale-98"
                >
                  {inner}
                </a>
              );
            }

            return (
              <div key={index} className="bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-xl p-5">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Certifications;
