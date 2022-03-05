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
import { StartAProjectComponent } from './components/start-a-project/start-a-project.component';
import { FoooterComponent } from './components/foooter/foooter.component';
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
    CreativeWorkComponent,
    StartAProjectComponent,
    FoooterComponent
  ]
})
export class FeatureHomeModule {}
