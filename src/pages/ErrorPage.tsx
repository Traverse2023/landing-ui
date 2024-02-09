import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if (!isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>Unexpected error ocurred.</h1>
      </div>
    );
  }

  if (error.status === 404) {
    return (
      <div id="error-page">
        <h1>404 Error</h1>
        <p>Not Found</p>
      </div>
    );
  }
}