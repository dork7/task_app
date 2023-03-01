import { Box, Container, Input, useToast } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

const TextComponent = ({ variant, btnText, onAdd }) => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    // e.preventDefault();
    const task = e.mInput;
    if (!task) {
      toast({
        position: "bottom",
        duration: 1000,
        isClosable: true,
        render: () => (
          <Container maxW="xl" centerContent>
            <Box padding="4" bg="red.600" maxW="3xl">
              Please enter task
            </Box>
          </Container>
        ),
      });
      return;
    }
    // setTask("");
    onAdd({ id: Math.floor(Math.random() * 10000), descp: task, done: false });
  };

  // console.log(watch("mInput"));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} p={3}>
        <Input
          placeholder="Add Task"
          variant={variant}
          bg="red.400"
          // value={task}
          // onChange={(e) => setTask(e.target.value)}
          mt={2}
          {...register("mInput", { required: true })}
        />

        {errors.mInput && <span>This field is required</span>}
        {/* <InputGroup>
        <Input
          placeholder="Add Task"
          variant={variant}
          bg="red.400"
          placeholder="Add Task"
        />
        <InputRightAddon
          children={<Checkbox colorScheme="red" defaultIsChecked></Checkbox>}
        />
      </InputGroup> */}
        {/* <Button bg="green.600" isFullWidth={true} type="submit" mt={2}>
          {btnText}
        </Button> */}
      </form>
    </>
  );
};

export default React.memo(TextComponent);
