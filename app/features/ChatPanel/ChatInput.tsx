import type { IconButtonProps, InputBaseProps, PaperProps } from "@mui/material";
import TextInput from "~/components/TextInput";
import SendIcon from '@mui/icons-material/Send';

const ChatInput = () => {
  const containerProps: PaperProps = {
    variant: "outlined"
  }

  const textInputProps: InputBaseProps = {
    placeholder: "Message here...",
    inputProps: { "aria-label": "Type chat message here" }
  }

  const iconButtonProps: IconButtonProps = {
    "aria-label": "send chat message"
  }

  return (
    <TextInput
      containerProps={containerProps}
      textInputProps={textInputProps}
      iconButtonProps={iconButtonProps}
      icon={<SendIcon />}
    />
  );
}

export default ChatInput;