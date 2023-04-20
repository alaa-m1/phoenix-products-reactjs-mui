import { Button, ExtendButtonBase, ButtonTypeMap } from "@mui/material";
import { DefaultComponentProps } from '@mui/material/OverridableComponent';
import React from "react";

type PhoenixButtonProps = DefaultComponentProps<ButtonTypeMap<any, 'button'>> & & {
  label?: string;
};
const PhoenixButton = ({ label, ...props }: PhoenixButtonProps) => {
  return (
    <Button color="primary" {...props} variant="contained">
      {label}
    </Button>
  );
};

export { PhoenixButton };
