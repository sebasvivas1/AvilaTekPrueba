import "tailwindcss/tailwind.css";
import Navbar from "../components/navbar/navbar";
function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-cbg">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
