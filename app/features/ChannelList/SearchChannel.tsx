import type { IconButtonProps, InputBaseProps } from "@mui/material";
import SearchInput from "~/components/SearchInput/SearchChannel";
import sx from "./styles";

const SearchChannel = () => {
  const textInputProps: InputBaseProps = {
    placeholder: "Search Channel",
    inputProps: { "aria-label": "search channel" }
  }

  const iconButtonProps: IconButtonProps = {
    "aria-label": "search channel button"
  }

  return (
    <SearchInput textInputProps={textInputProps} iconButtonProps={iconButtonProps} sx={sx.channelSearchInput} />
  );
}

export default SearchChannel;