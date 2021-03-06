import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import rocket from '../../images/logoPixel.png';
import quokka from '../../images/quokka/IMG_0795.jpg';
import quokkaimage from '../../images/quokka/IMG_0819.jpg';
import quokkaimage1 from '../../images/quokka/IMG_0820.jpg';
import quokkalogo from '../../images/quokka/quokkalogo.png';
import Web3 from 'web3/dist/web3.min.js';


const projectPage = () => {

  const contractAddress = "0xd8D6e3Aa2F388e6b04e70F72746dd03924F5F396";

  const PresaleAbi = [{"inputs":[{"internalType":"contract QKFT","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"MAX_SALE_PER_ACCOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_SALE_PER_ACCOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activatePublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buyLCRT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"deactivatePublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"invested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"salesStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setSalesStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract QKFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

  const invest = async () => {
    document.getElementById('invest').className = "hidden";
    document.getElementById('buy').className = "visible mx-auto";
  }

  const buy = async () => {
    try {
      const { ethereum } = window;
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (ethereum) {
          const web3 = new Web3(Web3.givenProvider);
          await ethereum.enable();
          let contract = new web3.eth.Contract(PresaleAbi,contractAddress);
          let count = document.getElementById('count').value;
          console.log(count);
          let countFinal = parseInt(`${count}000000000000000000`, 10) * 0.000001;
          let buy = await contract.methods.buyLCRT(count).send({
            from: accounts[0],
            value: countFinal * 5
          });
      }
  } catch (err) {
      console.log(err);
  }
  }

  const ContentPage = () => {
    return (
      <div class="bg-black">
        <div class="bg-black">
          <div class="relative text-white body-font">
            <div class="fixed bottom-0 mx-auto w-full h-12 bg-gray-900 lg:hidden">
              <button class="w-full h-full bg-gradient-to-r from-zinc-500 to-zinc-600 rounded-lg z-10 ">Invest in the Project</button>
            </div>
            <div class="fixed top-16 w-1/3 lg:right-0 z-10 md:py-2 lg:py-2.5">
              <div class="pl-8 flex w-4/5">
                <div class="flex w-full">
                  <div hidden class="md:block w-full">
                    <div class="flex items-center rounded-xl">
                      <div class="w-full">
                        <div
                          class="rounded-xl shadow-cla-blue bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
                          <img
                            class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                            src={quokka}
                            alt="blog"></img>
                          <div class="p-6 h-full">
                            <h1 class="title-font text-lg font-medium text-slat-200 mb-3">Quokkafe</h1>
                            <div class="grid grid-cols-2  mb-4">
                              <div class="text-left">Aim</div>
                              <div class="text-right">20000$</div>
                              <div class="text-left">Min</div>
                              <div class="text-right">100$</div>
                              <div class="text-left">Funds raised</div>
                              <div class="text-right">10000$</div>
                              <div class="text-left">Token Price</div>
                              <div class="text-right">0.001$</div>
                            </div>
                            <div class=" relative flex items-center flex-wrap ">
                              <div  id="buy" class="mx-auto  hidden sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                                <input id="count" type="number" class="my-2 border border-white text-base w-full font-medium leading-none text-slate-300 p-4 focus:outline-none bg-transparent placeholder-slate-300" placeholder="Value" required />
                                <button  onClick={buy} class="mx-auto focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-stone-700 py-4 px-6 hover:bg-opacity-75">Buy</button>
                              </div>
                              <button
                                onClick={invest}
                                id="invest"
                                class="w-full bg-gradient-to-r from-zinc-500 to-zinc-600 mx-auto hover:scale-105 px-4 py-1 rounded-lg">Invest in the project</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-2/3 lg:pl-24">
              <section class="text-white body-font">
                <div class="container rounded-xl shadow-cla-blue bg-gray-900 px-8 py-5 mr-24">
                  <div class="flex">
                    <h1 class="text-2xl tracking-tight font-bold underline mx-auto pb-5 text-white sm:text-3xl md:text-4xl">Project Presentation</h1>
                  </div>
                  <div class="flex flex-wrap text-justify">
                    <h1 class="text-xl tracking-tight font-bold text-purple-900 pb-2 text-white">Purpose of the project</h1>
                    <div class="grid grid-cols-5 flex-col">
                      <div class="col-span-5 md:col-span-4 sm:col-span-5">
                        <p class="leading-relaxed mb-2 lg:h-3/5 md:h-4/5">
                        In a society where contact is less and less physical since the appearance of the internet, it???s important to create new ways 
                        in order to maintain the human contact and the interaction between people. For this reason, the team thought about 
                        creating a place, unique and innovative where peers can meet and share moments around a coffee. In this way the creation
                        of links will be facilitated and people will get along more easily.
                        </p>
                      </div>
                      <div class="col-span-5 mx-auto md:col-span-1">
                        <img src={quokkalogo} class="object-contain w-32 " alt="logo"></img>
                      </div>
                    </div>
                    <p class="border-dashed border-t-2 border-purple-900 leading-relaxed mb-1 lg:h-3/5 md:h-4/5">
                      <h1 class="text-xl tracking-tight font-bold text-purple-900 pb-2 text-white">Idea behind the project</h1>
                    <p class="leading-relaxed mb-1 lg:h-3/5 md:h-4/5">The idea behind this multifuncional place is that people are free to come and spend time there as they want, 
                        by playing games, drinking coffee, listening to live music, participating in events???
                        The place has been chosen carefully. Indeed Copenhagen and therefore Denmark are into the Hygge culture. 
                        This culture encourages spending time with peers by talking, playing, drinking etc in a warm and intimate 
                        environment. Moreover, the Danish consume a lot of coffee and the concept of ambiente cafe is popular in the 
                        capital.
                        All the elements bring the team to conclude that the Quokkafe concept will totally fit into Danish culture, 
                        even more considering that the Danish are really into digital stuff ( e.g. Mobilepay)</p></p>
                    <p class="border-dashed border-t-2 border-purple-900 leading-relaxed mb-1 lg:h-3/5 md:h-4/5">
                      <h1 class="text-xl tracking-tight font-bold text-purple-900 pb-2 text-white">Title</h1>
                      <div class="grid grid-cols-5 flex-col">
                      <div class="col-span-5 mx-auto md:col-span-1 p-2">
                        <img src={quokkaimage1} class="object-cover" alt="Launchor"></img>
                      </div>
                      <div class="col-span-5 m-auto md:col-span-4 sm:col-span-5">
                        <p class="leading-relaxed mb-1 lg:h-3/5 md:h-4/5">
                        However, since the market is really attractive, Quokkafe is exposed to a lot of competitors with similar 
                        concepts. For this reason, the company decided to differentiate themself thanks to an innovative application 
                        which will be used to go to the cafe. This application allows the customers to personalize his experience in 
                        the cafe and therefore optimize his visit.
                        Finally, the company believes that this concept has a big potential and if the application and the development 
                        are well managed, the Quokaffe will definitely be a success.
                        </p>
                      </div>                      
                    </div>
                      </p>
                  </div>
                </div>
              </section>
            </div>

          </div>
        </div>
      </div>
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

export default projectPage;