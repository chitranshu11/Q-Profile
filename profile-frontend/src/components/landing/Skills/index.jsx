
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card } from "components/common";
import Star from "components/common/Icons/Star";
import Fork from "components/common/Icons/Fork";
import axios from "axios";
import { skills } from 'data/config';

import { Wrapper, Grid, Item, Content, Stats } from "./styles";

export const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const [repos, setRepos] = useState([]);
  // console.log(process.env.GITHUB_TOKEN);
  useEffect(() => {
     setRepos(skills)
  
  }, []);
  return (
    <Wrapper as={Container} id="skills">
      {repos.length > 0 && <h2>Skills</h2>}
      <Grid>
        {repos.map((node) => (
          <Item
            key={node.id}
            as="a"
            href={node.svn_url}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <Card theme={theme}>
              <Content>
                <h3>{node.name}</h3>
                <p>{node.description}</p>
              </Content>
              <Stats theme={theme}>
              
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
