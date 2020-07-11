import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = ({ title, onSubmit, item }) => {
  const onDrop = useCallback(acceptedFiles => {
    onSubmit(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return item.length ? (
    <div style={dropzoneWrapper}>
      <p> {item[0].name}</p>
      <button onClick={() => onSubmit([])}>Clear</button>
    </div>
  ) : (
    <div {...getRootProps()} style={dropzoneWrapper}>
      <p>{title}</p>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

const dropzoneWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '2rem',
  textAlign: 'center',
  borderRadius: '2.5rem',
  border: '2px dashed #ececef',
  cursor: 'pointer',
  width: '100%',
  margin: '2.5rem',
  height: '100px'
};
export default Dropzone;
