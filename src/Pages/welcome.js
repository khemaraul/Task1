import { Route } from "react-router";

const Welcome = () => {
    return (
        <section>
    <h1>Welcome page</h1>
    <Route path='/Welcome'>
        <p>Welcome, new user!</p>
    </Route>
    </section>
    )
}

export default Welcome;