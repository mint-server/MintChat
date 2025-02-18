import type { IconButtonProps, InputBaseProps, PaperProps } from "@mui/material";
import TextInput from "~/components/TextInput";
import SearchIcon from '@mui/icons-material/Search';
import sx from "./styles";

const SearchChannel = () => {
  const containerProps: PaperProps = {
    sx: sx.channelSearchInput
  }

  const textInputProps: InputBaseProps = {
    placeholder: "Search Channel",
    inputProps: { "aria-label": "search channel" }
  }

  const iconButtonProps: IconButtonProps = {
    "aria-label": "search channel button"
  }

  return (
    <TextInput
      containerProps={containerProps}
      textInputProps={textInputProps}
      iconButtonProps={iconButtonProps}
      icon={<SearchIcon />}
    />
  );
}

export default SearchChannel;