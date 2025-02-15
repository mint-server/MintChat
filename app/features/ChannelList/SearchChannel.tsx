import type { IconButtonProps, InputBaseProps } from "@mui/material";
import SearchInput from "~/components/SearchInput/SearchChannel";

const SearchChannel = () => {
  const textInputProps: InputBaseProps = {
    placeholder: "Search Channel",
    inputProps: { "aria-label": "search channel" }
  }

  const iconButtonProps: IconButtonProps = {
    "aria-label": "search channel button"
  }

  return (
    <SearchInput textInputProps={textInputProps} iconButtonProps={iconButtonProps} />
  );
}

export default SearchChannel;