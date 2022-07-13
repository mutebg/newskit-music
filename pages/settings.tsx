/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from "react";
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
  SelectOptionProps,
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

const SwitchFormInput = ({
  label,
  assistiveText,
  name,
}: {
  label: string;
  assistiveText: string;
  name: string;
}) => (
  <FormInput name={name}>
    <div>
      <Switch label={label} overrides={switchOverrides} />
      <FormInputAssistiveText overrides={assistiveTextOverrides}>
        {assistiveText}
      </FormInputAssistiveText>
    </div>
  </FormInput>
);

const SelectFormInput = ({
  label,
  assistiveText,
  name,
  children,
}: {
  label: string;
  assistiveText: string;
  name: string;
  children: React.ReactElement<SelectOptionProps>[];
}) => (
  <FormInput name={name}>
    <div>
      <GridLayout columns="1fr 1fr" alignItems="center">
        <FormInputLabel overrides={labelOverrides}>{label}</FormInputLabel>
        <FormInputSelect>{children}</FormInputSelect>
      </GridLayout>
      <FormInputAssistiveText overrides={assistiveTextOverrides}>
        {assistiveText}
      </FormInputAssistiveText>
    </div>
  </FormInput>
);

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
        stylePreset="inkBase"
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
