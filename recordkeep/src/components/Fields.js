import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/system";

const Fields = ({ name, email, index }) => {
  return (
    <div className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Stack>
        <Button variant="contained" color="error">
          <DeleteIcon />
        </Button>
      </Stack>
    </div>
  );
};

export default Fields;
