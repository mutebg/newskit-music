import * as React from "react";
import {
  Menu,
  MenuItem,
  GridLayout,
  Block,
  IconFilledSearch,
  styled,
  GridLayoutItem,
  IconButton,
  IconFilledAccountCircle,
  getColorCssFromTheme,
  Switch,
  TextBlock,
  IconFilledDarkMode,
  IconFilledLightMode,
  Hidden,
} from "newskit";
import { HeaderProps } from "./types";

const StyledBlock = styled(Block)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  ${getColorCssFromTheme("background", "interface020")}
`;

const DynamicThumbIcon = ({ checked }: { checked: boolean }) =>
  !checked ? <IconFilledDarkMode /> : <IconFilledLightMode />;

export const Header = ({ themeName, themeOnChange }: HeaderProps) => {
  return (
    <StyledBlock
      stylePreset="header"
      paddingInlineStart="space030"
      paddingInlineEnd="space050"
    >
      <GridLayout
        alignItems="center"
        columns="1fr 1fr 1fr"
        justifyContent="space-between"
      >
        <GridLayout columns="auto 1fr" alignItems="center">
          <svg style={{ height: "48px", width: "auto" }} viewBox="0 0 1345 760">
            <use xlinkHref="/svgs/colors.svg#colors"></use>
          </svg>
          <TextBlock as="span" stylePreset="inkBase">
            NewsKit Demo
          </TextBlock>
        </GridLayout>

        <Menu>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/">Explore</MenuItem>
          <MenuItem href="/">Library</MenuItem>
          <MenuItem href="/">
            <IconFilledSearch /> Search
          </MenuItem>
        </Menu>

        <GridLayoutItem justifySelf="end">
          <GridLayout columns="auto auto" columnGap="space080">
            <Switch
              label="Toggle theme"
              onChange={themeOnChange}
              checked={themeName === "light"}
              overrides={{
                // @ts-ignore
                thumbIcon: DynamicThumbIcon,
              }}
            />

            <IconButton href="/settings">
              <IconFilledAccountCircle overrides={{ size: "iconSize030" }} />
            </IconButton>
          </GridLayout>
        </GridLayoutItem>
      </GridLayout>
    </StyledBlock>
  );
};
