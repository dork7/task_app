import {
  Checkbox,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Task = ({ task, onDelete, setDone }) => {
  // const [task, setTask] = useState(initialState);
  return (
    <div>
      <InputGroup>
        <InputLeftAddon
          children={
            <IconButton
              variant="ghost"
              onClick={() => onDelete(task.id)}
              icon={<AiOutlineDelete />}
            />
          }
        />{" "}
        <Input
          //   variant={}
          bg={!task.done ? "red.400" : "blue.400"}
          value={task.descp}
          readOnly={true}
        />
        <InputRightAddon
          children={
            <Checkbox
              colorScheme="red"
              isChecked={task.done}
              onChange={() => setDone(task.id)}
            ></Checkbox>
          }
        />
      </InputGroup>
    </div>
  );
};

export default Task;
