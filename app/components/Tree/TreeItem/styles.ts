import type { Theme } from "@mui/material"

const sx = {
  treeItem2Root: (theme: Theme) => {
    return {
      color: '#ffffffd4'
    }
  },

  treeItem2Content: (theme: Theme) => {
    return {
      marginBottom: theme.spacing(0.3),
      color: '#ffffffd4',
      borderRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '&.expanded': {
        fontWeight: theme.typography.fontWeightRegular,
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&.focused, &.selected, &.selected.focused': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
        color: '#ffffffd4',
      }
    }
  },

  treeItem2IconContainer: (theme: Theme) => {
    return {
      marginRight: theme.spacing(1)
    }
  },

  childItem: (theme: Theme) => {
    return {
      marginLeft: 0,
      [`& .content`]: {
        paddingLeft: theme.spacing(2),
      },
    }
  }
}

export default sx;