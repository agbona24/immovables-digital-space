import post from './post';
import author from './author';
import category from './category';
import project from './project';
import service from './service';
import teamMember from './teamMember';
import testimonial from './testimonial';
import packageSchema from './package';
import siteSettings from './siteSettings';
import homePage from './homePage';
import industry from './industry';
import aiSolution from './aiSolution';
import faq from './faq';
import servicesPage from './servicesPage';
import aiSolutionsPage from './aiSolutionsPage';
import industriesPage from './industriesPage';
import contactPage from './contactPage';
import freeAuditPage from './freeAuditPage';
import aboutPage from './aboutPage';
import insightsPage from './insightsPage';
import portfolioPage from './portfolioPage';
import packagesPage from './packagesPage';

export const schemaTypes = [
  // Site-wide
  siteSettings,
  
  // Page content
  homePage,
  servicesPage,
  aiSolutionsPage,
  industriesPage,
  contactPage,
  freeAuditPage,
  aboutPage,
  insightsPage,
  portfolioPage,
  packagesPage,
  
  // Content types
  post,
  author,
  category,
  project,
  service,
  teamMember,
  testimonial,
  packageSchema,
  industry,
  aiSolution,
  faq,
];
