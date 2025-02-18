import { Box } from "@mui/material";
import sx from "./styles";

interface IDotIcon {
  color?: string,
  size?: number
}

const DotIcon = ({ color, size }: IDotIcon) => {
  const dotIconStyles = {
    ...sx.dotIcon,
    bgcolor: color || sx.dotIcon.bgcolor,
    width: size || sx.dotIcon.width,
    height: size || sx.dotIcon.height
  };

  return <Box sx={dotIconStyles} />;
}

export default DotIcon;