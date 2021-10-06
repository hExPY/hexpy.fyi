const header = {
  homepage: 'https://hexpy.fyi',
  title: 'hExPy',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Marvyn',
  role: 'Cyber Security Specialist',
  description: 'I\'am a dedicated, positive, communicative and down to earth techie loving to provide state-of-the-art solutions to make everyone\'s life more secure. Open-mindedness is my sixth forename (I really received five) and I\'am passionate about establishing a growth and learning mindset in teams. Within my last job I established a sustainable Devops culture through coaching and mentorship.',
  // resume: 'https://hexpy.fyi/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/marvyn-stephano-zalewski-515961a8/',
    github: 'https://github.com/hExPY',
    avatar: '/avatar.png'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'PenPaperHero',
    description:
      'A client only application to manage your Pen and Paper character. Mainly used for the \'Savage Worlds\' ruleset. Sadly my group stopped playing so this project isn\'t under development right now.',
    stack: ['TypeScript', 'Angular', 'SPA', 'PWA'],
    sourceCode: 'https://github.com/hExPY/PenPaperHero',
    livePreview: 'https://hexpy.github.io/PenPaperHero/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Growth Mindset',
  'TypeScript',
  'JavaScript',
  'Hunting Pokemon',
  'Terraform',
  'Agile Mindset',
  'CDK',
  'AWS',
  'Cycling',
  'Python',
  'Coaching',
  'Continuous Security',
  'Mentoring',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mzalewski@ownpixel.com',
}

export { header, about, projects, skills, contact }
