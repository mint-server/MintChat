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
            color: theme.palette.mode !== "dark" ? "#1a73e8" : "#b8e7fb",
            backgroundColor: theme.palette.mode !== "dark" ? "#e8f0fe" : "#00b4ff"
          }
        })
      }
    }
  }
});

export default theme;