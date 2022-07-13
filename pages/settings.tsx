/* eslint-disable react/no-unescaped-entities */
import React from "react";
import type { NextPage } from "next";
import {
  GridLayout,
  TextBlock,
  Tabs,
  Tab,
  Switch,
  Form,
  FormInput,
  FormInputAssistiveText,
  Divider,
  Select,
  FormInputSelect,
  SelectOption,
  FormInputLabel,
} from "newskit";

const FormGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <GridLayout
      rowGap="space050"
      overrides={{ paddingInline: "space060", paddingBlock: "space020" }}
    >
      {React.Children.map(children, (child, index) => (
        <>
          {child}
          <Divider />
        </>
      ))}
    </GridLayout>
  );
};

const labelOverrides = { typographyPreset: "utilityButton030" };

const switchOverrides = {
  label: { typographyPreset: "utilityButton030" },
  marginBlockEnd: "space030",
};
const assistiveTextOverrides = { typographyPreset: "utilityBody020" };

const tabs = [
  {
    label: "General",
    content: (
      <FormGrid>
        <FormInput>
          <div>
            <Switch label="Restricted Mode" overrides={switchOverrides} />
            <FormInputAssistiveText overrides={assistiveTextOverrides}>
              Restricted Mode can help to hide videos and songs with potentially
              mature content. No filter is 100% accurate, but it should help you
              to avoid most of this type of content.
            </FormInputAssistiveText>
          </div>
        </FormInput>

        <FormInput>
          <div>
            <Switch
              label="Show your liked music from Newskit Music"
              overrides={switchOverrides}
            />
            <FormInputAssistiveText overrides={assistiveTextOverrides}>
              Music videos that you've marked with a thumbs up in other Newskit
              Music apps will be shown in the 'Your likes' playlist
            </FormInputAssistiveText>
          </div>
        </FormInput>
      </FormGrid>
    ),
  },
  {
    label: "Playback",
    content: (
      <FormGrid>
        <FormInput>
          <div>
            <GridLayout columns="1fr 1fr" alignItems="center">
              <FormInputLabel overrides={labelOverrides}>
                Audi quality
              </FormInputLabel>
              <FormInputSelect>
                <SelectOption value="low">Low</SelectOption>
                <SelectOption value="normal">Normal</SelectOption>
                <SelectOption value="high">High</SelectOption>
              </FormInputSelect>
            </GridLayout>
            <FormInputAssistiveText overrides={assistiveTextOverrides}>
              Adjust your audio quality
            </FormInputAssistiveText>
          </div>
        </FormInput>
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
        <FormInput name="location">
          <div>
            <GridLayout columns="1fr 1fr" alignItems="center">
              <FormInputLabel overrides={labelOverrides}>
                Location
              </FormInputLabel>
              <FormInputSelect>
                <SelectOption value="low">Bulgaria</SelectOption>
                <SelectOption value="normal">UK</SelectOption>
                <SelectOption value="high">The Netherlands</SelectOption>
              </FormInputSelect>
            </GridLayout>
            <FormInputAssistiveText overrides={assistiveTextOverrides}>
              Your location
            </FormInputAssistiveText>
          </div>
        </FormInput>
        <FormInput name="language">
          <div>
            <GridLayout columns="1fr 1fr" alignItems="center">
              <FormInputLabel overrides={labelOverrides}>
                Language
              </FormInputLabel>
              <FormInputSelect>
                <SelectOption value="low">Bulgarian</SelectOption>
                <SelectOption value="normal">English</SelectOption>
                <SelectOption value="high">Dutch</SelectOption>
              </FormInputSelect>
            </GridLayout>
            <FormInputAssistiveText overrides={assistiveTextOverrides}>
              Your language
            </FormInputAssistiveText>
          </div>
        </FormInput>
      </FormGrid>
    ),
  },
];

const Settings: NextPage = () => {
  return (
    <GridLayout
      rowGap="space050"
      overrides={{
        // marginInline: "auto",
        // maxWidth: "1200px",
        marginBlockStart: "space070",
        paddingInline: "space040",
      }}
    >
      <TextBlock
        typographyPreset="utilityHeading050"
        paddingInlineStart="space040"
      >
        Settings
      </TextBlock>
      <Tabs
        distribution="start"
        overrides={{
          selectionIndicator: { track: {}, indicator: {} },
        }}
        vertical
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
    </GridLayout>
  );
};

export default Settings;
