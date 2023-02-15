import { Stack, TextField, Typography } from "@mui/material";
import React from "react";

type IProps = {
  labelName: string;
  handleChange: () => void;
  name: string;
  employeeValue: string;
};
export const FormTextField = ({
  labelName,
  handleChange,
  name,
  employeeValue,
}: IProps) => {
  return (
    <Stack
      flexDirection={{
        sm: "column",
        md: "row",
      }}
      gap={3}
      my={1}
      width="100%"
      //   alignItems="center"
      justifyContent="space-between"
    >
      <Typography color="initial">{labelName}</Typography>
      <TextField
        name={name}
        id="filled-basic"
        variant="filled"
        sx={{
          width: {
            sm: "100%",
            md: "65%",
          },
        }}
        InputLabelProps={{
          shrink: true,
        }}
        value={employeeValue}
        onChange={handleChange}
      />
    </Stack>
  );
};
