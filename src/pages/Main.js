import Footer from '../components/footer';
import Navbar from '../components/navbar';

const main = () => {
const contentPage = () => {
    return (
        <div> <h1>Hello World</h1></div>
    );
  };
  
  return (
    <div>
      <Navbar />
    <contentPage />
    <Footer />
    </div>
  );
}

  export default main;
  