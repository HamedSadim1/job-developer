import toast from "react-hot-toast";

/**
 * Handles an error by displaying an error message using the toast library.
 * @param error - The error object or error message.
 */
export const handleError = (error: unknown) => {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "An error occurred.";
  }

  toast.error(message);
};
