import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const CardWithLink = ({ title, date, description, link }) => {
  return (
    <Card sx={{ maxHeight: 210, maxWidth: date ? "44vw" : "none" }}>
      <CardContent>
        {date && (
          <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
            {date}
          </Typography>
        )}

        <Typography gutterBottom sx={{ fontSize: 18, fontWeight: "bold" }}>
          {title}
        </Typography>

        <Typography variant="body2">{description}</Typography>
      </CardContent>

      <CardActions>
        {link && (
          <Button
            size="small"
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#1c9679" }}
          >
            {date ? "Read Full post" : "External Link"}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CardWithLink;
