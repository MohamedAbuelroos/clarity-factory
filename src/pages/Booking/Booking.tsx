import { Box, Grid } from "@mui/material";
import BookingSteps from "./sections/BookingSteps";
import BookingForm from "./sections/BookingForm";
import WhyOrderWithUs from "./sections/WhyOrderWithUs";
import SEO from "../../components/common/SEO";

const Booking = () => {
  return (
    <Box>
      <SEO
        title="Booking Custom Canvas Bags"
        description="Book your custom canvas bags and suit covers with Clarity Factory. Fast delivery and quality craftsmanship."
        keywords="canvas bags factory, suit cover manufacturer, bulk bags production, custom bags"
      />
      <BookingSteps />
      <Grid
        container
        spacing={6}
        maxWidth={"lg"}
        sx={{ mx: "auto", py: 10, alignItems: "center" }}
      >
        <Grid size={{ xs: 12, md: 8 }}>
          <BookingForm />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <WhyOrderWithUs />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Booking;
