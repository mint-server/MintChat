import React from "react";
import { Box, Typography } from "@mui/material";
import sx from "./styles";

interface ITreeItemLabel {
  icon: React.ReactElement,
  info?: React.ReactElement,
  getLabelProps: any
}

const TreeItemLabel = ({ icon, info, getLabelProps }: ITreeItemLabel) => {
  const labelProps = getLabelProps({
    variant: 'body2',
    sx: sx.label
  });

  const treeIcon = React.cloneElement(icon as React.ReactElement<any>, {
    sx: {
      ...sx.labelIcon
    }
  });

  return (
    <Box sx={sx.labelContainer}>
      {treeIcon}
      <Typography {...labelProps} />

      {info &&
        <Typography variant="caption" className="info-chip">
          {info}
        </Typography>
      }
    </Box>
  );
}

export default TreeItemLabel;