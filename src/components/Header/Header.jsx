import React from "react";
import styled from "styled-components";
import { Menu, Search, User } from "react-feather";

import { FAMILIES, QUERIES, WEIGHTS } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  const actions = (
    <>
      <button>
        <Search size={24} />
      </button>
      <button>
        <Menu size={24} />
      </button>
    </>
  );
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>{actions}</ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>{actions}</DesktopActionGroup>
        <Logo />
        <SubscribeGroup>
          <Button>SUBSCRIBE</Button>
          <Link>Already a subscriber?</Link>
        </SubscribeGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const SubscribeGroup = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    align-self: end;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletAndUp} {
    margin-top: 104px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
    margin-top: 16px;
  }
`;

const Link = styled.a`
  font-family: ${FAMILIES.serif};
  font-style: italic;
  font-weight: ${WEIGHTS.normal};
  text-decoration: underline;
`;

export default Header;
