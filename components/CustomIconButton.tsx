import { Colors } from "@/theme";
import { styled } from "@mui/material/styles";

import { IconButton, IconButtonProps, SvgIconTypeMap } from "@mui/material";
import React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type IProps = {
  handleClick?: () => void;
  children: any;
};

const StyledIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(Colors.primary[500]),
  backgroundColor: Colors.primary[500],
  "&:hover": {
    backgroundColor: Colors.primary[500],
  },
  fontWeight: 600,
}));
const CustomIconButton = ({ handleClick, children }: IProps) => {
  return (
    <>
      <StyledIconButton onClick={handleClick}>{children}</StyledIconButton>
    </>
  );
};

export default CustomIconButton;
