import { Technologies } from './technologies';
import { Testimonial } from './testimonial';
import { User } from './user';

export interface Profile {
  user: User;
  tagLine: string;
  greetingMessage: string;
  aboutMe: string;
  frontEndTechnologies: string[];
  technologies: Technologies;
  testimonials: Testimonial[];
  roles: string[];
}
