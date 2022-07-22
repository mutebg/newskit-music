/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from "react";
import type { NextPage } from "next";
import {
  Form,
  Button,
  SelectOption,
  GridLayout,
  GridLayoutItem,
} from "newskit";
import {
  FormGrid,
  SwitchFormInput,
  SelectFormInput,
  TextFormInput,
  RadioFormInput,
} from "../components/form/form";
import { PageTemplate } from "../components/page-template";

const Profile: NextPage = () => {
  return (
    <PageTemplate title="Profile">
      <Form onSubmit={() => null}>
        <FormGrid overrides={{ paddingInline: "space000" }}>
          <TextFormInput
            name="names"
            label="Full name"
            assistiveText="Enter your first and last name"
          />
          <TextFormInput
            name="address"
            label="Street address"
            assistiveText="Enter your street address"
          />
          <SelectFormInput
            label="Nationality"
            name="nationality"
            assistiveText="Select your nationality"
          >
            <SelectOption value="BG">BG</SelectOption>
            <SelectOption value="UK" selected>
              UK
            </SelectOption>
            <SelectOption value="NL">NL</SelectOption>
          </SelectFormInput>
          <RadioFormInput
            name="interest"
            label="Interest"
            values={["Rock", "Indie", "Pop", "Jazz"]}
            assistiveText="Select your favorite genre"
          />
          <GridLayoutItem alignSelf="start">
            <Button>Save</Button>
          </GridLayoutItem>
        </FormGrid>
      </Form>
    </PageTemplate>
  );
};

export default Profile;
