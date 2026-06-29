import {
  Box,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Alert,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { Email, WhatsApp } from "@mui/icons-material";

const factoryPhone = "+201022225621";

const BookingForm = () => {
  const [productType, setProductType] = useState("");
  const [clientType, setClientType] = useState("");
  interface BookingFormState {
    name?: string;
    company?: string;
    design?: string;
    quantity?: string | number;
    email?: string;
    [key: string]: string | number | undefined;
  }

  const [form, setForm] = useState<BookingFormState>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValid = () => {
    if (!productType || !clientType) return false;

    if (clientType === "first") {
      return form.name && form.company && form.design && form.quantity;
    }

    if (clientType === "previous") {
      return form.company && form.email && form.quantity;
    }

    return false;
  };

  const handleSubmit = () => {
    if (!isValid()) return;

    let message = `New Booking Request\n\nProduct: ${productType}\nClient Type: ${clientType}\n`;

    Object.keys(form).forEach((key) => {
      message += `${key}: ${form[key]}\n`;
    });

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${factoryPhone}?text=${encodedMessage}`,
      "_blank",
    );

    setSubmitted(true);
  };

  return (
    <Container maxWidth="md" sx={{ my: 10, mx: "auto" }}>
      <Box
        sx={{
          p: 5,
          borderRadius: 2,
          boxShadow: "0 25px 50px rgba(0,0,0,0.08)",
        }}
      >
        <Typography variant="h2" mb={2}>
          Booking & Custom Order
        </Typography>
        <Typography variant="body2" mb={4} color="text.secondary">
          Design your premium branded packaging. Our sales team will review your
          specs and provide a custom quote within 24 hours.
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Product Type"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <MenuItem value="Canvas Bags">Canvas Bags</MenuItem>
              <MenuItem value="Suit Cover">Suit Cover</MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="New or Previous Client?"
              value={clientType}
              onChange={(e) => setClientType(e.target.value)}
            >
              <MenuItem value="first">First Time</MenuItem>
              <MenuItem value="previous">Previous Client</MenuItem>
            </TextField>
          </Grid>

          {/* FIRST TIME CLIENT */}
          {clientType === "first" && (
            <>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Company Name"
                  name="company"
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  select
                  fullWidth
                  label="Do You Have a Design?"
                  name="design"
                  onChange={handleChange}
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </TextField>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Quantity"
                  name="quantity"
                  type="number"
                  onChange={handleChange}
                />
              </Grid>
            </>
          )}

          {/* PREVIOUS CLIENT */}
          {clientType === "previous" && (
            <>
              <Grid size={4}>
                <TextField
                  fullWidth
                  label="Company Name"
                  name="company"
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={4}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={4}>
                <TextField
                  fullWidth
                  label="Quantity"
                  name="quantity"
                  type="number"
                  onChange={handleChange}
                />
              </Grid>
            </>
          )}

          <Grid size={12}>
            <IconButton
              size="small"
              onClick={handleSubmit}
              disabled={!isValid()}
              sx={{
                py: 1.5,
                borderRadius: 3,
                display: "flex",
                gap: 1,
                mt: 2,
                width: "100%",
                backgroundColor: "#25D366",
                color: "#fff",
                transition: "0.3s ease",
                "&:hover": { backgroundColor: "#1ded69" },
              }}
            >
              <WhatsApp sx={{ fontSize: 20 }} />
              Send Request via WhatsApp
            </IconButton>
            {isValid() && (
              <IconButton
                size="small"
                // onClick={handleSubmit}
                disabled={!isValid()}
                sx={{
                  py: 1.5,
                  borderRadius: 3,
                  display: "flex",
                  gap: 1,
                  mt: 2,
                  width: "100%",
                  backgroundColor: "#EA4335",
                  color: "#fff",
                  transition: "0.3s ease",
                  "&:hover": { backgroundColor: "#f46459" },
                }}
              >
                <Email sx={{ fontSize: 20 }} />
                Send Request via Email
              </IconButton>
            )}
          </Grid>

          {submitted && (
            <Grid size={12}>
              <Alert severity="success">
                Thank you! Our sales team will contact you shortly.
              </Alert>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default BookingForm;
