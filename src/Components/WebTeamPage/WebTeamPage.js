import React from 'react';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';
import WebTeamHeading from './WebTeamHeading/WebTeamHeading';
import ContributersHeading from './ContributersHeading/ContributersHeading';
import { WebTeam } from './WebTeam/WebTeam';
import { Contributers } from './Contributers/Contributers';

export const WebTeamPage = () => {
  return (
    <div>
      <Navigation />
      <WebTeamHeading />
      <WebTeam />
      <ContributersHeading />
      <Contributers />
      <ProjectFooter />
    </div>
  );
};

export default WebTeamPage;