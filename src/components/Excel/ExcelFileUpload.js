import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Upload, Progress, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx';
import { chakra } from '@chakra-ui/react';
// const ChakraUpload = chakra(Upload);
const { Dragger } = Upload;
const ChakraDragger = chakra(Dragger);
const ExcelFileUpload = ({ URL, setExcelToJSON, ...props }) => {
  const [progress, setProgress] = useState(0);

  const onChange = (info) => {
    fileUploaded(info.file);
  };
  const onDrop = (e) => {
    console.log('Dropped files', e.dataTransfer.files);
  };

  const fileUploaded = (file) => {
    const isExcelFile =
      file.type === '.xlsx' ||
      file.type === '.xls' ||
      file.type ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    // if (!isExcelFile) {
    //   message.error('You can only upload excel file!');
    // }
    // upload file
  };

  const uploadFile = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;
    console.log('options', options);
    // const data = await file.arrayBuffer();
    // const workbook = XLSX.read(data);
    // const workSheet = workbook.Sheets['Sheet1'];
    // const jsonData = XLSX.utils.sheet_to_json(workSheet);
    // const body = {
    //   data: jsonData,
    //   businessId: business,
    // };
    const fmData = new FormData();
    // const config = {
    //   headers: { 'content-type': 'multipart/form-data' },
    //   onUploadProgress: (event) => {
    //     const percent = Math.floor((event.loaded / event.total) * 100);
    //     setProgress(percent);
    //     if (percent === 100) {
    //       setTimeout(() => setProgress(0), 1000);
    //     }
    //     onProgress({ percent: (event.loaded / event.total) * 100 });
    //   },
    // };
    // fmData.append('data', jsonData);
    // fmData.append('businessId', business);
    try {
      // const res = await axios.post(URL, body);
      // if (res.data) {
      //   onSuccess(res.data);
      //   console.log('res data------>', res.data);
      //   const length = res.data.result.length;

      //   createToast({ title: `${length} entreies added` });
      // }
      onSuccess('Ok');
    } catch (err) {
      console.log('Eroor: ', err);
      const error = new Error('Some error');
      onError({ err });
    }
  };
  const excelToJSON = async (options) => {
    try {
      const { onSuccess, onError, file, onProgress } = options;
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const workSheet = workbook.Sheets['Sheet1'];
      const jsonData = XLSX.utils.sheet_to_json(workSheet);
      console.log('jsonData', jsonData);
      setExcelToJSON(jsonData);
      onSuccess('Ok');
    } catch (err) {
      console.log('Eroor: ', err);
      const error = new Error('Some error');
      // onError({ err });
    }
  };

  return (
    <>
      <ChakraDragger
        accept=".xlsx, .xls"
        multiple={false}
        customRequest={excelToJSON}
        maxCount={1}
        {...{ onChange, onDrop }}
        {...props}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </ChakraDragger>
    </>
  );
};

export default ExcelFileUpload;
