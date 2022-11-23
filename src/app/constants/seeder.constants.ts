/* -------------------------------------------------------------------------- */
/*                                   RESUME                                   */
/* -------------------------------------------------------------------------- */
import { IProject } from "../interfaces/project.interface";
import { ISkillTool } from "../interfaces/skills-tools.interface";
import { ISummary } from "../interfaces/summary.interface";
import { IWork } from "../interfaces/work.interface";

/* --------------------------------- SUMMARY -------------------------------- */
export const RESUME_SEEDER_SUMMARY: ISummary = {
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
  summary_objective: `<p>Ambitious and curious former Product Manager turned frontend developer &amp; UX / UI designer, searching for an opportunity to complete the transition to full stack development under the mentorship of an innovative team.</p>`,
}
export const RESUME_CLEAR_SUMMARY: ISummary = {
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
}

/* -------------------------------- PROJECTS -------------------------------- */
export const RESUME_SEEDER_PROJECTS: IProject[] = [
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
export const RESUME_CLEAR_PROJECTS: IProject[] = [
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
]
export const RESUME_BLANK_PROJECT: IProject = {
  id: undefined,
  name: '',
  description: '',
  url: '',
  tools: [],
  cover_image: '',
  toolsString: '',
  spins: false
}

/* ----------------------------- WORK EXPERIENCE ---------------------------- */
export const RESUME_SEEDER_WORK: IWork[] = [
  {
    id: 1,
    company: 'Cold Bore Technology',
    job_title: 'Sr. Technical TPM',
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
export const RESUME_CLEAR_WORK: IWork[] = [
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
export const RESUME_BLANK_WORK: IWork = {
  id: undefined,
  company: '',
  job_title: '',
  start_date: new Date(),
  end_date: new Date(),
  duties: '',
  dutiesString: ''
}

/* ----------------------------- SKILLS / TOOLS ----------------------------- */
export const RESUME_SEEDER_SKILLS: ISkillTool[] = [
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
export const RESUME_CLEAR_SKILLS: ISkillTool[] = [
  {
    id: 1,
    name: '',
    description: '',
    details: ['']
  }
];

export const RESUME_BLANK_SKILL: ISkillTool = {
  id: undefined,
  name: '',
  description: '',
  details: ['']
}
