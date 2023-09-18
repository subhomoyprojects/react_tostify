import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const apiUrl = "https://restapinodejs.onrender.com/api/register";
    const { name, email, mobile, password } = data;
    const payload = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
    };
    axios.post(apiUrl, payload);
  };
  return (
    <>
      <main>
        <Container maxWidth="sm">
          <h1>Register</h1>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField label="Name" fullWidth margin="normal" variant="outlined" {...register("name", { required: true, maxLength: 20, minLength: 3 })} error={!!errors.name} helperText={errors.name && "Name is required"} />

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

                  <TextField label="Mobile" fullWidth margin="normal" variant="outlined" {...register("mobile", { required: true, minLength: 10 })} error={!!errors.mobile} helperText={errors.mobile && "Mobile number is required"} />

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
    </>
  );
}
