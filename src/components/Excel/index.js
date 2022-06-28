import React, { useEffect, useState } from 'react';
import BasicLayout from '../BasicLayout';
import { read, writeFileXLSX } from 'xlsx';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import * as XLSX from 'xlsx';
import { nanoid } from 'nanoid';
import ExcelFileUpload from './ExcelFileUpload';
const data = [
  { id: 0, name: 'test', age: null, service: '123123123123' },
  { id: 1, name: 'test', age: null },
];
const Excel = () => {
  useEffect(() => {
    // downloadFile();
  }, []);

  const downloadFile = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'Sheet.xlsx');
  };

  const [excelToJSON, setExcelToJSON] = useState();

  return (
    <BasicLayout>
      <Stack spacing={4}>
        <Text>Convert JSON Data into excel</Text>
        <Box>{JSON.stringify(data)}</Box>
        <Button onClick={downloadFile}>Download File</Button>
      </Stack>
      <Stack spacing={4} py={4}>
        <Text>Upload excel file and convert into JSON</Text>
        <ExcelFileUpload {...{ setExcelToJSON }} />
        <Text>{JSON.stringify(excelToJSON)}</Text>
      </Stack>
    </BasicLayout>
  );
};

export default Excel;
