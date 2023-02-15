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
import employeeBaseURL from "@/utils/axiosInstance";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { Formik } from "formik";
import Link from "next/link";

const AddEmployee = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [employeeData, setEmployeeData] = useState<{}>({});
  const [genderOpt, setGenderOpt] = useState("");

  const handleFormSubmit = async (values: any) => {
    try {
      const newFormData = {
        ...values,
        id: 14,
        gender: genderOpt,
      };
      await employeeBaseURL
        .post("/create", newFormData)
        .then((res) => {
          toast.success(res.data.message);
          setTimeout(() => {
            router.back();
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("error", error);
    }
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
        <Link
          href="/employee/list"
          style={{
            alignSelf: "flex-end",
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
        </Link>
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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
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
                      data-testid="first_name"
                      name={"first_name"}
                      id="filled-basic"
                      variant="filled"
                      color="success"
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
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.first_name}
                      error={!!touched.first_name && !!errors.first_name}
                      helperText={touched.first_name && errors.first_name}
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
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.last_name}
                      error={!!touched.last_name && !!errors.last_name}
                      helperText={touched.last_name && errors.last_name}
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
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
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
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.number}
                      error={!!touched.number && !!errors.number}
                      helperText={touched.number && errors.number}
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
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.photo}
                      error={!!touched.photo && !!errors.photo}
                      helperText={touched.photo && errors.photo}
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
                      sx={{
                        width: {
                          sm: "100%",
                          md: "65%",
                        },
                      }}
                      color="success"
                      onBlur={handleBlur}
                      onChange={(e) => setGenderOpt(e.target.value)}
                      value={genderOpt}
                    >
                      <MenuItem value={"M"}>Male</MenuItem>
                      <MenuItem value={"F"}>Female</MenuItem>
                    </Select>
                  </Stack>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    sx={{
                      alignSelf: "flex-end",
                      borderRadius: "200px",
                      paddingX: 5,
                      fontWeight: "bold",
                      mt: 3,
                    }}
                  >
                    Save
                  </Button>
                </form>
              )}
            </Formik>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

const validationSchema = yup.object().shape({
  first_name: yup.string().required("required first name"),
  last_name: yup.string().required("required last name"),
  email: yup.string().required("required email"),
  number: yup.number().required("required phone no"),
  photo: yup.string().required("required photo URL"),
});

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  number: 0,
  photo: "",
};
export default AddEmployee;
