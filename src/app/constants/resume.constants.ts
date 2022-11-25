
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
  phone: '',
  location: 'Calgary, Alberta',
  url: 'ria.run',
  alt_url: 'riapacheco.codes',
  twitter_handle: 'realriapacheco',
  linkedin_handle: 'riapacheco',
  github_handle: 'riapacheco',
  summary_objective: `<p>Ambitious and curious former Product Manager turned <strong>Front End Developer</strong> &amp; UX / UI designer, searching for an opportunity to complete the transition to full stack development under the mentorship of an innovative team.</p>`,
};

// Product Manager
export const SUMMARY_PRODUCT: ISummary = {
  first_name: 'Ria',
  last_name: 'Pacheco',
  email: 'me@riapacheco.com',
  phone: '',
  location: 'Calgary, Alberta',
  url: 'ria.run',
  alt_url: 'riapacheco.codes',
  twitter_handle: 'realriapacheco',
  linkedin_handle: 'riapacheco',
  github_handle: 'riapacheco',
  summary_objective: `<p>Driven, versatile, and solution-focused <strong>Senior Product Manager</strong> with 8 years of experience driving customer-focused products, managing the product lifecycle, and optimizing user experiences for established and emerging tech companies</p>`
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
    description: `With over 9k downloads since 2020, <strong>Yutes</strong> is an SCSS package that provides utilities commonly found in libraries like Bootstrap, without the rigidness that limits fluid design. [ Stats: <u>https://yutes.report</u> ]`,
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
    description: 'RiReader is an application [in current development] offered on Web, iOS, and Android, which enables a user to both consume and retain data they\'ve read from a physical book.',
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
    description: `FinePrint is a free web application for building print- and download-friendly docs with responsive templates that adjust themselves as they're populated.`,
    url: 'https://fine-print.app',
    tools: [],
    cover_image: '',
    toolsString: 'TypeScript / JavaScript, Angular, jsPDF, @riapacheco/yutes, RxJS',
  },
  {
    id: 4,
    name: 'Designs',
    spins: false,
    description: `Resources designed for practical use-cases including DAW piano roll and beat sequence tablatures.`,
    url: `https://riapacheco.design`,
    tools: [],
    cover_image: ``,
    toolsString: `Adobe Creative Cloud Suite`
  },
  {
    id: 5,
    name: 'Asset Tracker',
    spins: false,
    description: `AssetTracker is an internal equipment tracking tool that enables the manufacturing team to track all sensor and had compute technology equipment by location and MFG/M&R process`,
    toolsString: '',
    url: ''
  }
];

// Product Manager
export const PROJECTS_PRODUCT: IProject[] = [
  {
    id: 1,
    name: 'Enterprise Launch',
    description: 'Developed end-to-end GTM strategy executing modules for strategic implementation, market & solution intelligence, analysis for product/solution fit, and sales enablement tactics',
    url: 'https://ria.management/#coldboretechnology',
    tools: [],
    cover_image: '',
    toolsString: 'Team composition planning, phase-gate planning, target group segmentation, product lines / bundling, sales enablement / intelligence repositories',
    spins: false
  },
  {
    id: 2,
    name: 'Scrum Implementation',
    description: `Pitched and transitioned a development team entirely to scrum methodologies, resulting in a 400% development cycle output increase`,
    url: `https://ria.management/#mydomastudio`,
    tools: [],
    cover_image: ``,
    toolsString: `User stories, sprint activities / planning, UX exercises, sprint benchmarking, definition of done`,
    spins: false,
  },
  {
    id: 3,
    name: `Startup Pilot`,
    description: `After integrating the Steer development team with Sol Press as an Innovation Partner, we were able to boost their productivity by over 300% which more than doubled their revenue`,
    url: `https://ria.management/#steer`,
    tools: [],
    cover_image: ``,
    toolsString: `First-time founder, pilot B2B customer, capital raises, team recruitment and management`,
    spins: false,
  },
  {
    id: 4,
    spins: false,
    name: 'Platform Strategy',
    description: `Developed both a product and organizational strategy by breaking down product features, customer segments, sales velocity / efforts, and the customer's ecosystem`,
    url: 'https://ria.management/#showpass',
    tools: [],
    cover_image: '',
    toolsString: `Feature categories, software complexity brackets, customer ecosystem mapping`
  }
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
                      Owned and executed full enterprise product portfolio re-launch, re-positioning flagship offering (SmartPAD) to include all sensor-to-cloud capabilities
                    </li>
                    <li>
                      Strategically introduced 4 under-utilized data products in branded product line (ColdEDGE Web Services)
                    </li>
                    <li>
                      Scoped and developed the frontend of an internal hardware tracking tool (Asset Tracker) to help MFG / M&R teams in managing all processes related to MFG / repair [Angular/TypeScript, Amazon RDS]
                    </li>
                    <li>
                      Isolated the MFG value chain to enable UX design sessions with the VP Technology and Director of Hardware [Adobe XD, Confluence]
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
                    Boosted dev cycle output by 400% with user story estimations, sprint management, HCM planning, and an overall transition to scrum
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
                      Delivered MVP product, from prototype testing to pilot customer release, directly resulting in pilot customer's 200% boost in revenue
                    </li>
                    <li>
                      Raised capital for product research, marketing, and development of 4-person dev team
                    </li>
                    <li>
                      Built and refactored frontend views in first heavy exposure to code
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
                      Owned and executed full enterprise product portfolio re-launch, re-positioning flagship offering (SmartPAD) to include all sensor-to-cloud capabilities
                    </li>
                    <li>
                      Strategically introduced 4 under-utilized data products in branded product line (ColdEDGE Web Services)
                    </li>
                    <li>
                      Scoped and developed the frontend of an internal hardware tracking tool (Asset Tracker) to help MFG / M&R teams in managing all processes related to MFG / repair [Angular/TypeScript, Amazon RDS]
                    </li>
                    <li>
                      Isolated the MFG value chain to enable UX design sessions with the VP Technology and Director of Hardware [Adobe XD, Confluence]
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
                    Boosted dev cycle output by 400% with user story estimations, sprint management, HCM planning, and an overall transition to scrum
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
                      Delivered MVP product, from prototype testing to pilot customer release, directly resulting in pilot customer's 200% boost in revenue
                    </li>
                    <li>
                      Raised capital for product research, marketing, and development of 4-person dev team
                    </li>
                    <li>
                      Built and refactored frontend views in first heavy exposure to code
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
    name: 'TypeScript / JavaScript',
    description: 'Proficient with TS classes, modules, models, interfaces, generics, and optional static types for scalable products',
  },
  {
    id: 2,
    name: 'Angular',
    description: 'Proficient with MVVM pattern architecture, Routing, Forms, HTTP Services, Service Workers & PWA, Template Binding'
  },
  {
    id: 3,
    name: 'Data Modelling, Postgres',
    description: `Strong experience with data schemas, entity planning (PKs, Joins, etc), and planned interactions between client services and middleware`
  },
  {
    id: 4,
    name: 'iOS / Android Design',
    description: `High design proficiency in web and mobile user interfaces (Adobe XD) with considerations towards both iOS and Android native requirements`
  },
  {
    id: 5,
    name: 'Firebase / Supabase',
    description: `Strong experience managing SQL-based database services, storage services, and realtime DBs`
  },
  {
    id: 6,
    name: 'Capacitor',
    description: `Strong implementation of multi-OS codebase, enabling the delivery of a web, iOS, and Android application from a single codebase`
  },
  {
    id: 7,
    name: 'NodeJS / Express',
    description: `Applied experience building NodeJS/Express applications with middleware and routing`
  },
  {
    id: 8,
    name: 'Python / Django',
    description: 'Enabled understanding of basic Python workflows and concepts for REST API development'
  }
];

// Product Manager
export const SKILLS_PRODUCT: ISkillTool[] = [
  {
    id: 1,
    name: 'Market & User Research',
    description: 'Achieved through analysis of operational space, problem space, and solution space; against backdrop of product/solution requirements',
    details: ['']
  },
  {
    id: 2,
    name: 'Product Roadmap Planning',
    description: 'Achieved by understanding first roadmap building blocks (objectives, target groups, product incentives) and synthesizing this data with roadmap priorities',
    details: ['']
  },
  {
    id: 4,
    name: 'Requirements Gathering',
    description: 'Requirements and insights are typically gathered through customer interviews, prototype testing activities, on-site shadowing, and trace user behavioral data',
    details: ['']
  },
  {
    id: 5,
    name: 'Agile-Focused Sprints',
    description: 'Development cycles are efficiently enabled by selecting only the relevant / useful parts of the agile framework which best serve each team member',
    details: ['']
  },
  {
    id: 6,
    name: 'UX / UI Prototyping',
    description: 'A series of UX/UI exercises is implemented to extract data that enables the simplification of user needs per each module and view',
    details: ['']
  },
  {
    id: 7,
    name: 'Go-to-Market Planning',
    description: 'Implementation of high- to mid-level corporate strategy, market & solution intelligence activities, comprehensive product marketing development, and effective sales enablement tactics',
    details: ['']
  },

];


