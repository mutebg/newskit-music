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
  FormInputTextField,
  FormInputRadioButton,
  Fieldset,
  RadioGroup,
} from "newskit";

const labelOverrides = { typographyPreset: "utilityButton030" };
const assistiveTextOverrides = { typographyPreset: "utilityBody020" };

export const FormGrid = ({
  children,
  overrides,
}: {
  children: React.ReactNode;
  overrides?: object;
}) => {
  return (
    <GridLayout
      rowGap="space050"
      overrides={{
        paddingInline: { xs: "space000", md: "space060" },
        paddingBlock: "space020",
        ...overrides,
      }}
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

const switchOverrides = {
  label: { typographyPreset: "utilityButton030" },
  marginBlockEnd: "space030",
};

export const SwitchFormInput = ({
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

export const SelectFormInput = ({
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
      <GridLayout columns={{ md: "1fr 1fr" }} alignItems="center">
        <FormInputLabel overrides={labelOverrides}>{label}</FormInputLabel>
        <FormInputSelect>{children}</FormInputSelect>
      </GridLayout>
      <FormInputAssistiveText overrides={assistiveTextOverrides}>
        {assistiveText}
      </FormInputAssistiveText>
    </div>
  </FormInput>
);

export const TextFormInput = ({
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
      <GridLayout columns={{ md: "1fr 1fr" }} alignItems="center">
        <FormInputLabel overrides={labelOverrides}>{label}</FormInputLabel>
        <FormInputTextField />
      </GridLayout>
      <FormInputAssistiveText overrides={assistiveTextOverrides}>
        {assistiveText}
      </FormInputAssistiveText>
    </div>
  </FormInput>
);

export const RadioFormInput = ({
  label,
  assistiveText,
  name,
  values = [],
}: {
  label: string;
  assistiveText: string;
  name: string;
  values: string[];
}) => (
  <Fieldset legend={label} overrides={{ legend: labelOverrides }}>
    <RadioGroup>
      {values.map((value) => (
        <FormInput
          key={value}
          name={name}
          rules={{ required: "Please select an option" }}
        >
          <FormInputRadioButton
            label={value}
            value={value}
            overrides={{ spaceStack: "space030" }}
          />
        </FormInput>
      ))}
    </RadioGroup>
    <FormInput name="interest" rules={{ required: "Please select an option" }}>
      <FormInputAssistiveText validationIcon overrides={assistiveTextOverrides}>
        {assistiveText}
      </FormInputAssistiveText>
    </FormInput>
  </Fieldset>
);
