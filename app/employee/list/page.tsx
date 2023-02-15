"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Grid,
  IconButton,
  Pagination,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Stack } from "@mui/material";
import { Apps, DeleteOutline, Edit, ViewList } from "@mui/icons-material";
import StyledButton from "@/components/StyledButton";
import CustomIconButton from "@/components/CustomIconButton";
import CardComponent from "@/components/CardComponent";
import employeeBaseURL from "@/utils/axiosInstance";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { Colors, theme } from "@/theme";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const EmployeeList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState<number>(1);
  const [changeView, setChangeView] = useState(true);

  const getEmployeeList = async () => {
    // setLoading(true);
    await employeeBaseURL
      .get(`/list?page=${Number(page)}`)
      .then((res) => {
        setList(res.data.employee);
        setPages(Number(res.data.pages));
      })
      .catch((err) => {
        console.log(err);
      });
    // setLoading(false);
  };

  useEffect(() => {
    getEmployeeList();
  }, [page, loading]);

  const handleDelete = async (e: any) => {
    setLoading(false);
    await employeeBaseURL.delete(`/delete/${e}`).then((res) => {
      toast.success(res.data);
      // @ts-ignore
      // setList(list.filter((item) => item.id !== e));
      // setTimeout(() => {
      setLoading(true);
      // }, 1000);
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: 5,
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Toaster />
      {/* add employee button  */}
      <Stack
        width="100%"
        flexDirection={"row"}
        justifyContent="flex-end"
        gap={1}
      >
        <Link href="/employee/add">
          <StyledButton title="Add Employee" variantType="contained" />
        </Link>
        <CustomIconButton handleClick={() => setChangeView((prev) => !prev)}>
          {!changeView ? <ViewList /> : <Apps />}
        </CustomIconButton>
      </Stack>
      {/* grid view to list view change button  */}

      {changeView ? (
        <AnimatePresence>
          <motion.div
            style={{
              width: "100%",
            }}
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Image </TableCell>
                    <TableCell align="center">First Name</TableCell>
                    <TableCell align="center">Last Name</TableCell>
                    <TableCell align="center">Email </TableCell>
                    <TableCell align="center">Phone </TableCell>
                    <TableCell align="center">Gender </TableCell>
                    <TableCell align="center">Actions </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list.map((data, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>
                        {/* @ts-ignore */}
                        <img
                          // @ts-ignore
                          src={data?.photo}
                          alt=""
                          style={{
                            width: "100px",
                            objectFit: "cover",
                          }}
                        />
                      </TableCell>
                      {/* @ts-ignore */}
                      <TableCell align="center">{data?.first_name}</TableCell>
                      {/* @ts-ignore */}
                      <TableCell align="center">{data?.last_name}</TableCell>
                      {/* @ts-ignore */}
                      <TableCell align="center">{data?.email}</TableCell>
                      {/* @ts-ignore */}
                      <TableCell align="center">{data?.number}</TableCell>

                      {/* @ts-ignore */}
                      <TableCell align="center">
                        {/* @ts-ignore */}
                        {data?.gender === "M" ? "Male" : "Female"}
                      </TableCell>

                      {/* @ts-ignore */}
                      <TableCell align="center">
                        {/* @ts-ignore */}
                        <Link href={`/employee/edit/id/${data?.id}`}>
                          <Button
                            sx={{
                              color: "#000",
                              backgroundColor: "#CCC",
                              "&:hover": {
                                backgroundColor: "#DDD",
                              },
                              fontWeight: 600,
                              marginRight: 1,
                            }}
                          >
                            Edit
                          </Button>
                        </Link>
                        <IconButton
                          // @ts-ignore
                          onClick={() => handleDelete(data?.id)}
                          sx={{
                            color: theme.palette.getContrastText(
                              Colors.red[500]
                            ),
                            backgroundColor: Colors.red[500],
                            "&:hover": {
                              backgroundColor: Colors.red[500],
                            },
                            fontWeight: 600,
                          }}
                        >
                          <DeleteOutline />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            style={{
              width: "100%",
            }}
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileInView={"true"}
          >
            <Grid container spacing={2} width="100%">
              {loading ? (
                list.map((data, index) => (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    sm={4}
                    md={2.4}
                    lg={1}
                    sx={{
                      minWidth: {
                        xs: "100%",
                        sm: "40%",
                        md: "30%",
                        lg: "20%",
                      },
                    }}
                  >
                    {/* CardComponent  */}
                    <CardComponent
                      // @ts-ignore
                      id={data?.id}
                      // @ts-ignore
                      first_name={data?.first_name}
                      // @ts-ignore
                      last_name={data?.last_name}
                      // @ts-ignore
                      email={data?.email}
                      // @ts-ignore
                      number={data?.number}
                      // @ts-ignore
                      gender={data?.gender}
                      // @ts-ignore
                      photo={data?.photo}
                      // @ts-ignore
                      handleDelete={() => handleDelete(data?.id)}
                    />
                  </Grid>
                ))
              ) : (
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              )}
            </Grid>
          </motion.div>
        </AnimatePresence>
      )}

      <Pagination
        count={pages}
        color="primary"
        onChange={(event, page) => setPage(page)}
      />
      {/* card grid */}
    </Box>
  );
};

export default EmployeeList;
