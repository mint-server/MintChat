import { Box, Typography } from "@mui/material";
import DotIcon from "~/components/DotIcon";
import sx from "./styles";

interface ITreeItemLabel {
  icon: React.ElementType,
  info: string,
  getLabelProps: any
}

const TreeItemLabel = ({ icon, info, getLabelProps }: ITreeItemLabel) => {
  const labelProps = getLabelProps({
    variant: 'body2',
    sx: sx.label
  });

  return (
    <Box sx={sx.labelContainer}>
      <DotIcon />
      <Box component={icon} color="inherit" sx={sx.labelIcon} />
      <Typography {...labelProps} />
      <Typography variant="caption" color="inherit">
        {info}
      </Typography>
    </Box>
  );
}

export default TreeItemLabel;