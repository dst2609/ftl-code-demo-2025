import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", p: 6 }}>
      <Typography variant="h6" align="center" gutterBottom>
        About Me
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        My perfect Footer is down here - hiii
      </Typography>
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Link href="https://github.com" target="_blank" rel="noopener">
          <GitHubIcon sx={{ mx: 1 }} />
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener">
          <LinkedInIcon sx={{ mx: 1 }} />
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener">
          <TwitterIcon sx={{ mx: 1 }} />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
