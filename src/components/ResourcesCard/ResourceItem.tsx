import React, { useCallback } from "react";
import { Box, Card, Button, CardMedia, CardContent } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

type ResourceItemProps = {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
};

const ResourceItem = ({
  title,
  description,
  image,
  link,
}: ResourceItemProps) => {
  const handleClick = useCallback(() => {
    window.open(link, "_blank");
  }, [link]);
  return (
    <Card>
      {image && (
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
      )}
      <CardContent>
        {title && <h3>{title}</h3>}
        {description && description}
        {link && (
          <Box pt={2}>
            <Button
              onClick={handleClick}
              variant="contained"
              color="secondary"
              fullWidth
            >
              <LinkIcon />
              Visit
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export { ResourceItem };
