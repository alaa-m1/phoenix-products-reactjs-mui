import { Button, ExtendButtonBase, ButtonTypeMap } from "@mui/material";
import React from "react";

type PhoenixButtonProps=ExtendButtonBase<ButtonTypeMap<{}, "button">> &{
    children: React.ReactNode;
}
const PhoenixButton = (
  {children,...props}: PhoenixButtonProps
) => {
  return <Button color="primary" {...props} variant="contained">{children}</Button>;
};

export {PhoenixButton}