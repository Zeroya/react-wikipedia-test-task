import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface UploadEventsScreenProps {
  loading: boolean;
  onUpload: () => void;
}

const UploadEventsScreen: React.FC<UploadEventsScreenProps> = ({loading, onUpload}) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {loading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <h2 className="font-bold text-lg mb-4">Click the button to see all of today's events from Wikipedia</h2>
          <button
            type="button"
            className="w-max text-white text-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={onUpload}>
            Upload events
          </button>
        </>
      )}
    </div>
  );
};

export default UploadEventsScreen;
