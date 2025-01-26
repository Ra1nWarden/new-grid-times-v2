import React from "react";
import styled from "styled-components";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList type="opinion">
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 518px 1fr;
    gap: 16px;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    grid-template-columns: 477px 386px 1fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.desktopAndUp} {
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > :not(:nth-child(1)) {
    border-top: 1px solid ${COLORS.gray[300]};
    padding-top: 16px;
    @media ${QUERIES.tabletOnly} {
      ${(props) =>
        props.type === "opinion"
          ? `
      border-top: none;
      padding-top: 0;
      `
          : ""}
    }
  }

  @media ${QUERIES.tabletOnly} {
    ${(props) =>
      props.type === "opinion"
        ? `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    `
        : ""}
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.desktopAndUp} {
    border-top: 1px solid ${COLORS.gray[300]};
    padding-top: 16px;
  }
`;

export default MainStoryGrid;
