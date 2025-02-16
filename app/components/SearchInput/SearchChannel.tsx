import Paper from '@mui/material/Paper';
import InputBase, { type InputBaseProps } from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import type { IconButtonProps } from '@mui/material';
import sx from './styles';

interface ISearchInput {
  textInputProps: InputBaseProps,
  iconButtonProps: IconButtonProps
}

const SearchInput = ({ textInputProps, iconButtonProps }: ISearchInput) => {
  return (
    <Paper component="form" sx={sx.paperContainer} elevation={0}>

      <InputBase
        size="small"
        sx={sx.searchInput}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        {...textInputProps}
      />

      <IconButton type="button" sx={sx.searchIcon} aria-label="search" {...iconButtonProps}>
        <SearchIcon />
      </IconButton>

    </Paper>
  );
}

export default SearchInput;