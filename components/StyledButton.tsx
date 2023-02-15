import { Colors } from "@/theme";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

type IProps = {
  title: string;
  variantType: any;
  handleClick?: () => void;
};
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(Colors.primary[500]),
  backgroundColor: Colors.primary[500],
  "&:hover": {
    backgroundColor: Colors.primary[500],
  },
  borderRadius: "200px",
  fontWeight: 600,
}));

const StyledButton = ({ title, variantType, handleClick }: IProps) => {
  return (
    <ColorButton onClick={handleClick} variant={variantType}>
      {title}
    </ColorButton>
  );
};

export default StyledButton;
