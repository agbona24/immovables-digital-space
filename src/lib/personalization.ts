// Personalization Engine - Track visitor preferences and behavior
export interface VisitorProfile {
  id: string;
  industry?: string;
  interests: string[];
  visitCount: number;
  lastVisit: string;
  firstVisit: string;
  pagesVisited: string[];
  completedAssessment: boolean;
  assessmentScore?: number;
  preferredServices: string[];
  budgetRange?: string;
}

const STORAGE_KEY = 'ids_visitor_profile';

// Generate unique visitor ID
const generateVisitorId = (): string => {
  return `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Get current visitor profile
export const getVisitorProfile = (): VisitorProfile | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error reading visitor profile:', error);
    return null;
  }
};

// Initialize or update visitor profile
export const initVisitorProfile = (): VisitorProfile => {
  const existing = getVisitorProfile();
  const now = new Date().toISOString();
  
  if (existing) {
    // Update existing profile
    const updated: VisitorProfile = {
      ...existing,
      visitCount: existing.visitCount + 1,
      lastVisit: now,
    };
    saveVisitorProfile(updated);
    return updated;
  } else {
    // Create new profile
    const newProfile: VisitorProfile = {
      id: generateVisitorId(),
      interests: [],
      visitCount: 1,
      lastVisit: now,
      firstVisit: now,
      pagesVisited: [],
      completedAssessment: false,
      preferredServices: [],
    };
    saveVisitorProfile(newProfile);
    return newProfile;
  }
};

// Save visitor profile
export const saveVisitorProfile = (profile: VisitorProfile): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (error) {
    console.error('Error saving visitor profile:', error);
  }
};

// Update visitor industry
export const updateIndustry = (industry: string): void => {
  const profile = getVisitorProfile();
  if (profile) {
    profile.industry = industry;
    saveVisitorProfile(profile);
  }
};

// Track page visit
export const trackPageVisit = (pagePath: string): void => {
  const profile = getVisitorProfile();
  if (profile) {
    if (!profile.pagesVisited.includes(pagePath)) {
      profile.pagesVisited.push(pagePath);
    }
    saveVisitorProfile(profile);
  }
};

// Add interest
export const addInterest = (interest: string): void => {
  const profile = getVisitorProfile();
  if (profile && !profile.interests.includes(interest)) {
    profile.interests.push(interest);
    saveVisitorProfile(profile);
  }
};

// Update preferred services
export const updatePreferredServices = (services: string[]): void => {
  const profile = getVisitorProfile();
  if (profile) {
    profile.preferredServices = services;
    saveVisitorProfile(profile);
  }
};

// Update budget range
export const updateBudgetRange = (range: string): void => {
  const profile = getVisitorProfile();
  if (profile) {
    profile.budgetRange = range;
    saveVisitorProfile(profile);
  }
};

// Mark assessment as completed
export const completeAssessment = (score: number): void => {
  const profile = getVisitorProfile();
  if (profile) {
    profile.completedAssessment = true;
    profile.assessmentScore = score;
    saveVisitorProfile(profile);
  }
};

// Check if returning visitor
export const isReturningVisitor = (): boolean => {
  const profile = getVisitorProfile();
  return profile ? profile.visitCount > 1 : false;
};

// Get days since first visit
export const getDaysSinceFirstVisit = (): number => {
  const profile = getVisitorProfile();
  if (!profile) return 0;
  
  const firstVisit = new Date(profile.firstVisit);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - firstVisit.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

// Get personalized recommendations
export const getRecommendations = (): string[] => {
  const profile = getVisitorProfile();
  if (!profile) return [];
  
  const recommendations: string[] = [];
  
  // Based on pages visited
  if (profile.pagesVisited.includes('/services')) {
    recommendations.push('Explore our service packages');
  }
  if (profile.pagesVisited.includes('/portfolio')) {
    recommendations.push('View similar projects in your industry');
  }
  if (profile.pagesVisited.includes('/ai-solutions')) {
    recommendations.push('Get a free AI readiness assessment');
  }
  
  // Based on assessment completion
  if (!profile.completedAssessment) {
    recommendations.push('Take our 2-minute Digital Maturity Assessment');
  }
  
  // Based on interests
  if (profile.interests.includes('SEO')) {
    recommendations.push('See our SEO success stories');
  }
  if (profile.interests.includes('Web Development')) {
    recommendations.push('Check out our latest web projects');
  }
  
  return recommendations;
};

// Clear visitor profile (for testing or user request)
export const clearVisitorProfile = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
};
