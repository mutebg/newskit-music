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
} from "newskit";

const FormGrid = ({ children }: { children: React.ReactNode }) => children;

const tabs = [
  {
    label: "General",
    content: (
      <FormGrid>
        <FormInput>
          <Switch label="Restricted Mode" />
          <FormInputAssistiveText>
            Restricted Mode can help to hide videos and songs with potentially
            mature content. No filter is 100% accurate, but it should help you
            to avoid most of this type of content.
          </FormInputAssistiveText>
        </FormInput>

        <FormInput>
          <Switch label="Show your liked music from YouTube" />
          <FormInputAssistiveText>
            Music videos that you've marked with a thumbs up in other YouTube
            apps will be shown in the 'Your likes' playlist
          </FormInputAssistiveText>
        </FormInput>
      </FormGrid>
    ),
  },
  {
    label: "Playback",
    content: null,
  },
  {
    label: "Privacy",
    content: null,
  },
  {
    label: "Language and Location",
    content: null,
  },
];

const Settings: NextPage = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <TextBlock>Settings</TextBlock>
      <Tabs
        distribution="equal"
        size="medium"
        overrides={{
          selectionIndicator: { track: {}, indicator: {} },
        }}
        vertical
        initialSelectedIndex={0}
        indicatorPosition="end"
      >
        {tabs.map(({ label, content }, index) => (
          <Tab label={label} key={label}>
            {content}
            {label}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Settings;
