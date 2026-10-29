// Content for the three bespoke pages: Dynamics 365, SupportOS, Energy & Resources.
const img = (n) => `${import.meta.env.BASE_URL}img/${n}.jpg`

export const DYNAMICS = {
  image: img('warehouse-lg'),
  hero: { title: 'Run finance, stock and sales on one Microsoft platform.', hi: 'one Microsoft platform.',
    lead: 'Aureon implements, integrates and supports Microsoft Dynamics 365 for Saudi organisations, with ZATCA Phase 2 e-invoicing, Arabic layouts and Power BI built in.',
    chips: [['Invoice INV-10482 cleared', 'ZATCA clearance · 2 seconds ago', '✓'], ['Month-end closed in 3 days', 'Finance dashboard · Power BI', '▮'], ['Stock synced: 4 warehouses', 'Riyadh · Jeddah · Dammam · Abha', '▣']] },
  stats: [['ERP + CRM', 'Finance, supply chain, sales, service'], ['ZATCA', 'Phase 2 clearance & reporting'], ['15% VAT', 'Saudi VAT setup and returns'], ['عربي / EN', 'Bilingual layouts and reports']],
  finder: {
    q1: { label: 'How many people will use the system?', options: ['Under 50', '50–250', '250+ / multi-entity'] },
    q2: { label: 'What do you need most?', options: ['Finance & inventory', 'Sales pipeline', 'Customer service', 'Manufacturing & supply chain'] },
    results: {
      bc: { name: 'Business Central', text: 'All-in-one ERP for growing Saudi companies.', bullets: ['General ledger, banking and VAT', 'Inventory, purchasing and sales orders', 'Typical rollout: 8–12 weeks'] },
      fo: { name: 'Finance & Supply Chain', text: 'Enterprise ERP for multi-entity and complex operations.', bullets: ['Multi-company consolidation', 'Advanced supply chain and manufacturing', 'Typical rollout: 4–9 months'] },
      sales: { name: 'Dynamics 365 Sales', text: 'CRM that keeps pipeline, quotes and forecasts in one place.', bullets: ['Lead to quote to order', 'Teams and Outlook integration', 'Typical rollout: 6–10 weeks'] },
      cs: { name: 'Customer Service', text: 'Cases, SLAs and knowledge for service teams.', bullets: ['Omnichannel case management', 'Knowledge base and SLAs', 'Typical rollout: 6–10 weeks'] },
    },
    note: 'Every recommendation includes ZATCA Phase 2 integration, Arabic layouts and Power BI reporting.',
  },
  zatca: {
    steps: [
      { n: 'Step 1', t: 'Invoice posted', d: 'A sales invoice or credit note is posted as usual. Aureon’s integration picks it up instantly with no extra clicks for your team.', title: 'Invoice posted in Dynamics 365', lines: ['Sales Invoice  INV-10482', 'Customer       Al Noor Trading Co.', 'VAT No.        3xxxxxxxxxxxx03', 'Amount         SAR 11,500.00', 'VAT (15%)      SAR 1,725.00', 'Status         Posted ✓'] },
      { n: 'Step 2', t: 'UBL 2.1 XML', d: 'The invoice is converted into the ZATCA-mandated UBL 2.1 XML structure with all required fields.', title: 'UBL 2.1 XML generated', lines: ['<Invoice>', '  <cbc:ID>INV-10482</cbc:ID>', '  <cbc:UUID>8e6f…c21</cbc:UUID>', '  <cbc:IssueDate>2026-10-27</cbc:IssueDate>', '  <cac:TaxTotal>1725.00</cac:TaxTotal>', '</Invoice>'] },
      { n: 'Step 3', t: 'Sign & QR', d: 'The XML is cryptographically signed and stamped with a TLV-encoded QR code, as Phase 2 requires.', title: 'Signed and QR-stamped', lines: ['Hash      SHA-256 ✓', 'Signature ECDSA ✓', 'QR        TLV / Base64 ✓', 'Counter   ICV 10462', 'PIH       linked to previous'] },
      { n: 'Step 4', t: 'Fatoora API', d: 'Standard invoices are sent for clearance and simplified invoices are reported to the Fatoora platform.', title: 'Submitted to the Fatoora API', lines: ['POST /invoices/clearance/single', 'Status  200 CLEARED', 'Time    2.8 s', 'Warnings none'] },
      { n: 'Step 5', t: 'Status in ERP', d: 'The cleared invoice and its status come back into Dynamics 365, so finance sees the result in the same screen.', title: 'Status returned to ERP', lines: ['Sales Invoice  INV-10482', 'ZATCA          Cleared ✓', 'QR             Attached', 'Archive        Stored 6 years'] },
    ],
    facts: [['B2B', 'Standard tax invoices are cleared by ZATCA before they are shared with the buyer.'], ['B2C', 'Simplified invoices are reported to ZATCA within 24 hours.']],
    sample: 'Sample data for illustration.',
  },
  teams: {
    image: img('capability-finance'),
    tabs: {
      Finance: { title: 'Close the month in days, not weeks.', text: 'Bank feeds, automatic VAT, approvals and consolidation across companies.', bullets: ['Saudi VAT setup and return reporting', 'Bank reconciliation and payment approvals', 'Multi-company and multi-currency consolidation'] },
      Warehouse: { title: 'Know what you have, where it is.', text: 'Barcode scanning, bin locations and live stock across warehouses.', bullets: ['Barcode receiving and picking', 'Stock transfers between sites', 'Cycle counts and valuation'] },
      Sales: { title: 'From quote to cash in one flow.', text: 'Pipeline, quotes, orders and invoicing share the same customer record.', bullets: ['Quotes and approvals in Teams', 'Order to invoice with ZATCA clearance', 'Pipeline and forecast dashboards'] },
      Management: { title: 'One set of numbers for decisions.', text: 'Power BI dashboards built on the same live data your teams use.', bullets: ['Revenue, margin and cash dashboards', 'Branch and department comparison', 'Scheduled board reports'] },
    },
  },
  rollout: [['Weeks 1–2', 'Discover', 'Process workshops, fit-gap and licence plan.'], ['Weeks 3–6', 'Configure', 'Accounts, VAT, approvals and Arabic forms.'], ['Weeks 5–8', 'Integrate & migrate', 'ZATCA, banks, payroll and legacy data.'], ['Weeks 8–10', 'Test & train', 'User acceptance and role-based training.'], ['Go-live', 'Support', 'Hypercare, then ongoing care via SupportOS.']],
  gallery: [[img('gal-finance'), 'Finance and operations working from the same numbers'], [img('gal-warehouse'), 'Barcode scanning straight into inventory'], [img('gal-approvals'), 'Approvals in Teams and Outlook']],
  faqs: [
    ['Is Dynamics 365 ready for ZATCA Phase 2?', 'Yes, through a ZATCA-compliant integration that Aureon configures, onboards and tests before your wave deadline.'],
    ['Business Central or Finance & Supply Chain?', 'Business Central suits most growing companies. Finance & Supply Chain suits multi-entity groups with complex operations. We confirm in a short fit assessment.'],
    ['Can we keep our historical data?', 'Yes. We scope what to migrate, clean it, and validate balances with your finance team before cutover.'],
    ['Does it work in Arabic?', 'Yes. Arabic and English UI, right-to-left documents and bilingual invoices are supported.'],
  ],
}

export const SUPPORTOS = {
  hero: { title: 'IT support that runs on a system, not on goodwill.', hi: 'not on goodwill.',
    lead: 'SupportOS is Aureon’s managed support operating system. Tickets, SLAs, monitoring, assets and reports live in one portal, so you always know what’s open, who owns it and when it’ll be fixed.',
    chips: [['P1 answered in 12 min', 'Branch firewall · Jeddah', '◔'], ['Backup restore test passed', 'Quarterly DR drill', '✓'], ['New ticket via WhatsApp', '“Printer offline, 2nd floor”', '✉']] },
  stats: [['24/7', 'Monitoring on Business & Enterprise'], ['4 channels', 'Portal, email, phone, WhatsApp'], ['P1–P4', 'Priority-based SLA targets'], ['Monthly', 'Service review & executive summary']],
  demo: {
    kpis: [['4', 'Open tickets'], ['97%', 'SLA met (30 days)'], ['42m', 'Avg first response'], ['312', 'Managed assets']],
    tickets: [
      { id: '#4821', issue: 'Branch firewall offline', p: 'P1', site: 'Jeddah', sla: '37:59 left' },
      { id: '#4817', issue: 'CCTV NVR storage at 90%', p: 'P2', site: 'Dammam', sla: '3h 11m left' },
      { id: '#4812', issue: 'New joiner M365 + laptop', p: 'P3', site: 'Riyadh HQ', sla: '19h 59m left' },
      { id: '#4809', issue: 'Business Central approval error', p: 'P2', site: 'Riyadh HQ', sla: '2h 05m left' },
      { id: '#4801', issue: 'Meeting room Wi-Fi slow', p: 'P3', site: 'Riyadh HQ', sla: 'Resolved' },
    ],
    views: ['Dashboard', 'Tickets', 'Assets', 'Monitoring'],
  },
  tiers: {
    image: img('eng1'),
    list: {
      Essential: { sub: 'For small single-site offices.', target: '4 hr', items: [['Helpdesk', 'Remote support, business hours'], ['Monitoring', 'Endpoint patching and antivirus'], ['On-site', 'By arrangement'], ['Backups', 'Monitored, annual restore test'], ['Reviews', 'Monthly summary report'], ['Add-ons', 'Microsoft 365 user administration']] },
      Business: { sub: 'For growing and multi-branch companies.', target: '1 hr', items: [['Helpdesk', 'Extended hours, named engineers'], ['Monitoring', '24/7 servers, cloud & perimeter'], ['On-site', 'Monthly hours included'], ['Backups', 'Quarterly restore tests'], ['Reviews', 'Monthly service review'], ['Add-ons', 'Dynamics 365 support']] },
      Enterprise: { sub: 'For multi-site and mission-critical operations.', target: '30 min', items: [['Helpdesk', '24/7 with dedicated lead'], ['Monitoring', '24/7 with proactive remediation'], ['On-site', 'Scheduled and emergency visits'], ['Backups', 'Quarterly restore and DR drills'], ['Reviews', 'Quarterly strategy and security audit'], ['Add-ons', 'Full application support']] },
    },
  },
  engineers: [['eng1', 'On-site visits for hardware, cabling and network work'], ['eng2', 'Service desk with named engineers'], ['eng3', '24/7 monitoring and alerting']],
  channels: [['Web portal', 'Log, track and approve requests.', '◧'], ['WhatsApp Business', 'Quick requests linked to tickets.', '✆'], ['Email', 'Every email opens a ticket.', '✉'], ['Phone hotline', 'For P1 incidents and escalation.', '☎']],
  faqs: [
    ['Do you support systems Aureon didn’t install?', 'Yes. Onboarding starts with an audit that documents your environment before it comes under support.'],
    ['Can SupportOS cover Microsoft Dynamics too?', 'Yes. Dynamics 365 support can be included in Business and Enterprise tiers.'],
    ['Where is our data kept?', 'Ticket and asset data is hosted in a region agreed with you and covered by PDPL-aligned controls.'],
  ],
}

export const ENERGY = {
  image: img('hero-energy'),
  hero: { title: 'See, secure and save every unit of energy.', hi: 'every unit of energy.',
    lead: 'Aureon builds the technology energy and resource operators depend on: real-time energy monitoring, resilient OT/IT networks, remote-site connectivity and cybersecurity aligned with NCA controls.',
    chips: [['Peak load alert · HVAC zone B', 'Auto-schedule applied', '⚡'], ['OT network segmented', 'OTCC gap closed', '⛨'], ['Satellite failover active', 'Remote pumping station', '⌁']] },
  stats: [['Meter → dashboard', 'IoT sensors, BMS, Power BI'], ['NCA OTCC', 'OT cybersecurity readiness'], ['Remote sites', 'Fibre, microwave, 5G, satellite'], ['ESG', 'Energy, water and emissions data']],
  hotspots: [
    { n: 1, x: 40, y: 45, title: 'PV array monitoring', text: 'String-level sensors stream output, temperature and soiling data so underperforming rows are found in minutes.' },
    { n: 2, x: 73, y: 57, title: 'Inverter & SCADA link', text: 'Industrial protocols connect inverters and meters to a secured network feeding Power BI.' },
    { n: 3, x: 91, y: 58, title: 'Weather stations', text: 'Irradiance, wind and dust sensors normalise performance against real conditions.' },
    { n: 4, x: 90, y: 47, title: 'Perimeter & CCTV', text: 'Thermal and IP cameras with analytics protect remote assets over fibre or microwave.' },
    { n: 5, x: 22, y: 26, title: 'Satellite & 5G backhaul', text: 'Resilient connectivity with automatic failover for sites beyond fibre.' },
  ],
  sectors: {
    Renewables: { text: 'SCADA connectivity, inverter and string monitoring, weather stations and perimeter security for solar and wind plants.', chips: ['SCADA', 'Fibre backhaul', 'Thermal CCTV'], image: img('solar-site') },
    'Oil, gas & petrochemicals': { text: 'Segmented OT networks, hazardous-area connectivity and OTCC-aligned security for plants and pipelines.', chips: ['OT security', 'Ex-rated Wi-Fi', 'Historian links'], image: img('cyber') },
    'Power & utilities': { text: 'Substation connectivity, smart metering backhaul and resilient control-network design.', chips: ['Substations', 'Smart meters', 'Redundant rings'], image: img('cabling') },
    'Water & desalination': { text: 'Remote pumping station telemetry, leak analytics and plant-wide monitoring.', chips: ['Telemetry', 'Remote sites', 'Alarms'], image: img('networking') },
    'Smart buildings': { text: 'BMS integration, HVAC optimisation and sub-metering with live energy dashboards.', chips: ['BMS', 'HVAC', 'Sub-metering'], image: img('managed') },
    'Control rooms': { text: 'Video walls, resilient networks and 24/7 monitoring for operations centres.', chips: ['Video wall', '24/7', 'Failover'], image: img('supportos') },
  },
  estimator: { billMin: 20000, billMax: 500000, billDefault: 120000, sitesMax: 20, sitesDefault: 4, facilities: ['Offices & retail', 'Industrial', 'Utility / plant'], measures: ['Monitoring only', 'Monitoring + HVAC control'],
    note: 'Illustrative only. Uses assumed savings bands (offices 5–10% for monitoring, up to 10–18% with HVAC control; lower for industrial and utility loads) and an average tariff of SAR 0.18/kWh.' },
  live: {
    sites: { 'Riyadh HQ': { now: '1.84 MW', delta: '−9.6%', delta2: 'vs. last month', cooling: '62%', data: [30, 28, 27, 29, 40, 58, 72, 80, 84, 86, 82, 78, 80, 84, 82, 70, 58, 46, 38, 32] },
      'Jeddah plant': { now: '3.20 MW', delta: '−4.1%', delta2: 'vs. last month', cooling: '48%', data: [60, 62, 64, 66, 70, 74, 80, 84, 86, 88, 88, 86, 84, 82, 80, 76, 72, 68, 64, 62] },
      'Solar site': { now: '12.4 MW', delta: '+6.2%', delta2: 'vs. last month', cooling: '—', data: [0, 0, 2, 12, 34, 58, 78, 92, 98, 100, 96, 88, 72, 50, 28, 10, 2, 0, 0, 0] } },
    bullets: ['Meters, sensors, PLCs and inverters', 'Industrial switching, fibre and wireless backhaul', 'OT/IT segmentation and monitoring', 'Alerts raised as tickets in SupportOS'],
  },
  market: {
    chart: ['Saudi solar capacity vs. 2030 renewables target', 'Solar capacity grew about 2.7× in one year. Every new plant needs monitored, secured and connected infrastructure.', 'Source: GlobalData via pv magazine, Mar 2026'],
    stats: [{ big: '70%', text: 'of household electricity in Saudi Arabia goes to air conditioning.', source: 'Source: IIR, citing Howarth et al. (2020)' }, { big: 'OTCC', text: 'NCA’s Operational Technology Cybersecurity Controls (OTCC-1:2022) for critical OT environments.', source: 'Source: nca.gov.sa' }],
  },
  faqs: [
    ['Can you work with our existing meters and SCADA?', 'Yes. We integrate with common industrial protocols and existing BMS or SCADA platforms rather than replacing working equipment.'],
    ['What is NCA OTCC and do we need it?', 'OTCC is the NCA’s cybersecurity control set for operational technology. If you operate critical infrastructure, you likely need to align to it.'],
    ['How do we start?', 'With an energy and OT assessment of one site. You get findings, a roadmap and savings ranges before committing to a rollout.'],
  ],
}
