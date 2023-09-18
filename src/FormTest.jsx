import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Container, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormTest() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //
  const onSubmit = (data) => {
    const apiUrl = `https://restapinodejs.onrender.com/api/register`;
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
    <div>
      <h1 style={{ textAlign: "center" }}>FormTest</h1>
      <Container maxWidth="sm">
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField fullWidth margin="normal" id="outlined-basic" label="Name" variant="outlined" {...register("name", { required: true, minLength: 4 })} error={!!errors.name} helperText={errors.name && "Name is Required"} />

            <TextField
              fullWidth
              margin="normal"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
              error={!!errors.email}
              helperText={(errors.email && errors.email.type === "required" && "Email is Required") || (errors.email && errors.email.type === "pattern" && "Valid Email is Required")}
            />
            <TextField fullWidth margin="normal" id="outlined-basic" label="Mobile" variant="outlined" {...register("mobile", { required: true, minLength: 10 })} error={!!errors.mobile} helperText={errors.mobile && "Mobile Number is Required"} />
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                {...register("password", { required: true, minLength: 4 })}
                error={!!errors.password}
              />
              <FormHelperText error>{errors.password && "Password is Required"}</FormHelperText>
            </FormControl>
            <Button variant="contained" color="success" fullWidth size="large" type="submit" sx={{ marginTop: 2 }}>
              Send Message
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}
