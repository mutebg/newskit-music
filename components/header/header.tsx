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
  IconFilledCheck,
  Hidden,
  Popover,
  MenuDivider,
  Modal,
  ModalProps,
  IndeterminateProgressIndicator,
} from "newskit";
import Link from "next/link";

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

const MainMenu = () => (
  <GridLayoutItem justifySelf="center">
    <Menu>
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/">Explore</MenuItem>
      <MenuItem href="/">Library</MenuItem>
      <MenuItem href="/">
        <IconFilledSearch /> Search
      </MenuItem>
    </Menu>
  </GridLayoutItem>
);

const BrandLogo = () => (
  <GridLayout columns="auto 1fr" alignItems="center">
    <svg style={{ height: "48px", width: "auto" }} viewBox="0 0 1345 760">
      <use xlinkHref="/svgs/colors.svg#colors"></use>
    </svg>
    <TextBlock as="span" stylePreset="inkBase">
      NewsKit Demo
    </TextBlock>
  </GridLayout>
);

const UpdateModal = ({
  open,
  onDismiss,
}: Pick<ModalProps, "open" | "onDismiss">) => {
  const [isChecking, setIsChecking] = React.useState(true);

  const heading = (
    <TextBlock typographyPreset="utilitySubheading040" stylePreset="inkBase">
      Update
    </TextBlock>
  );

  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        console.log("timeout");
        setIsChecking(false);
      }, 2500);
    }
  }, [setIsChecking, open]);

  return (
    <Modal open={open} onDismiss={onDismiss} header={heading}>
      <GridLayout columns="auto 1fr" alignItems="center" columnGap="space030">
        {isChecking ? (
          <>
            <IndeterminateProgressIndicator
              overrides={{
                size: "iconSize030",
                stylePreset: "inkBrand010",
              }}
            />
            <TextBlock
              typographyPreset="utilitySubheading020"
              stylePreset="inkBase"
            >
              Checking for updates...
            </TextBlock>
          </>
        ) : (
          <>
            <IconFilledCheck
              overrides={{
                size: "iconSize030",
                stylePreset: "inkPositive",
              }}
            />
            <TextBlock
              typographyPreset="utilitySubheading020"
              stylePreset="inkBase"
            >
              Newskit Music is up to date
            </TextBlock>
          </>
        )}
      </GridLayout>
    </Modal>
  );
};

const UserSettings = ({ themeOnChange, themeName }: HeaderProps) => {
  const [updateModalIsShown, setUpdateModalIsShown] = React.useState(false);
  const handleUpdateModalOpen = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      setUpdateModalIsShown(true);
    },
    [setUpdateModalIsShown]
  );

  const handleUpdateModalClose = React.useCallback(() => {
    setUpdateModalIsShown(false);
  }, [setUpdateModalIsShown]);

  const userMenu = (
    <Menu vertical overrides={{ spaceInline: "space000" }}>
      <MenuItem href="/profile">Profile</MenuItem>
      <MenuItem href="/settings">Settings</MenuItem>
      <MenuDivider />
      <MenuItem href="/about">About</MenuItem>
      <MenuItem href="/" onClick={handleUpdateModalOpen}>
        Update
      </MenuItem>
      <MenuDivider />
      <MenuItem href="/">Logout</MenuItem>
    </Menu>
  );

  return (
    <>
      <GridLayoutItem justifySelf="end" paddingInlineEnd="space040">
        <GridLayout
          columns="auto auto"
          columnGap="space080"
          alignItems="center"
        >
          <Switch
            label="Toggle theme"
            onChange={themeOnChange}
            checked={themeName === "light"}
            overrides={{
              // @ts-ignore
              thumbIcon: DynamicThumbIcon,
            }}
          />
          <div>
            <Popover
              content={userMenu}
              closePosition="none"
              header={undefined}
              enableDismiss
              overrides={{
                content: {
                  paddingInline: "space000",
                  paddingBlock: "space000",
                },
              }}
            >
              <IconButton>
                <IconFilledAccountCircle overrides={{ size: "iconSize030" }} />
              </IconButton>
            </Popover>
          </div>
        </GridLayout>
      </GridLayoutItem>
      <UpdateModal
        open={updateModalIsShown}
        onDismiss={handleUpdateModalClose}
      />
    </>
  );
};

export const Header = ({ themeName, themeOnChange }: HeaderProps) => {
  return (
    <>
      <StyledBlock stylePreset="header" paddingInline="space030">
        <GridLayout
          alignItems="center"
          columns="1fr 1fr 1fr"
          justifyContent="space-between"
        >
          <BrandLogo />

          <MainMenu />

          <UserSettings themeName={themeName} themeOnChange={themeOnChange} />
        </GridLayout>
      </StyledBlock>
    </>
  );
};
