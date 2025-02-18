import Paper, { type PaperProps } from '@mui/material/Paper';
import InputBase, { type InputBaseProps } from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import type { IconButtonProps } from '@mui/material';
import sx from './styles';

interface ITextInput {
  textInputProps?: InputBaseProps,
  paperProps?: PaperProps,
  iconButtonProps?: IconButtonProps,
  icon?: React.ReactElement
}

const TextInput = ({
  textInputProps = {},
  paperProps = {},
  iconButtonProps = {},
  icon
}: ITextInput) => {

  const defaultPaperProps = {
    component: "form",
    elevation: 0,
    sx: sx.paperContainer
  };

  const defaultInputProps = {
    size: "small",
    sx: sx.textInput
  }

  const defaultIconProps = {
    type: "button",
    sx: sx.textIcon
  }

  const newPaperProps = {
    ...defaultPaperProps,
    ...paperProps,
    sx: {
      ...(defaultPaperProps.sx || {}),
      ...(paperProps.sx || {})
    }
  }

  const newInputProps = {
    ...defaultInputProps,
    ...textInputProps,
    sx: {
      ...(defaultInputProps.sx || {}),
      ...(textInputProps.sx || {})
    }
  }

  const newIconProps = {
    ...defaultIconProps,
    ...iconButtonProps,
    sx: {
      ...(defaultIconProps.sx || {}),
      ...(iconButtonProps.sx || {})
    }
  }

  return (
    <Paper {...newPaperProps}>
      <InputBase {...newInputProps} />

      {icon &&
        <IconButton {...newIconProps}>
          {icon}
        </IconButton>
      }
    </Paper>
  );
}

export default TextInput;