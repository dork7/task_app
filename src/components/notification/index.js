import { createStandaloneToast } from "@chakra-ui/react";

const toast = createStandaloneToast();

export const createToast = ({
  title,
  msg = "",
  type = "success",
  duration = 5000,
  isClosable = true,
  variant = "solid",
}) => {
  const position = variant === "left-accent" ? "top-right" : "bottom";
  toast({
    title,
    description: msg,
    status: type,
    duration,
    isClosable,
    variant,
    position,
  });
};

// createToast({
//     title: "Something went wrong",
//     msg: err.response.data.message ?? "",
//     status: "error",
//   });
