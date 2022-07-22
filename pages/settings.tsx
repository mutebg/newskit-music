/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from "react";
import type { NextPage } from "next";
import { Tabs, Tab, SelectOption, useBreakpointKey } from "newskit";
import {
  FormGrid,
  SwitchFormInput,
  SelectFormInput,
} from "../components/form/form";

import { PageTemplate } from "../components/page-template";

const tabs = [
  {
    label: "General",
    content: (
      <FormGrid>
        <SwitchFormInput
          label="Restricted Mode"
          name="restrictedMode"
          assistiveText=" Restricted Mode can help to hide videos and songs with potentially
              mature content. No filter is 100% accurate, but it should help you
              to avoid most of this type of content."
        />
        <SwitchFormInput
          label="Show your liked music from Newskit Music"
          name="showLikedMusic"
          assistiveText=" Music videos that you've marked with a thumbs up in other Newskit
              Music apps will be shown in the 'Your likes' playlist"
        />
      </FormGrid>
    ),
  },
  {
    label: "Playback",
    content: (
      <FormGrid>
        <SelectFormInput
          label="Audi quality"
          name="audioQuality"
          assistiveText=" Adjust your audio quality"
        >
          <SelectOption value="low">Low</SelectOption>
          <SelectOption value="normal" selected>
            Normal
          </SelectOption>
          <SelectOption value="high">High</SelectOption>
        </SelectFormInput>
      </FormGrid>
    ),
  },
  {
    label: "Privacy",
    content: null,
  },
  {
    label: "Language and Location",
    content: (
      <FormGrid>
        <SelectFormInput
          label="Location"
          name="location"
          assistiveText="Set your location"
        >
          <SelectOption value="BG">Bulgaria</SelectOption>
          <SelectOption value="UK" selected>
            UK
          </SelectOption>
          <SelectOption value="NL">The Netherlands</SelectOption>
        </SelectFormInput>
        <SelectFormInput
          label="Language"
          name="Language"
          assistiveText="Set your language"
        >
          <SelectOption value="BG">Bulgarian</SelectOption>
          <SelectOption value="UK" selected>
            English
          </SelectOption>
          <SelectOption value="NL">Dutch</SelectOption>
        </SelectFormInput>
      </FormGrid>
    ),
  },
];

const Settings: NextPage = () => {
  const verticalTabs = !["sm", "xs"].includes(useBreakpointKey());
  console.log({ verticalTabs });

  return (
    <PageTemplate title="Settings">
      <Tabs
        // distribution="start"
        overrides={{
          selectionIndicator: { track: {}, indicator: {} },
          scroll: {
            props: {
              scrollBar: true,
              controls: "static",
            },
          },
        }}
        vertical={verticalTabs}
        initialSelectedIndex={0}
        indicatorPosition="end"
        size="large"
      >
        {tabs.map(({ label, content }) => (
          <Tab label={label} key={label}>
            {content}
          </Tab>
        ))}
      </Tabs>
    </PageTemplate>
  );
};

export default Settings;
