
import { IProject } from "../interfaces/project.interface";
import { ISkillTool } from "../interfaces/skills-tools.interface";
import { ISummary } from "../interfaces/summary.interface";
import { IWork } from "../interfaces/work.interface";

/* -------------------------------------------------------------------------- */
/*                                   SUMMARY                                  */
/* -------------------------------------------------------------------------- */

// Cleared
export const SUMMARY_CLEARED: ISummary = {
  first_name: '',
  last_name: '',
  summary_objective: '',
  email: '',
  phone: '',
  location: '',
  url: '',
  alt_url: '',
  twitter_handle: '',
  linkedin_handle: '',
  github_handle: '',
};

// Developer
export const SUMMARY_DEVELOPER: ISummary = {
  first_name: 'Ria',
  last_name: 'Pacheco',
  email: 'me@riapacheco.com',
  phone: '+1 (403) 471 - 7356',
  location: 'Calgary, Alberta',
  url: 'ria.run',
  alt_url: 'riapacheco.codes',
  twitter_handle: 'realriapacheco',
  linkedin_handle: 'riapacheco',
  github_handle: 'riapacheco',
  summary_objective: `<p>Ambitious and curious former Product Manager turned <strong>Front End Developer</strong> and <strong>UX / UI designer</strong>, searching for a creative and innovative team to build, learn, and grow with.</p>`,
};

// Product Manager
export const SUMMARY_PRODUCT: ISummary = {
  first_name: 'Ria',
  last_name: 'Pacheco',
  email: 'me@riapacheco.com',
  phone: '+1 (403) 471 - 7356',
  location: 'Calgary, Alberta',
  url: 'ria.run',
  alt_url: 'riapacheco.systems',
  twitter_handle: 'realriapacheco',
  linkedin_handle: 'riapacheco',
  github_handle: 'riapacheco',
  summary_objective: `<p>Driven, versatile, and metrics-focused B2B <strong>Senior Product Manager</strong> with 8 yrs of experience driving buyer-focused products, managing technically complex lifecycles, and optimizing end-to-end customer UX; excited to join an innovative and engineer-focused team after returning from a creatively curious sabbatical.</p>`
};


/* -------------------------------------------------------------------------- */
/*                                  PROJECTS                                  */
/* -------------------------------------------------------------------------- */

// cleared
export const PROJECTS_CLEARED: IProject[] = [
  {
    id: 1,
    name: '',
    description: '',
    url: '',
    tools: [],
    cover_image: '',
    toolsString: '',
    spins: false
  }
];

// Developer
export const PROJECTS_DEVELOPER: IProject[] = [
  {
    id: 1,
    name: 'Yutes',
    description: `With over 10k downloads since 2020, <strong>Yutes</strong> is an SCSS package that provides utilities commonly found in libraries like Bootstrap, without the rigidness that limits fluid design. [ Stats: <u>https://yutes-stats.riapacheco.link</u> ]`,
    url: 'https://www.npmjs.com/package/@riapacheco/yutes',
    tools: [
    ],
    cover_image: '',
    toolsString: 'SCSS expressions, functions, variables, at-rules, etc.',
    spins: false
  },
  {
    id: 2,
    name: 'RiReader',
    description: '<strong>RiReader</strong> is an application [in current development] offered on Web, iOS, and Android, which enables a user to both consume and retain data they\'ve read from a physical book.',
    url: 'https://rireader.app',
    tools: [
    ],
    cover_image: '',
    toolsString: 'Typescript / JavaScript, Angular, TesseractJS (OCR), Capacitor (iOS/Android), @riapacheco/yutes, Supabase, Postgres, RxJS Observables',
    spins: false
  },
  {
    id: 3,
    name: 'FinePrint',
    spins: false,
    description: `<strong>FinePrint</strong> is a free web application for building print- and download-friendly docs with responsive templates that adjust themselves as they're populated.`,
    url: 'https://fine-print.app',
    tools: [],
    cover_image: '',
    toolsString: 'TypeScript / JavaScript, Angular, jsPDF, @riapacheco/yutes, RxJS',
  },
  {
    id: 4,
    name: 'Designs',
    spins: false,
    description: `Resources designed for practical use-cases including <strong>DAW tablatures</strong> (piano roll and beat sequencing)`,
    url: `https://riapacheco.design`,
    tools: [],
    cover_image: ``,
    toolsString: `Adobe Creative Cloud Suite`
  },
  {
    id: 5,
    name: 'Asset Tracker',
    spins: false,
    description: `<strong>AssetTracker</strong> is an internal equipment tracking tool that enables the manufacturing team to track all sensor and had compute technology equipment by location and MFG/M&R process`,
    toolsString: '',
    url: ''
  }
];

// Product Manager
export const PROJECTS_PRODUCT: IProject[] = [
  {
    id: 1,
    name: `PM Systems`,
    spins: false,
    description: `Generally developed <strong>repeatable frameworks</strong> for critical Product Management activities including: Roadmap Building, Cross-Functional PRDs, Customer and Market Discovery, and PMM`,
    toolsString: `Product Discovery, Discovery Activities, Value Propositions, Competitive Intelligence`,
    cover_image: ``,
    url: `riapacheco.systems`
  },
  {
    id: 2,
    name: 'Enterprise Launch',
    description: 'As <strong>Senior Technical PM</strong> at <strong>Cold Bore Technology</strong>, developed end-to-end GTM strategy executing modules for strategic implementation, market & solution intelligence, analysis for product/solution fit, sales enablement tactics, and industrial equipment manufacturing / maintenance',
    url: 'ria.management/#coldboretechnology',
    tools: [],
    cover_image: '',
    toolsString: 'Team composition planning, phase-gate planning, target group segmentation, product lines / bundling, sales enablement / intelligence repositories',
    spins: false
  },
  {
    id: 3,
    name: `Startup Pilot`,
    description: `As <strong>Founder & CEO</strong> at <strong>Steer</strong>, boosted productivity for first co-innovation pilot customer by over 300%`,
    url: `steer.riapacheco.link  &nbsp;  <small style="letter-spacing:0.5px; opacity: 0.5;">[ Original website copy ]</small>`,
    tools: [],
    cover_image: ``,
    toolsString: `First-time founder, pilot B2B customer, capital raises, team recruitment and management`,
    spins: false,
  },
  {
    id: 4,
    name: 'Agile Management',
    description: `As <strong>Director of Product Management</strong> at <strong>MyDoma Studio</strong>, pitched and transitioned a development team entirely to scrum methodologies, resulting in a 400% development cycle output increase`,
    url: `ria.management/#mydomastudio`,
    tools: [],
    cover_image: ``,
    toolsString: `User stories, sprint activities / planning, UX exercises, sprint benchmarking, definition of done`,
    spins: false,
  },
  {
    id: 5,
    name: '@riapacheco/yutes',
    description: `With over 10k downloads since 2020, <strong>Yutes</strong> is an SCSS package that provides utilities commonly found in libraries like Bootstrap, without the rigidness that limits fluid design.`,
    url: `yutes-stats.riapacheco.link`,
    tools: [],
    cover_image: ``,
    toolsString: ``,
    spins: false
  },
];

/* -------------------------------------------------------------------------- */
/*                                    WORKS                                   */
/* -------------------------------------------------------------------------- */

// Cleared
export const WORKS_CLEARED: IWork[] = [
  {
    id: 1,
    company: '',
    job_title: '',
    start_date: new Date(),
    end_date: new Date(),
    duties: '',
    dutiesString: ''
  }
];

// Developer
export const WORKS_DEVELOPER: IWork[] = [
  {
    id: 1,
    company: 'Cold Bore Technology',
    job_title: 'Sr. Technical PM',
    start_date: '2021-11-01',
    end_date: '2022-09-01',
    url: 'https://ria-run-site.carrd.co/#cold-bore-technology',
    dutiesString: `<ul>
                    <li>
                      Owned and executed full enterprise product portfolio re-launch, re-positioning flagship offering (SmartPAD) to include all sensor-to-cloud capabilities, generating $30 million revenue for June 2022
                    </li>
                    <li>
                      Strategically introduced 4 under-utilized data products in branded product line (ColdEDGE Web Services)
                    </li>
                    <li>
                      Instituted a new product marketing insights database driving customer value through relational value propositions, feature descriptions, customer needs, market insights, and client use-cases
                    </li>
                    <li>
                      Partnered with hardware engineering and manufacturing teams to build equipment intake procedures, warehouse supply-chain efficiencies, and maintenance & repair SLAs
                    </li>
                    <li>
                      Isolated the MFG value chain to enable UX design sessions with the VP Technology and Director of Hardware
                    </li>
                    <li>
                      Implemented ongoing discovery activities for market & product intelligence to standardize a portfolio
                    </li>
                    <li>
                      Scoped and developed the frontend of an internal hardware tracking tool (Asset Tracker) to help MFG / M&R teams in managing all processes related to MFG / repair [Angular/TypeScript, Amazon RDS]
                    </li>
                  </ul>`
  },
  {
    id: 2,
    company: 'Mydoma Inc.',
    job_title: 'Director, Product Management',
    start_date: '2021-04-01',
    end_date: '2021-09-01',
    dutiesString: `<ul>
                    <li>
                      Boosted dev cycle output by 400% with user story estimations, sprint management, and HCM planning
                    </li>
                    <li>
                      Performed job costing and gap analysis to appraise team efficiency and isolate areas in need of improvement
                    </li>
                    <li>
                      Developed and implemented customer prototype testing campaigns, client surveys, contextual inquiries, and usability studies to understand user behaviors and opinions
                    </li>
                    <li>
                    Evaluated and re-designed all UX and UI resulting in a solution-focused application
                    </li>
                    <li>
                    Re-factored frontend (Flutter) and wrote backend (NodeJS) tests (Postman)
                    </li>
                  </ul>`,
  },
  {
    id: 3,
    company: 'Steer Software',
    job_title: 'Founder & CEO',
    start_date: '2018-07-01',
    end_date: '2021-04-01',
    dutiesString: `<ul>
                    <li>
                      Founded and fronted a tech startup that specialized in distributed team management
                    </li>
                    <li>
                      Acquired prominent publishing company pilot customer with teams located across the world
                    </li>
                    <li>
                      Seamlessly delivered the minimum viable product (MVP) that boosted client revenues by over 200%
                    </li>
                    <li>
                      Managed and coached a team of software developers in building customer-centered software
                    </li>
                  </ul>`
  },
  {
    id: 4,
    company: `Showpass`,
    job_title: `Head of Strategy`,
    start_date: `2017-10-01`,
    end_date: `20189-04-01`,
    dutiesString: `<ul>
                    <li>
                      Mandated with optimizing day-to-day operations for the ticketing and event management software company
                    </li>
                    <li>
                      Analyzed team activities, unearthed performance gaps, and rectified recurring issues
                    </li>
                    <li>
                      Forged and facilitated training to educate team members on new models, processes, and best practices
                    </li>
                    <li>
                      Instituted customer support ticket tagging system to uncover user segments and issue type categories
                    </li>
                  </ul>`
  },
  {
    id: 5,
    company: `Intriga Mobility [acquired]`,
    job_title: `Director of Sales Enablement`,
    start_date: `2016-03-01`,
    end_date: `2017-05-01`,
    dutiesString: `<ul>
                    <li>
                      Led team in designing and deploying the sales enablement program to 8 distribution partners across the country and over 200 sales representatives for the industry leading provider of managed mobility services
                    </li>
                    <li>
                      Contributed to company’s acquisition by expanding annual sales revenues by over 36% through empowering entire distribution channel and interviewing stakeholders to reveal and overcome sales barriers
                    </li>
                    <li>
                      Engaged sales reps in discovery activities to uncover concerns, address challenges, and shape programming
                    </li>
                    <li>
                      Authored a wide range of enablement content for workshops, on-site training sessions, and sales tool guides
                    </li>
                  </ul>`
  },
  {
    id: 6,
    company: `Passportal [acquired]`,
    job_title: `Director of Marketing`,
    start_date: `2015-09-01`,
    end_date: `2016-03-01`,
    dutiesString: `<ul>
                    <li>
                      Built and nurtured channel partnerships with 3 US-based value-add resellers (VARs) for software company that offered password and identity management for managed service providers (MSPs)
                    </li>
                    <li>
                      Produced sales enablement materials for large distribution partner (ConnectWise) with over 200 sales staff
                    </li>
                    <li>
                      Designed and implemented customer support incident processes and trained development staff in support
                    </li>
                  </ul>`
  }
];

// Product Manager
export const WORKS_PRODUCT: IWork[] = [
  {
    id: 1,
    company: 'Cold Bore Technology',
    job_title: 'Sr. Technical PM',
    start_date: '2021-11-01',
    end_date: '2022-09-01',
    url: 'https://ria-run-site.carrd.co/#cold-bore-technology',
    dutiesString: `<ul>
                    <li>
                      Owned and executed full enterprise product portfolio re-launch, re-positioning flagship offering (SmartPAD) to include all sensor-to-cloud capabilities, generating $30 million revenue for June 2022
                    </li>
                    <li>
                      Strategically introduced 4 under-utilized data products in branded product line (ColdEDGE Web Services)
                    </li>
                    <li>
                      Instituted a new product marketing insights database driving customer value through relational value propositions, feature descriptions, customer needs, market insights, and client use-cases
                    </li>
                    <li>
                      Partnered with hardware engineering and manufacturing teams to build equipment intake procedures, warehouse supply-chain efficiencies, and maintenance & repair SLAs
                    </li>
                    <li>
                      Isolated the MFG value chain to enable UX design sessions with the VP Technology and Director of Hardware
                    </li>
                    <li>
                      Scoped and developed the frontend of an internal hardware tracking tool (Asset Tracker) to help MFG / M&R teams in managing all processes related to MFG / repair [Angular/TypeScript, Amazon RDS]
                    </li>
                  </ul>`
  },
  {
    id: 2,
    company: 'Mydoma Inc.',
    job_title: 'Director, Product Management',
    start_date: '2021-04-01',
    end_date: '2021-09-01',
    dutiesString: `<ul>
                    <li>
                      Boosted dev cycle output by 400% with user story estimations, sprint management, and HCM planning
                    </li>
                    <li>
                      Performed job costing and gap analysis to appraise team efficiency and isolate areas in need of improvement
                    </li>
                    <li>
                      Developed and implemented customer prototype testing campaigns, client surveys, contextual inquiries, and usability studies to understand user behaviors and opinions
                    </li>
                    <li>
                    Evaluated and re-designed all UX and UI resulting in a solution-focused application
                    </li>
                    <li>
                    Re-factored frontend (Flutter) and wrote backend (NodeJS) tests (Postman)
                    </li>
                  </ul>`,
  },
  {
    id: 3,
    company: 'Steer Software',
    job_title: 'Founder & CEO',
    start_date: '2018-07-01',
    end_date: '2021-04-01',
    dutiesString: `<ul>
                    <li>
                      Founded and fronted a tech startup that specialized in distributed team management
                    </li>
                    <li>
                      Acquired prominent publishing company pilot customer with teams located across the world
                    </li>
                    <li>
                      Seamlessly delivered the minimum viable product (MVP) that boosted client revenues by over 200%
                    </li>
                    <li>
                      Managed and coached a team of software developers in building customer-centered software
                    </li>
                  </ul>`
  },
  {
    id: 4,
    company: `Showpass`,
    job_title: `Head of Strategy`,
    start_date: `2017-10-01`,
    end_date: `20189-04-01`,
    dutiesString: `<ul>
                    <li>
                      Mandated with optimizing day-to-day operations for the ticketing and event management software company
                    </li>
                    <li>
                      Analyzed team activities, unearthed performance gaps, and rectified recurring issues
                    </li>
                    <li>
                      Forged and facilitated training to educate team members on new models, processes, and best practices
                    </li>
                    <li>
                      Instituted customer support ticket tagging system to uncover user segments and issue type categories
                    </li>
                  </ul>`
  },
  {
    id: 5,
    company: `Intriga Mobility [acquired]`,
    job_title: `Director of Sales Enablement`,
    start_date: `2016-03-01`,
    end_date: `2017-05-01`,
    dutiesString: `<ul>
                    <li>
                      Led team in designing and deploying the sales enablement program to 8 distribution partners across the country and over 200 sales representatives for the industry leading provider of managed mobility services
                    </li>
                    <li>
                      Contributed to company’s acquisition by expanding annual sales revenues by over 36% through empowering entire distribution channel and interviewing stakeholders to reveal and overcome sales barriers
                    </li>
                    <li>
                      Engaged sales reps in discovery activities to uncover concerns, address challenges, and shape programming
                    </li>
                    <li>
                      Authored a wide range of enablement content for workshops, on-site training sessions, and sales tool guides
                    </li>
                  </ul>`
  },
  {
    id: 6,
    company: `Passportal [acquired]`,
    job_title: `Director of Marketing`,
    start_date: `2015-09-01`,
    end_date: `2016-03-01`,
    dutiesString: `<ul>
                    <li>
                      Built and nurtured channel partnerships with 3 US-based value-add resellers (VARs) for software company that offered password and identity management for managed service providers (MSPs)
                    </li>
                    <li>
                      Produced sales enablement materials for large distribution partner (ConnectWise) with over 200 sales staff
                    </li>
                    <li>
                      Designed and implemented customer support incident processes and trained development staff in support
                    </li>
                  </ul>`
  }
];

/* -------------------------------------------------------------------------- */
/*                                   SKILLS                                   */
/* -------------------------------------------------------------------------- */

// Cleared
export const SKILLS_CLEARED: ISkillTool[] = [
  {
    id: 1,
    name: '',
    description: '',
    details: ['']
  }
];

// Developer
export const SKILLS_DEVELOPER: ISkillTool[] = [
  {
    id: 1,
    name: 'TypeScript / JavaScript / Angular',
    description: 'Proficient with MVVM pattern architecture, TS classes, modules, models, interfaces, routing, PWA, and template binding'
  },
  {
    id: 2,
    name: 'UX / UI Design and Implementation',
    description: 'Highly proficient in UX-focused design through UX/UI exercises, prototyping design / testing tools (Adobe XD, Figma, UseBerry)'
  },
  {
    id: 3,
    name: 'Data Modelling / Relational DBs',
    description: `Strong experience with data schemas, entity planning, and planned DB interactions through middleware`
  },
  {
    id: 4,
    name: 'iOS / Android Design',
    description: `High design proficiency in web and mobile user interfaces that considers native device requirements`
  },
  {
    id: 5,
    name: 'Firebase / Supabase',
    description: `Strong experience managing SQL-based database services, storage services, and realtime DBs`
  },
  {
    id: 6,
    name: 'NodeJS / Express',
    description: `Applied experience building NodeJS/Express applications with middleware and routing`
  },
];

// Product Manager
export const SKILLS_PRODUCT: ISkillTool[] = [
  {
    id: 1,
    name: `User / Market Analysis`,
    description: `<ul>
                    <li>
                      Customer Problem Analysis
                    </li>
                    <li>
                      Customer / Stakeholder Interviews
                    </li>
                    <li>
                      Capability Classification
                    </li>
                    <li>
                      Market Position Research
                    </li>
                    <li>
                      User Ecosystem Analysis
                    </li>
                    <li>
                      IxD Prototype Tests
                    </li>

                  </ul>`
  },
  {
    id: 2,
    name: `Roadmap Development`,
    description: `<ul>
                    <li>
                      Value Chain Mapping
                    </li>
                    <li>
                      Business Workflow Mapping
                    </li>
                    <li>
                      User / Task Mapping
                    </li>
                    <li>
                      Problem/Root Cause Analysis
                    </li>
                    <li>
                      User-Focused Epics
                    </li>
                    <li>
                      Product Vertical Planning
                    </li>
                  </ul>`
  },
  {
    id: 3,
    name: `Software / Hardware Cycles`,
    description: `<ul>
                    <li>
                      Backlog and PRD Management
                    </li>
                    <li>
                      Sprint Capacity Planning
                    </li>
                    <li>
                      Story Point Estimates
                    </li>
                    <li>
                      M&R Value Chain Mapping
                    </li>
                    <li>
                      Sprint Kickoff Facilitation
                    </li>
                    <li>
                      Daily Sprint Facilitation
                    </li>
                  </ul>`
  },

];


