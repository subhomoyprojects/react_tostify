import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function Login() {
  const [apiResponse, setApiResponse] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const apiUrl = "https://restapinodejs.onrender.com/api/login";
    const { name, email, mobile, password } = data;
    const payload = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
    };
    axios
      .post(apiUrl, payload)
      .then((response) => {
        setApiResponse(response.data);
        toast.dismiss();
        toast.success(apiResponse.message);
      })
      .catch((error) => {
        console.log(error);
        toast.dismiss();
        toast.error("An error occurred while making the request.");
      });
  };
  return (
    <main>
      <Container maxWidth="sm">
        <h1>Login</h1>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  })}
                  error={!!errors.email}
                  helperText={(errors.email && errors.email.type === "required" && "Email is required") || (errors.email && errors.email.type === "pattern" && "valid email is required")}
                />

                <TextField label="Password" fullWidth margin="normal" variant="outlined" {...register("password", { required: true, minLength: 4 })} error={!!errors.password} helperText={errors.password && "Password is required"} />

                <Button variant="contained" color="primary" fullWidth size="large" type="submit" sx={{ marginTop: 2 }}>
                  Send Message
                </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
