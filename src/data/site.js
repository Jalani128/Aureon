const img = (n) => `${import.meta.env.BASE_URL}img/${n}.jpg`

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services', dropdown: true },
  { label: 'Dynamics 365', to: '/services/microsoft-dynamics-365' },
  { label: 'SupportOS', to: '/services/supportos' },
  { label: 'Energy & Resources', to: '/industries/energy-resources' },
]

export const CONTACT = {
  address: 'Riyadh, Kingdom of Saudi Arabia',
  languages: 'Arabic & English support',
  web: 'aureonvt.com',
}

export const TECH_MARQUEE = [
  'Microsoft 365', 'Dynamics 365', 'Azure', 'AWS', 'Power BI', 'Power Automate', 'Fortinet', 'Veeam', 'Cisco', 'Ubiquiti',
]

export const HERO_STATS = [
  ['Aureon', 'From cloud to cable'],
  ['Dynamics 365', 'ERP & CRM'],
  ['SupportOS', 'Managed support'],
  ['Energy', '& Resources'],
  ['Infrastructure', 'Networks & CCTV'],
]

export const PROBLEMS = [
  {
    chip: 'Our e-invoicing isn’t ZATCA Phase 2 ready',
    title: 'Get ZATCA Phase 2 ready',
    text: 'We connect your invoicing to the Fatoora platform, inside Dynamics 365 or alongside your current system.',
    steps: ['Review your current invoicing and wave deadline', 'Configure, onboard and test the integration', 'Go live and monitor submissions'],
    tags: ['Dynamics 365', 'ZATCA'],
    image: img('problem-zatca'), link: '/services/microsoft-dynamics-365',
  },
  {
    chip: 'IT issues keep coming back',
    title: 'Fix the recurring faults',
    text: 'A support operating system with named engineers, SLAs and preventive maintenance.',
    steps: ['Audit what is installed and who owns it', 'Set up tickets, SLAs and monitoring', 'Review results monthly'],
    tags: ['SupportOS', 'Managed IT'],
    image: img('supportos'), link: '/services/supportos',
  },
  {
    chip: 'Our electricity bills keep rising',
    title: 'Find the energy savings',
    text: 'Meters, sensors and dashboards that show where energy is wasted, and alerts when it happens.',
    steps: ['Survey meters and consumption data', 'Connect sensors and dashboards', 'Alert and report through SupportOS'],
    tags: ['Energy', 'Power BI'],
    image: img('energy'), link: '/industries/energy-resources',
  },
  {
    chip: 'Branch Wi-Fi and cameras drop out',
    title: 'Stabilise branch connectivity',
    text: 'Survey, segment and document the network so Wi-Fi, CCTV and point-of-sale stay online.',
    steps: ['Wireless and cabling survey', 'Segment staff, guest and CCTV traffic', 'Test failover and hand over diagrams'],
    tags: ['Networking', 'CCTV'],
    image: img('networking'), link: '/services/networking-wifi',
  },
  {
    chip: 'We’re moving to Microsoft 365',
    title: 'Migrate to Microsoft 365',
    text: 'A planned move for email, files and identity, with cutover and rollback agreed up front.',
    steps: ['Assess the source platform', 'Pilot and migrate in waves', 'Secure and support the tenant'],
    tags: ['Microsoft 365', 'Entra ID'],
    image: img('m365'), link: '/services/microsoft-365',
  },
  {
    chip: 'We need NCA compliance',
    title: 'Close the NCA ECC gaps',
    text: 'Map your controls, document the gaps and implement a prioritised remediation plan.',
    steps: ['Posture review against ECC', 'Prioritised remediation roadmap', 'Prove recovery with restore tests'],
    tags: ['Cybersecurity', 'NCA ECC'],
    image: img('cyber'), link: '/services/cybersecurity-resilience',
  },
]

export const NEW_LINES = [
  { name: 'Microsoft Dynamics 365', tag: 'ERP · CRM', image: img('warehouse-lg'), fit: 'cover', to: '/services/microsoft-dynamics-365', cta: 'Explore Dynamics', size: 'tall' },
  { name: 'SupportOS', tag: 'Managed support', image: img('managed'), fit: 'cover', to: '/services/supportos', cta: 'Explore SupportOS' },
  { name: 'Energy & Resources', tag: 'Industry', image: img('wind-farm'), fit: 'top', to: '/industries/energy-resources', cta: 'Explore Energy' },
]

export const METHOD = {
  image: img('assess'),
  steps: [
    ['Assess', 'Survey your sites, users, software, network and operational risks.', 'You receive: findings report & roadmap'],
    ['Architect', 'Design the solution with scope, bill of materials and dependencies.', 'You receive: signed architecture & scope'],
    ['Activate', 'Install, configure, migrate and test in a controlled change window.', 'You receive: tested production environment'],
    ['Assure', 'Operate, monitor and improve through SLAs and monthly reviews.', 'You receive: as-built diagrams & SLA'],
  ],
}

export const MARKET = {
  chart: { title: 'Saudi IT services market, USD bn', a: ['2025', 12.09], b: ['2034 forecast', 22.07], cagr: '+6.91% CAGR', source: 'Source: IMARC Group, Saudi Arabia IT Services Market' },
  cards: [
    { big: '25', unit: 'waves', text: 'of ZATCA Phase 2 e-invoicing so far. Wave 25 (turnover above SAR 187,500) must comply from 1 Feb 2027.', source: 'Source: EY Tax News, Aug 2026' },
    { big: '130', unit: 'GW', text: 'Vision 2030 renewables target. About 7.8 GW of solar was added in 2025, a national record.', source: 'Source: GlobalData via pv magazine, Mar 2026' },
  ],
}

export const INDUSTRIES = [
  { id: 'pro', name: 'Professional Services & SMEs', challenge: 'Lean teams, confidential client files and no in-house IT administrator.', image: img('ind-pro') },
  { id: 'retail', name: 'Retail & Hospitality', challenge: 'Many stores or venues, open guest Wi-Fi, critical POS uptime and wide surveillance needs.', image: img('ind-retail') },
  { id: 'logistics', name: 'Industrial & Logistics', challenge: 'Harsh environments, huge warehouses, weak wireless and lost inventory.', image: img('ind-logistics') },
  { id: 'edu', name: 'Education', challenge: 'Hundreds of devices at once, shared labs, campus roaming and content filtering.', image: img('ind-edu') },
  { id: 'health', name: 'Healthcare', challenge: 'Strict PDPL privacy, sensitive patient records and networks that cannot go down.', image: img('ind-health') },
  { id: 'construction', name: 'Construction & Multi-Site', challenge: 'Sites come and go fast, remote site offices, temporary connectivity and dust and heat.', image: img('ind-construction') },
]

export const INDUSTRY_SOLUTIONS = {
  pro: 'Microsoft 365 with MFA, secure laptops and a SupportOS helpdesk, so a small team gets enterprise-grade IT without hiring.',
  retail: 'Segmented guest and POS Wi-Fi, central CCTV and 24/7 monitoring so every store stays online and visible.',
  logistics: 'Warehouse-grade wireless, barcode scanning into Dynamics 365 and live inventory dashboards.',
  edu: 'Campus-wide Wi-Fi with roaming, managed devices and content filtering that scales to hundreds of students.',
  health: 'PDPL-aligned segmentation, resilient networks with failover and tested backups for patient systems.',
  construction: 'Rapid-deploy site offices with temporary connectivity, rugged equipment and one support contract across sites.',
}

export const PACKAGES = [
  { tag: 'Assessment', name: 'Aureon Blueprint', text: 'Organisations planning major IT changes, migrations or site upgrades.', features: ['Cloud, network and physical site survey', 'Findings with risk classification', 'Prioritised roadmap and budget ranges'], note: 'Fixed scope, delivered in 1–2 weeks' },
  { tag: 'Support', name: 'Essential Support', text: 'Small single-site offices needing reliable remote help.', features: ['Remote helpdesk in business hours', 'Microsoft 365 user administration', 'Endpoint patching and antivirus monitoring', 'Monthly summary report'], note: 'Remote-first; excludes major projects.' },
  { tag: 'Support', name: 'Business Support', text: 'Growing mid-market and multi-branch companies.', features: ['Priority helpdesk, named engineers', '24/7 server, cloud and perimeter monitoring', 'Preventive on-site visits', 'Quarterly restore tests'], note: 'Includes monthly on-site hours.' },
  { tag: 'Support', name: 'Enterprise / Multi-Site', text: 'Multi-location and mission-critical operations.', features: ['Dedicated account manager and lead', 'High-priority SLA with 24/7 escalation', 'Multi-site health and bandwidth reviews', 'Quarterly strategy and security audits'], note: 'Custom SLA with full vendor coordination.' },
]

export const LANDING_CTA_SERVICES = [
  'Microsoft Dynamics 365', 'SupportOS', 'Energy & Resources', 'Microsoft 365', 'Microsoft Azure', 'AWS Cloud',
  'Managed IT & Infrastructure', 'IT Consulting & Projects', 'Cybersecurity & Resilience', 'Networking & Wi-Fi',
  'CCTV & Physical Security', 'Structured Cabling & Fibre', 'AI & Business Automation',
]

export const FOOTER = {
  blurb: 'IT, cloud, business applications and on-site infrastructure for organisations across the Kingdom of Saudi Arabia.',
  newServices: [
    ['Microsoft Dynamics 365', '/services/microsoft-dynamics-365'],
    ['SupportOS', '/services/supportos'],
    ['Energy & Resources', '/industries/energy-resources'],
  ],
}

export { img }
