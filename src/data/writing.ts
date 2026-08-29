import { articleNorthStar } from "./articles/northStar";
import { articleHowIWork } from "./articles/howIWork";
import { articleEngineeringJourney } from "./articles/engineeringJourney";
import { articleIdentityAndInfluences } from "./articles/identityAndInfluences";
import { articleWhyIChoseToBeAnEngineer } from "./articles/whyIChoseToBeAnEngineer";
import { articleSameSystemDifferentLanguages } from "./articles/sameSystemDifferentLanguages";
import { articleBuildingAgentsTwice } from "./articles/buildingAgentsTwice";
import { articleBeyondTheBlackBox } from "./articles/beyondTheBlackBox";
import { articleLocalIntelligence } from "./articles/localIntelligence";
import { articleBeyondAnApiCall } from "./articles/beyondAnApiCall";
import { articleDesigningForFailure } from "./articles/designingForFailure";
import { articleRealTimeEvolved } from "./articles/realTimeEvolved";
import { articleFromCourseworkToSystems } from "./articles/fromCourseworkToSystems";
import { articleWhyOneBackendIsntEnough } from "./articles/whyOneBackendIsntEnough";
import { articleBuildingForProduction } from "./articles/buildingForProduction";

export interface WritingArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[]; // Content paragraphs or markdown blocks
  relatedProjects?: string[]; // IDs of related projects
  relatedSkills?: string[];
  readingTime: string;
}

export const WRITING_ARTICLES: WritingArticle[] = [
  articleNorthStar,
  articleHowIWork,
  articleEngineeringJourney,
  articleIdentityAndInfluences,
  articleWhyIChoseToBeAnEngineer,
  articleSameSystemDifferentLanguages,
  articleBuildingAgentsTwice,
  articleBeyondTheBlackBox,
  articleLocalIntelligence,
  articleBeyondAnApiCall,
  articleDesigningForFailure,
  articleRealTimeEvolved,
  articleFromCourseworkToSystems,
  articleWhyOneBackendIsntEnough,
  articleBuildingForProduction,
];
