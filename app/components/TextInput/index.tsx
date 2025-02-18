import Paper, { type PaperProps } from '@mui/material/Paper';
import InputBase, { type InputBaseProps } from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import type { IconButtonProps } from '@mui/material';
import sx from './styles';

interface ITextInput {
  textInputProps?: InputBaseProps,
  containerProps?: PaperProps,
  iconButtonProps?: IconButtonProps,
  icon?: React.ReactElement
}

const TextInput = ({
  textInputProps = {},
  containerProps = {},
  iconButtonProps = {},
  icon
}: ITextInput) => {

  const defaultContainerProps  = {
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

  const newContainerProps = {
    ...defaultContainerProps,
    ...containerProps,
    sx: {
      ...(defaultContainerProps.sx || {}),
      ...(containerProps.sx || {})
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
    <Paper {...newContainerProps}>
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