import {
  TextBlock,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  ModalProps,
  TextField,
  GridLayout,
  IconFilledSearch,
} from "newskit";
import React from "react";

import axios from "axios";
import DeezerClient from "../../services/deezer";

// @ts-ignore
const client = new DeezerClient(axios);

export const SearchModal = ({
  open,
  onDismiss,
}: Pick<ModalProps, "open" | "onDismiss">) => {
  const heading = (
    <TextBlock typographyPreset="utilitySubheading040" stylePreset="inkBase">
      Search
    </TextBlock>
  );

  const [isLoading, setIsLoading] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearchChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      setSearchValue(e.target.value);
    },
    [setSearchValue]
  );

  const performSearch = React.useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);

      const results = await client.search.artist(searchValue);

      setSearchResults(
        // @ts-ignore
        results.data.slice(0, 5).map(({ id, name }) => ({ id, name }))
      );
      setIsLoading(false);
    },
    [searchValue]
  );

  return (
    <Modal
      open={open}
      onDismiss={onDismiss}
      header={heading}
      overrides={{
        panel: {
          topOffset: "50px",
          width: "600px",
          minWidth: "300px",
          minHeight: "200px",
          maxHeight: "60vh",
          maxWidth: "90vw",
        },
      }}
    >
      <form onSubmit={performSearch}>
        <GridLayout
          columns="1fr auto"
          justifyItems="center"
          columnGap="space050"
        >
          <TextField value={searchValue} onChange={handleSearchChange} />
          <IconButton type="submit" size="medium" loading={isLoading}>
            <IconFilledSearch />
          </IconButton>
        </GridLayout>
      </form>
      <Menu vertical overrides={{ spaceInline: "space000" }}>
        {searchResults.map(({ id, name }) => (
          <MenuItem key={id} href={`/?id=${id}`}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </Modal>
  );
};
