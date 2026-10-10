import React from 'react';
import Reveal from './AnimatedSection';
import { Icons } from './icons';

interface Cert {
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  logo: string;
}

const certifications: Cert[] = [
  { name: 'Mastering Ansible', issuer: 'Udemy', date: 'Jun 2023', logo: '/udemy.svg', credentialUrl: 'https://www.udemy.com/certificate/UC-a8490d13-2b25-4e02-8283-f561990a319d/' },
  { name: 'Infrastructure Automation with Terraform', issuer: 'Udemy', date: 'Apr 2023', logo: '/udemy.svg', credentialUrl: 'https://www.udemy.com/certificate/UC-8ce472a0-6796-4253-8af9-f08ec7ecf196/' },
  { name: 'Google Analytics', issuer: 'Google', date: 'Dec 2022', logo: '/google.svg' },
  { name: "AWS Cloud for CEOs", issuer: 'Amazon Web Services', logo: '/aws.svg' },
  { name: 'AWS MemoryDB for Redis', issuer: 'Amazon Web Services', logo: '/aws.svg' },
  { name: 'Build with Amazon MemoryDB for Redis', issuer: 'Amazon Web Services', logo: '/aws.svg' },
];

const Certifications: React.FC = () => (
  <section id="certifications" className="section" style={{ paddingTop: 0 }}>
    <div className="wrap">
      <Reveal>
        <h2 className="h2">Certifications</h2>
      </Reveal>
      <Reveal className="certs">
        {certifications.map((c) => {
          const body = (
            <>
              <span className="cert-logo"><img src={c.logo} alt="" /></span>
              <span className="cert-txt">
                <b>{c.name}</b>
                <span>{c.issuer}{c.date ? `, ${c.date}` : ''}</span>
              </span>
              {c.credentialUrl && (
                <span className="cert-go"><span>Verify</span> <Icons.ExternalLink size={14} /></span>
              )}
            </>
          );
          return c.credentialUrl ? (
            <a key={c.name} className="island cert" href={c.credentialUrl} target="_blank" rel="noopener noreferrer" aria-label={`${c.name}, ${c.issuer}. Verify credential`}>
              {body}
            </a>
          ) : (
            <div key={c.name} className="island cert">{body}</div>
          );
        })}
      </Reveal>
    </div>
  </section>
);

export default Certifications;
