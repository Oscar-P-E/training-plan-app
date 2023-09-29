import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { message?: string; statusText?: string };

  console.error(error);

  const errorMessage =
    error.statusText || error.message || "An unknown error occurred.";

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
