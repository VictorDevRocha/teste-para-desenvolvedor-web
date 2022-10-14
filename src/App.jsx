import CTA from "./CTA";
import DotHealt from "./DotSaude";
import FirstPage from "./first-page";
import Footer from "./Footer";
import Form from "./Form";
import "./global.css";
import Partners from "./Partners";
import Questions from "./Questions";

function App() {
  return (
    <>
      <FirstPage />
      <DotHealt />
      <CTA />
      <Partners />
      <Questions />
      <Form />
      <Footer />
    </>
  );
}

export default App;
