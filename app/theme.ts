import { createTheme } from '@mui/material/styles';
import type { } from "@mui/x-tree-view/themeAugmentation";

const theme = createTheme({
  palette: {
    mode: "light"
  },

  typography: {
    fontSize: 12
  },

  components: {
    MuiTreeItem2: {
      styleOverrides: {
        root: ({ theme }) => ({
          ".child-node .content.selected, .child-node .content.selected.focused": {
            color: theme.palette.mode !== "dark" ? "#ffffff" : "#b8e7fb",
            backgroundColor: theme.palette.mode !== "dark" ? "#7c8eb7" : "#00b4ff",
            fontWeight: 'bold'
          },
          ".child-node .content.has-unseen-msgs, .child-node .content.has-unseen-msgs.focused": {
            fontWeight: 'bold'
          },
          ".child-node .content.unseen-pings, .child-node .content.unseen-pings.focused": {
            fontWeight: 'bold'
          },
          ".child-node .content.unseen-pings .info-chip, .child-node .content.unseen-pings.focused .info-chip": {
            padding: '0px 4px',
            backgroundColor: '#e15050',
            borderRadius: '1rem',
            color: '#ffffff',
            fontWeight: 'bold'
          }
        })
      }
    }
  }
});

export default theme;