// Replace a photo by pasting a new file into src/assets with the same name.
import aboutImageFile from './assets/about.jpg'
import ctaImageFile from './assets/cta.jpg'
import heroImage from './assets/hero.jpg'
import projectCommercial from './assets/project-commercial.jpg'
import projectInterior from './assets/project-interior.jpg'
import projectRenovation from './assets/project-renovation.jpg'
import projectResidence from './assets/project-residence.jpg'
import serviceConstruction from './assets/service-construction.jpg'
import serviceInterior from './assets/service-interior.jpg'
import serviceRenovation from './assets/service-renovation.jpg'
import serviceTurnkey from './assets/service-turnkey.jpg'
import testimonialInterior from './assets/testimonial-interior.jpg'
import testimonialRenovation from './assets/testimonial-renovation.jpg'
import testimonialResidential from './assets/testimonial-residential.jpg'

export const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Process', id: 'process' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
] as const

export const hero = {
  image: heroImage,
  alt: 'Modern villa with warm interior lighting at dusk',
  kicker: 'Construction · Interiors · Turnkey Projects',
  title: 'From Concept\nto Completion.',
  subtitle: 'Thoughtful design. Quality construction. Spaces built around you.',
}

export const aboutImage = aboutImageFile

export const aboutFeatures = [
  {
    title: 'Construction',
    text: 'Strong foundations for a better tomorrow',
  },
  {
    title: 'Interiors',
    text: 'Functional and refined spaces',
  },
  {
    title: 'Turnkey Projects',
    text: 'Design, execution & handover under one roof',
  },
  {
    title: 'Renovation',
    text: 'Transforming existing spaces with a fresh identity',
  },
]

export const services = [
  {
    title: 'Construction',
    summary: 'Complete residential & commercial construction',
    detail:
      'New homes and commercial buildings, carried from drawings to a finished structure. Site supervision, sequencing, and material choices stay visible, so the building matches the plan you approved.',
    image: serviceConstruction,
    projectType: 'Construction',
  },
  {
    title: 'Interior Design',
    summary: 'Functional and refined interior spaces',
    detail:
      'Layouts, lighting, furniture, and finishes are designed as one room, not added at the end. The result is a space that feels calm, practical, and complete on the day you move in.',
    image: serviceInterior,
    projectType: 'Interior Design',
  },
  {
    title: 'Turnkey Projects',
    summary: 'Design, execution & handover under one roof',
    detail:
      'One team stays with the project from the first layout to the keys. Design, coordination, execution, and handover sit on a single timeline, with one point of contact throughout.',
    image: serviceTurnkey,
    projectType: 'Turnkey Projects',
  },
  {
    title: 'Renovation',
    summary: 'Transforming existing spaces',
    detail:
      'Existing homes and workplaces are reopened with a fresh plan, careful demolition, and finishes that sit naturally with what is worth keeping.',
    image: serviceRenovation,
    projectType: 'Renovation',
  },
]

export const projectFilters = ['All', 'Residential', 'Commercial', 'Interiors', 'Renovation'] as const

export type ProjectFilter = (typeof projectFilters)[number]
export type ProjectCategory = Exclude<ProjectFilter, 'All'>

export type Project = {
  title: string
  location: string
  category: ProjectCategory
  image: string
  summary: string
}

export const projects: Project[] = [
  {
    title: 'Modern Residence',
    location: 'Indore, MP',
    category: 'Residential',
    image: projectResidence,
    summary:
      'A contemporary family home with a shaded court, deep overhangs, and interiors planned around how the house is actually used.',
  },
  {
    title: 'Luxury Interior',
    location: 'Indore, MP',
    category: 'Interiors',
    image: projectInterior,
    summary:
      'Warm timber, quiet upholstery, and layered lighting for a living room that stays comfortable through long evenings.',
  },
  {
    title: 'Commercial Building',
    location: 'Indore, MP',
    category: 'Commercial',
    image: projectCommercial,
    summary:
      'A commercial frontage with a clear arrival, efficient floors, and finishes chosen for daily traffic and easy upkeep.',
  },
  {
    title: 'Home Renovation',
    location: 'Indore, MP',
    category: 'Renovation',
    image: projectRenovation,
    summary:
      'An existing home opened up with stone, timber, and a new sequence of rooms, without losing the parts that already worked.',
  },
]

export const processSteps = [
  { step: '1', title: 'Consultation', text: 'Understand your needs' },
  { step: '2', title: 'Design', text: 'Concept and planning' },
  { step: '3', title: 'Planning', text: 'Timeline and costing' },
  { step: '4', title: 'Execution', text: 'On-site construction' },
  { step: '5', title: 'Handover', text: 'Your space, ready to live' },
]

export const testimonials = [
  {
    quote:
      'Very professional team. Work was delivered on time and the quality exceeded our expectations. Highly recommended!',
    name: 'Mr. Rohit Sharma',
    meta: 'Residential Project | Indore',
    image: testimonialResidential,
  },
  {
    quote:
      'From design to execution, everything was handled smoothly. The team understood our requirements perfectly.',
    name: 'Mrs. Pooja Mehta',
    meta: 'Interior Project | Indore',
    image: testimonialInterior,
  },
  {
    quote:
      'Transparent costing, regular updates and excellent workmanship. Really happy with the overall experience.',
    name: 'Mr. Akash Jain',
    meta: 'Renovation Project | Indore',
    image: testimonialRenovation,
  },
]

export const ctaImage = ctaImageFile

export const projectTypes = [
  'Construction',
  'Interior Design',
  'Turnkey Projects',
  'Renovation',
  'Not sure yet',
]
