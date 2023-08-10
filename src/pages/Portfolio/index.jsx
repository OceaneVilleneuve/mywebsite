import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Meetsicians from './meetsicians';
import Airdnd from './airdnd'; // Import your project components
import MyWebsite from './my_website';

const PortfolioContainer = styled.div`
  display: flex;
`

const SubMenu = styled.nav`
  width: 20%;
  position: sticky;
  top: 45px;
  border-top: 0.5px solid black;
  border-bottom: 0.5px solid black;
  background-color: white;
  height: 100%;
  margin-left: 21px;
  margin-top: 45px;
  font-size: 13px;
`

const Projects = styled.div`
  flex: 1;
  padding: 20px;
`

const ProjectLink = styled(Link)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;
  text-decoration: ${props => props.$isActive ? "underline" : "none"};
  font-family: 'Space Mono',monospace;
  font-style: italic;
  font-weight: ${props => props.$isActive ? "bold" : "none"};
`

const LiStyled = styled.li`
  list-style-type: none;
`

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    { id: 'meetsicians', title: 'Meetsicians' },
    { id: 'airdnd', title: 'Air DnD' },
    { id: 'mywebsite', title: 'My Website' },
    // Add more projects
  ];

  const handleProjectClick = (projectId) => {
    setActiveProject(projectId);
  };

  return (
    <PortfolioContainer>
      <SubMenu>
        <ul>
          {projects.map(project => (
            <LiStyled key={project.id}>
              <ProjectLink
                to={`#${project.id}`}
                onClick={() => handleProjectClick(project.id)}
                $isActive = {activeProject === project.id}
              >
                {project.title}
              </ProjectLink>
            </LiStyled>
          ))}
        </ul>
      </SubMenu>
      <Projects>
        {activeProject === 'meetsicians' && <Meetsicians />}
        {activeProject === 'airdnd' && <Airdnd />}
        {activeProject === 'mywebsite' && <MyWebsite />}
      </Projects>
    </PortfolioContainer>
  );
};

export default Portfolio;
