"use client ";
import { IconButton, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { Colors, theme } from "@/theme";
import Link from "next/link";
import { useState, useEffect } from "react";
import employeeBaseURL from "@/utils/axiosInstance";

type IProps = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  number: number;
  gender: string;
  photo: string;
  handleClick?: () => void;
  handleDelete: () => void;
};

const CardComponent = ({
  id,
  first_name,
  last_name,
  email,
  number,
  gender,
  photo,
  handleDelete,
}: IProps) => {
  return (
    <Stack
      width="100%"
      gap={2}
      sx={{
        boxShadow: "2px 2px 5px #00000050",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <img
        src={photo}
        alt={"profile Image"}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Stack p={1}>
        <Typography variant="h6" color="initial">
          {first_name} {last_name}
        </Typography>
        <Typography component="span" color="initial">
          {email}
        </Typography>
        <Typography component="span" color="initial">
          {number}
        </Typography>
        <Typography component="span" color="initial">
          {gender}
        </Typography>
        <Stack
          flexDirection="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
          gap={1}
        >
          <IconButton
            sx={{
              color: theme.palette.getContrastText(Colors.red[500]),
              backgroundColor: Colors.red[500],
              "&:hover": {
                backgroundColor: Colors.red[500],
              },
              fontWeight: 600,
            }}
            onClick={handleDelete}
          >
            <DeleteOutline />
          </IconButton>
          <Link href={`/employee/edit/id/${id}`}>
            <IconButton
              sx={{
                color: "#fff",
                backgroundColor: Colors.green[500],
                "&:hover": {
                  backgroundColor: Colors.green[500],
                },
                fontWeight: 600,
              }}
            >
              <Edit />
            </IconButton>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardComponent;
