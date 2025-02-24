import ChatLayout from "~/layouts/ChatLayout";
import ChatList from "./ChatList";
import ChatInput from "./ChatInput";
import ChatPanelHeader from "~/features/ChatPanel/ChatPanelHeader";

const ChatPanel = () => {

  return (
    <ChatLayout chatHeader={<ChatPanelHeader />} inputField={<ChatInput />}>
      <ChatList />
    </ChatLayout>
  );
}

export default ChatPanel;