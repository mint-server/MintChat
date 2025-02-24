import type { ReactElement, ReactNode } from "react";
import Grid from '@mui/material/Grid2';
import { Box, Stack } from "@mui/material";
import sx from "./styles";

interface IChatLayout {
  chatHeader?: ReactElement,
  inputField: ReactElement,
  children: ReactNode
}

const ChatLayout = ({ chatHeader, inputField, children }: IChatLayout) => {
  return (
    <Stack spacing={2} sx={sx.chatParentContainer}>
      <Box>
        {chatHeader}
      </Box>

      <Box sx={sx.chatContainer}>
        <Grid container sx={sx.chatGridContainer}>
          <Grid size={2} />
          <Grid size={8}>
            <Box sx={sx.childrenContainer}>
              {children}
            </Box>
          </Grid>
          <Grid size={2} />
        </Grid>
      </Box>

      <Box>
        <Grid container>
          <Grid size={2} />
          <Grid size={8}>
            {inputField}
          </Grid>
          <Grid size={2} />
        </Grid>
      </Box>

    </Stack>
  );
}

export default ChatLayout;