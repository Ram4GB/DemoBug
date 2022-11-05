import MainLayout from "../components/MainLayout";
import "../styles/globals.css";

let count = 0;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>

      <ul>
        <li>Go to http://localhost:3000/product</li>
        <li>Click page 1</li>
        <li>Click page 2</li>
        <li>Click page 3</li>
        <li>Click Homepage</li>
        <li>Click About</li>
        <li>Click back</li>
        <li>Click back -- BUG</li>
      </ul>
    </>
  );
}

export default MyApp;
