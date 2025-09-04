import React, { useState } from "react";
import { TextField, Button, Box, Paper, Link } from "@mui/material";
import { useNavigate } from "react-router-dom"; // <-- import this

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // <-- initialize

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
    // If login is successful, navigate to User Master
    // Replace this with your actual login logic
    // Example:
    // if (loginSuccess) {
    //   navigate('/administration/user-master');
    // }
    navigate('/');
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage:
          "url(https://www.tom.sg/wp-content/uploads/2021/12/banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: 3,
        alignItems: "center",
      }}
    >
      {/* login form */}
      <Box sx={{ width: "450px" }}>
        <Paper
          variant="elevation"
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 3,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* logo img */}
          <Box sx={{ textAlign: "center" }}>
            <img
              src="https://www.tom.sg/wp-content/uploads/2021/11/tom_logo-300x135.png"
              alt="logo"
              style={{ maxWidth: "200px" }}
            />
          </Box>
          {/* form */}
          <Box
            component={"form"}
            sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={handleSubmit}
          >
            <TextField
              name="email"
              label="Email"
              placeholder="Enter your email"
              fullWidth
              required
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
              fullWidth
              variant="outlined"
              required
              onChange={handleChange}
            />

            <Button
              variant="text"
              type="submit"
              fullWidth
              sx={{
                mt: 2,
                height: 45,
                color: "white",
                bgcolor: "#f44336",
                "&:hover": { bgcolor: "#d32f2f" },
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Login
            </Button>
          </Box>
          {/* Links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              fontSize: "0.9rem",
            }}
          >
            <Link href="#" underline="hover">
              Forgot password?
            </Link>
            <Link href="#" underline="hover">
              Need help?
            </Link>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;