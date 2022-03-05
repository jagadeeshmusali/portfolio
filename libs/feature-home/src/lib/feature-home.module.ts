import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {PortfolioDataAccessUserModule} from "@portfolio/portfolio/data-access-user";
import { IntroComponent } from './components/intro/intro.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillComponent } from './components/skills/skill/skill.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreativeWorksComponent } from './components/creative-works/creative-works.component';
import { CreativeWorkComponent } from './components/creative-works/creative-work/creative-work.component';
@NgModule({
  imports: [
    CommonModule,
    PortfolioDataAccessUserModule
  ],
  declarations: [
    HomeComponent,
    IntroComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    SkillComponent,
    ProjectsComponent,
    CreativeWorksComponent,
    CreativeWorkComponent
  ]
})
export class FeatureHomeModule {}
