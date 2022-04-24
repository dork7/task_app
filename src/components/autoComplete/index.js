import { Flex, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteCreatable,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag,
} from "@choc-ui/chakra-autocomplete";
import React, { useState } from "react";

const AutoCompleteField = () => {
  const initialData = ["example value 1", "val 2"];
  const [dataSet, setDataSet] = useState(initialData);

  const handleSelectOption = ({ optionLabel, optionValue, item }) => {
    if (item.creatable) {
      const newData = [...dataSet];
      newData.push(item.value);
      console.log("dataSet", dataSet);
      setDataSet(newData);
    }
  };
  return (
    <Flex
      flexDir={"column"}
      alignItems="center"
      justifyContent="center"
      // backgroundColor="gray.700"
      // grow={true}
      // height="100%"
      p={4}
    >
      <Stack>
        <FormControl w="60">
          <FormLabel>
            {" "}
            Input with selectable values/ with creatable option
          </FormLabel>
          <AutoComplete
            openOnFocus
            multiple
            rollNavigation
            creatable
            onSelectOption={(selected) => handleSelectOption(selected)}
          >
            <AutoCompleteInput placeholder="Search..." variant="filled">
              {({ tags }) =>
                tags.map((tag, tid) => (
                  <AutoCompleteTag
                    key={tid}
                    label={tag.label}
                    onRemove={tag.onRemove}
                  />
                ))
              }
            </AutoCompleteInput>
            <AutoCompleteList>
              {dataSet.map((country, cid) => (
                <AutoCompleteItem
                  key={`option-${cid}`}
                  value={country}
                  textTransform="capitalize"
                >
                  {country}
                </AutoCompleteItem>
              ))}
              <AutoCompleteCreatable>
                {({ value }) => <span>Add {value} to List</span>}
              </AutoCompleteCreatable>
            </AutoCompleteList>
          </AutoComplete>
        </FormControl>
      </Stack>
      {/* <HStack>
        <Stack>
          <Text>Data Set</Text>
          {dataSet.map((data) => (
            <Text>{data}</Text>
          ))}
        </Stack>
      </HStack> */}
    </Flex>
  );
};

export default AutoCompleteField;
