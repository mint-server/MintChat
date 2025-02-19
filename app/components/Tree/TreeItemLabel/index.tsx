import { Box, Typography } from "@mui/material";
import sx from "./styles";

interface ITreeItemLabel {
  icon: React.ElementType,
  info?: React.ReactElement,
  getLabelProps: any
}

const TreeItemLabel = ({ icon, info, getLabelProps }: ITreeItemLabel) => {
  const labelProps = getLabelProps({
    variant: 'body2',
    sx: sx.label
  });

  return (
    <Box sx={sx.labelContainer}>
      <Box component={icon} color="inherit" sx={sx.labelIcon} />
      <Typography {...labelProps} />

      {info &&
        <Typography variant="caption" color="inherit" className="info-chip">
          {info}
        </Typography>
      }
    </Box>
  );
}

export default TreeItemLabel;