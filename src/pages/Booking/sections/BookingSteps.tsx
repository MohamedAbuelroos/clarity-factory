import { Box, Container, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SendIcon from "@mui/icons-material/Send";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const steps = [
  { label: "Add Data", icon: <PersonOutlineIcon /> },
  { label: "Send Details", icon: <SendIcon /> },
  { label: "Wait for Sales", icon: <AccessTimeIcon /> },
  { label: "Pay Deposit", icon: <PaymentsIcon /> },
  { label: "Order Arrival", icon: <LocalShippingIcon /> },
];

const BookingProcessBar = () => {
  return (
    <Box sx={{ py: 10, background: "#f9fafb" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            background: "#fff",
            borderRadius: 4,
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            py: 6,
            px: 4,
          }}
        >
          {/* Horizontal Line */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "8%",
              right: "8%",
              height: "2px",
              background: "#e0e0e0",
              transform: "translateY(-50%)",
              zIndex: 0,
              
            }}
          />

          {/* Steps */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
              gap: { xs: 4, md: 0 },
            }}
          >
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  flex: 1,
                }}
              >
                {/* Icon Circle */}
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: index === 0 ? "#1976d2" : "#f5f5f5",
                    color: index === 0 ? "#fff" : "#555",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    boxShadow:
                      index === 0 ? "0 10px 20px rgba(25,118,210,0.3)" : "none",
                    border: index !== 0 ? "1px solid #ddd" : "none",
                  }}
                >
                  {step.icon}
                </Box>

                {/* Label */}
                <Typography mt={2} fontWeight={500} color="text.secondary">
                  {step.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BookingProcessBar;
