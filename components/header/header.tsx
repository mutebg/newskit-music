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
  Popover,
  MenuDivider,
  Modal,
  ModalProps,
  IndeterminateProgressIndicator,
  IconFilledMenu,
  Drawer,
} from "newskit";
import Link from "next/link";
import { HideMobile, HideDesktop } from "../hide";

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

const DrawerMenu = () => (
  <Menu vertical>
    <MenuItem href="/">Home</MenuItem>
    <MenuItem href="/">Explore</MenuItem>
    <MenuItem href="/">Library</MenuItem>
    <MenuItem href="/">Search</MenuItem>
  </Menu>
);

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
    <HideMobile>
      <TextBlock as="span" stylePreset="inkBase">
        NewsKit Demo
      </TextBlock>
    </HideMobile>
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
    <GridLayout overrides={{ minWidth: "150px" }}>
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
    </GridLayout>
  );

  return (
    <>
      <GridLayoutItem justifySelf="end" paddingInlineEnd={{ md: "space040" }}>
        <GridLayout
          columns="auto auto"
          columnGap={{ xs: "space000", md: "space080" }}
          alignItems="center"
        >
          <HideMobile>
            <Switch
              label="Toggle theme"
              onChange={themeOnChange}
              checked={themeName === "light"}
              overrides={{
                // @ts-ignore
                thumbIcon: DynamicThumbIcon,
              }}
            />
          </HideMobile>
          <div>
            <Popover
              content={userMenu}
              closePosition="none"
              header={undefined}
              enableDismiss
              placement="bottom-end"
              overrides={{
                content: {
                  paddingInline: "space000",
                  paddingBlock: "space010",
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

const areas = {
  xs: "menu brand user",
  md: "brand menu user",
};

const columns = {
  xs: "auto 1fr auto",
  md: "1fr 1fr 1fr",
};

export const Header = ({ themeName, themeOnChange }: HeaderProps) => {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);

  return (
    <>
      <StyledBlock stylePreset="header" paddingInline="space030">
        <GridLayout
          alignItems="center"
          columns={columns}
          justifyContent="space-between"
          areas={areas}
        >
          {
            // @ts-ignore
            (Areas) => (
              <>
                <Areas.Brand justifySelf={{ xs: "center", md: "start" }}>
                  <BrandLogo />
                </Areas.Brand>
                <Areas.Menu>
                  <HideDesktop>
                    <IconButton onClick={() => setDrawerIsOpen(true)}>
                      <IconFilledMenu />
                    </IconButton>
                  </HideDesktop>
                  <HideMobile>
                    <MainMenu />
                  </HideMobile>
                </Areas.Menu>
                <Areas.User justifySelf="end">
                  <UserSettings
                    themeName={themeName}
                    themeOnChange={themeOnChange}
                  />
                </Areas.User>
              </>
            )
          }
        </GridLayout>
        <Drawer
          open={drawerIsOpen}
          onDismiss={() => setDrawerIsOpen(false)}
          overrides={{
            content: {
              spaceInset: "space010",
            },
            closeButton: {
              spaceInset: "space010",
            },
          }}
        >
          <DrawerMenu />
        </Drawer>
      </StyledBlock>
    </>
  );
};
