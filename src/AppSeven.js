import { Link, Route, Routes } from "react-router-dom";
import { WelcomeFunctionTwo } from "./WelcomeFunctionTwo";
import { Container } from "./Container";
import { Catalogue } from "./Catalogue";
import { Product } from "./Product";
// import { LoginForm } from "./LoginForm";

export function AppSeven() {
  return (
    <Container
      title={
        <div>
          <h1>My Awesome App</h1>
          <div>
            <Link to="/">Home</Link> | <Link to="products">Products</Link>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<WelcomeFunctionTwo />} />
        {/* <Route path="/:name" element={<WelcomeFunctionTwo />} />
        <Route path="login" element={<LoginForm />} /> */}
        <Route path="products" element={<Catalogue />}>
          <Route index element={<p>Please select a product</p>} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p>Not Found</p>
              <Link to="/">Go Home</Link>
            </div>
          }
        />
      </Routes>
    </Container>
  );
}
