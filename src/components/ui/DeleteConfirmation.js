import React from "react";

const DeleteConfirmation = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>Are you sure you want to delete this book?</p>
        <div className="mt-4 flex justify-end">
          <button onClick={onCancel} className="mr-2">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
