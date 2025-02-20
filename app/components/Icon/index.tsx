import { Box, type BoxProps, type SxProps } from "@mui/material";

interface IIcon extends BoxProps {
  icon: React.ElementType,
  sx?: SxProps
}

const Icon = ({ icon, sx, ...other }: IIcon) => {
  const iconStyles = {
    ...(sx || {})
  };

  return <Box component={icon} sx={iconStyles} {...other} />;
}

export default Icon;