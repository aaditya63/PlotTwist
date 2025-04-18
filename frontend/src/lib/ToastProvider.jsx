import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastProvider = () => {
  return (
    <>
      <style>
        {`
          .Toastify__progress-bar {
            background: #8A2BE2 !important;
          }
        `}
      </style>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          background: '#ffffff',
          color: '#121212',
          border: '1px solid #8A2BE240',
          borderRadius: '1rem',
        }}
        icon={({ type }) => {
          switch (type) {
            case 'success':
              return <i className="fas fa-check-circle text-2xl text-green-500" />;
            case 'error':
              return <i className="fas fa-times-circle text-2xl text-red-500" />;
            case 'info':
              return <i className="fas fa-info-circle text-2xl text-blue-500" />;
            case 'warning':
              return <i className="fas fa-exclamation-circle text-yellow-500" />;
            default:
              return <i className="fas fa-bell text-gray-500" />;
          }
        }}
      />
    </>
  );
};

export default ToastProvider;