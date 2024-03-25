import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="text-center mt-24">
            <h1 className="text-4xl font-bold">404</h1>
            <h1 className="text-4xl font-bold">Oops!</h1>
            <p className="text-xl">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>

            <button className="btn btn-primary hover:bg-green-500"><Link to={'/'}>Back To Home</Link></button>
        </div>
    );
}