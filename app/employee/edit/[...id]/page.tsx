"use client";
import {
  Box,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import employeeBaseURL from "@/utils/axiosInstance";

type Props = {
  params: {
    id: string;
  };
};
const page = ({ params: { id } }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [employeeData, setEmployeeData] = useState<{}>({});
  const [genderOpt, setGenderOpt] = useState<string>("");

  // get one employee from database
  const getOneEmployee = async () => {
    setLoading(true);
    await employeeBaseURL
      .get(`singleEmployee/${id[1]}`)
      .then((res) => {
        setEmployeeData(res.data);
        setGenderOpt(res.data.gender === "F" ? "F" : "M");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getOneEmployee();
    return () => {
      getOneEmployee();
    };
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleUpdate = async () => {
    const formData = {
      ...employeeData,
      gender: genderOpt,
    };
    // @ts-ignore
    const id = employeeData._id;

    // @ts-ignore
    await employeeBaseURL
      .put(`/${id}`, formData)
      .then((res) => {
        toast.success(res.data.message);
      })
      .then((res) => {
        setTimeout(() => {
          router.back();
        }, 1000);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Toaster />
      <Stack
        sx={{
          background: "#fff",
          padding: 4,
          width: {
            sm: "100%",
            md: "30%",
          },
          borderRadius: "25px",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            alignSelf: "flex-end",
            borderRadius: "200px",
            paddingX: 5,
          }}
        >
          List View
        </Button>
        <Stack
          sx={{
            background: "#fff",
            padding: 4,
            width: {
              sm: "100%",
              md: "100%",
            },
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
            borderRadius: "35px",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
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
              <Typography color="initial">First Name </Typography>
              <TextField
                name={"first_name"}
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
                // @ts-ignore
                value={employeeData?.first_name}
                onChange={handleChange}
              />
            </Stack>
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
              <Typography color="initial">Last Name </Typography>
              <TextField
                name={"last_name"}
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
                // @ts-ignore
                value={employeeData?.last_name}
                onChange={handleChange}
              />
            </Stack>
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
              <Typography color="initial">Email</Typography>
              <TextField
                name={"email"}
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
                // @ts-ignore
                value={employeeData?.email}
                onChange={handleChange}
              />
            </Stack>
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
              <Typography color="initial">Phone</Typography>
              <TextField
                name={"number"}
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
                // @ts-ignore
                value={employeeData?.number}
                onChange={handleChange}
              />
            </Stack>
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
              <Typography color="initial">Photo</Typography>
              <TextField
                name={"photo"}
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
                // @ts-ignore
                value={employeeData?.photo}
                onChange={handleChange}
              />
            </Stack>
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
              <Typography color="initial">Gender</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => setGenderOpt(e.target.value)}
                value={genderOpt}
                sx={{
                  width: {
                    sm: "100%",
                    md: "65%",
                  },
                }}
              >
                <MenuItem value={"M"}>Male</MenuItem>
                <MenuItem value={"F"}>Female</MenuItem>
              </Select>
            </Stack>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                alignSelf: "flex-end",
                borderRadius: "200px",
                paddingX: 5,
                fontWeight: "bold",
                mt: 3,
              }}
              onClick={handleUpdate}
            >
              Update
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default page;
