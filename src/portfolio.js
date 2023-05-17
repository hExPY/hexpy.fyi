const header = {
  homepage: 'https://hexpy.fyi',
  title: 'MZ.',
}

const about = {
  name: 'Marvyn',
  role: 'Security Architect',
  description: 'I\'m a dedicated, positive, communicative and down to earth techie loving to provide state-of-the-art solutions to make everyone\'s life more secure. Open-mindedness is my sixth forename (my Mum thought it would be funny to give me five forenames) and I\'m passionate about establishing a growth and learning mindset in teams. If you\'d like to engage me in a never ending conversation choose either cycling or coffee as a topic.',
  resume: 'https://hexpy.fyi/cv-marvyn-zalewski.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/m%E2%80%8Aarvyn-zalewski-515961a8/',
    github: 'https://github.com/hExPY/hexpy.fyi',
    twitter: 'https://twitter.com/hEx_Py',
    avatar: '/avatar.png'
  },
}

const projects = [
  {
    name: 'Mind Garden 🧠',
    description: 'I\'d like to invite you to my ever growing (since 2022) mind garden. You can find lots of information about me and who I am. Enjoy your stay.',
    stack: ['Notion', 'Gardening', 'Personal Development'],
    livePreview: 'https://hexpy.notion.site/Marvyn-s-Mind-Garden-2267c2edf25d4dbf806398d330b9d841',
  },
  {
    name: 'PenPaperHero ✍️',
    description:
      'A client only application to manage your Pen and Paper character. Mainly used for the \'Savage Worlds\' ruleset. Sadly my group stopped playing so this project isn\'t under development right now.',
    stack: ['TypeScript', 'Angular', 'SPA', 'PWA'],
    sourceCode: 'https://github.com/hExPY/PenPaperHero',
    livePreview: 'https://hexpy.github.io/PenPaperHero/',
  },
  {
    name: 'Ciencia del Café ☕',
    description:
      'Hands down, I love delicious coffee. Thats exactly why I started this Notion project. Tracking every coffee I made to keep track of what I like and dislike. Additionally, I\'ll drop everything I know or think to know. At least you\'ll find my experiences there.',
    stack: ['Notion', 'Coffee', 'Nerdism'],
    livePreview: 'https://www.notion.so/hexpy/Ciencia-del-Caf-ffd1d25d8b63498c9c2b527eac069520',
  },
]
 
const skills = [
  'Growth Mindset',
  'TypeScript',
  'JavaScript',
  'Hunting Pokemon',
  'Terraform',
  'CDK',
  'AWS',
  'Cycling',
  'Python',
  'Coaching',
  'Continuous Security',
  'Mentoring',
  'Reflecting',
  'Change Management',
  'Agile Thinking',
  'Train People',
  'Coffee',
  'Anti-fragile Systems',
  'Factfulness (Did you read the book?)'
]

const experiences = [
  {
    title: "Since July 2022",
    cardTitle: "Aviv Group GmbH",
    url: "https://www.aviv-group.com/",
    cardSubtitle:"Security Architect",
    cardDetailedText: "In the role of a Security Architecture team I am mainly responsible to assess applications developed internally. To support the engineering teams I took the lead to plan, develop, implement, and roll out a Secure Product Lifecycle (SPLC) to ensure security is baked into the DNA of our products. This process utilizes various resources from a dynamic and informative questionnaire to enable engineering teams to work independently and learn about security while developing their application, to a report that allows the management to understand the residual risks of the application and helps the team prioritize which mitigations to implement first. This role also innate the responsibility to establish a Security Architecture culture program to raise the awareness about security and train Product and Tech workforce sustainably by using different formats like presentations or guidelines. In order to measure the teams effectivity, I took part in the overall process of establishing meaningful KPIs such as the overall time until an assessment is completed depending on various conditions.",
  },
  {
    title: "Feb 2022 - Jan 2023",
    cardTitle: "Aviv Group GmbH",
    url: "https://www.aviv-group.com/",
    cardSubtitle:"Security Officer Germany",
    cardDetailedText: "The Security Officer Germany held a temporary role that supported the merge of the German brand immowelt into the AVIV Group until all required positions are filled. Their responsibilities included assessing the entire platform using the CIS framework, establishing foundational security and technical measures on AWS such as SCPs and multi-layer network architectures for future whitelabel product, and supporting other capabilities like legal or data privacy by serving as a single point of contact in both directions.",
  },
  {
    title: "Okt 2021 - Jun 2022",
    cardTitle: "Immowelt Hamburg GmbH",
    url: "https://immowelt.de/",
    cardSubtitle:"Cyber Security Specialist",
    cardDetailedText: "We were able to successfully establish the Cyber Security Specialist role in the company with a bottom up approach. I worked closely with with Head of Quality Assurance and Security, the VP Engineering, and Group Leader DevOps to establish a scaling security mindset based on security and privacy by design principles. My main mission was to provide a cyber security strategy to address the ever-changing threat landscape and sustainably improve the security posture of our platform immowelt.de by leveraging a variety of tools like a company-wide Capture-The-Flag to promote gamified learning experiences or processes like an emergency logbook based on parts of the ISO incidence response framework to raise the transparency when an incident occurs or we're affected by a critical vulnerability. Based on the NIST framework, I established a cyber security maturity model which helped me to point out specific areas to improve across the Product and Development department. By combining the knowledge about the company, derived improvements from the security maturity model, and experienced incidents, I was able to significantly reduce the attack surface of the platform by analyzing the deployed infrastructure on more than 100 AWS accounts using Python to pin-point exposed resources.",
  },
  {
    title: "Aug 2015 - Sep 2021",
    cardTitle: "Immowelt Hamburg GmbH",
    url: "https://immowelt.de/",
    cardSubtitle:"DevOps Engineer",
    cardDetailedText: "As a DevOps Engineer at Immowelt Hamburg GmbH, I was responsible for a variety of projects and the legacy monolithic platform of immonet.de. These projects were mostly based on automate as much as possible to reduce the workload with the legacy platform. Among other things, this has been accomplished by replacing the legacy Infrastructure-as-Code tool Puppet by a highly modularized Ansible and step-by-step modernising parts of it with loosely coupled microservices. As the manual workload on the legacy platform has been reduced, I took a defining and pioneering role by establishing a DevOps mindset in the engineering team responsible to rebuild Immowelts main product the private property search in a all-in AWS strategy. My personal and company goal was to establish the \"You build it, you run it\" mindset and enable the team to work autonomously, independently, and efficiently with AWS but still maximizing the product scope without sacrificing a timely-reasonable product launch. At a certain point, the team took a leading role with the infrastructure and CI/CD development using Gitlab based products and Terraform (later CDKTF), which enabled me to gain experiences by developing several applications based on Java, Python, Typescript, and various frontend frameworks like Angular and React. The team and I were able to launch the minimum viable version of the private property search after 8 months and completed the feature set after 9 more months.",
  },
  {
    title: "Feb 2014 - Jul 2015",
    cardTitle: "Altigi GmbH // Goodgame Studios",
    url: "https://www.goodgamestudios.com/",
    cardSubtitle:"IT-Support",
    cardDetailedText: "In the IT-Support team of Goodgame Studios, I supported all colleagues in the company to work efficient, secure, and frictionless. After the onboarding, I also participated in the on-call duty for the platform and gained experience in coding, automation, and the Linux operating system. These experiences allowed me to participate in various projects like the client automation platform KACE by DELL or leading the live streaming solution based on Adobe Media Server and a handcrafted UI secured by an Active Directory login.",
  },
  {
    title: "Sep 2011 - Jan 2014",
    cardTitle: "tectumHOME GmbH",
    url: "https://web.archive.org/web/20161219122146/http://www.tectumhome.com/",
    cardSubtitle:"Apprenticeship IT Systems Electronics Technician",
    cardDetailedText: "As an apprentice at tectumHOME GmbH, I mainly worked in private estates of our customers. I was responsible to install Crestron smart home hardware, programming the central logic unit, designing user interfaces, and installing other mostly network based components. The goal was building smart homes to manually and automatically control every single devices varying from audio-video mixer to security systems using different control devices like smartphones or proprietary control panel.",
  }
];

const contact = {
  email: 'mzalewski@ownpixel.com',
}

const footer = {
  cleanfolio: 'https://github.com/rajshekhar26/cleanfolio'
}

export { header, about, projects, skills, experiences, contact, footer }
