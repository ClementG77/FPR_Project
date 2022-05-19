import Footer from '../components/footer';
import Navbar from '../components/navbar';

const main = () => {
const ContentPage = () => {
    return (
        <div> <h1>Hello World</h1></div>
    );
  };
  
  return (
    <div class="bg-blue">
      <Navbar />
      <ContentPage />
      <Footer />
    </div>
  );
}

  export default main;
  