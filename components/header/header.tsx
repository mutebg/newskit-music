import * as React from "react";
import {
  Menu,
  MenuItem,
  GridLayout,
  Block,
  IconFilledSearch,
  styled,
} from "newskit";

const StyledBlock = styled(Block)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Header = () => (
  <StyledBlock stylePreset="header">
    <GridLayout
      alignItems="center"
      columns="auto auto auto"
      justifyContent="space-between"
    >
      <GridLayout columns="auto auto" alignItems="center">
        <svg style={{ height: "48px", width: "auto" }} viewBox="0 0 1345 760">
          <use xlinkHref="/svgs/colors.svg#colors"></use>
        </svg>
        <span>NewsKit Demo</span>
      </GridLayout>
      <Menu>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/">Explore</MenuItem>
        <MenuItem href="/">Library</MenuItem>
        <MenuItem href="/">
          <IconFilledSearch /> Search
        </MenuItem>
      </Menu>
      <p>Profile</p>
    </GridLayout>
  </StyledBlock>
);
