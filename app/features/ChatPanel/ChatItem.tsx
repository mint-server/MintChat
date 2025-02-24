import { Paper, Stack, Typography } from "@mui/material";
import Avatar from "~/components/Avatar";
import sx from "./styles";

interface IChatItem {
  name: string;
}

const ChatItem = ({ name }: IChatItem) => {
  return (
    <Stack direction="row" spacing={2} sx={sx.chatItemContainer}>
      <Avatar name={name} />
      <Paper elevation={0}>
        <Stack direction="row" spacing={2} sx={{ pl: 1, pr:1}}>
          <Typography color='textSecondary' variant="body2" sx={{ fontWeight: "bold"}}>{name}</Typography>
          <Typography color='textSecondary' variant="caption">8:30 PM</Typography>
        </Stack>
        <Typography variant="body1" sx={{
          backgroundColor: '#e4e6eb75',
          borderRadius: '16px',
          borderTopLeftRadius: '0px',
          padding: '0.6rem 1rem'
        }} className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>

      </Paper>
    </Stack>
  );
}

export default ChatItem;