import MainNavigation from "../components/MainNavigation";

function ErrorPage(){
    return(
        <>
        <MainNavigation/>
        <main>
            <h1>An Error Occurred!</h1>
            <p>This page cannot be found.</p>
        </main>
        </>
    )
}

export default ErrorPage;