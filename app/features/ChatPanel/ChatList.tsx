import { Stack } from "@mui/material";
import sx from "./styles";
import ChatItem from "./ChatItem";

const ChatList = () => {

  return (
    <Stack spacing={2} sx={sx.chatListContainer}>
      <ChatItem name="Sri s" />
      <ChatItem name="Thga a" />
      <ChatItem name="Dev sas" />
      <ChatItem name="HJ hj" />
      <ChatItem name="Kedno li" />
      <ChatItem name="Aaa nairy" />
      <ChatItem name="S3ri s" />
      <ChatItem name="Thaga a" />
      <ChatItem name="Dfev sas" />
      <ChatItem name="HaJ hj" />
      <ChatItem name="Kedhno li" />
      <ChatItem name="Aaaa nairy" />
    </Stack>
  );
}

export default ChatList;