import Footer from '../components/footer';
import Navbar from '../components/navbar';
import rocket from '../images/rocket.png';

const main = () => {

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const client = require("@mailchimp/mailchimp_marketing");

  client.setConfig({
    apiKey: "abc6626f3b199759e5f0d76bf229e47d-us17",
    server: "us17",
  });

  const run = async () => {
    const response = await client.lists.getAllLists();
    console.log(response);
  };

  const newsletter = async () => {
    let email = document.getElementById('email').value;
    if (validateEmail(email) === false) {
      run()
    }
    console.log(email);
  }

  const ContentPage = () => {
    return (
      <div class="bg-black">
        <div class="text-white body-font">
          <div class="relative bg-gradient-to-r from-black to-zinc-700  overflow-hidden">
            <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                  <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span class="block xl:inline">Invest in projects </span>
                    <span class="block text-purple-900	xl:inline">from Start-up</span>
                  </h1>
                  <p
                    class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.</p>
                </div>
              </main>
            </div>
            <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img class=" animate-wiggle h-96 w-96 object-cover mx-auto my-12 "
                src={rocket}
                alt=""></img>
            </div>
          </div>
          <div class="border-t border-b container px-10 py-10 mx-auto">
            <div class="flex">
              <h1 class="text-2xl tracking-tight font-bold px-10 text-white sm:text-3xl md:text-4xl">Current Projects</h1>
            </div>
            <section class="text-white body-font">
              <div class="container px-5 py-10 mx-auto">
                <div class="flex flex-wrap -m-4">
                  <div class="p-4 md:w-1/3">
                    <div class="h-full rounded-xl shadow-cla-blue bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
                      <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                        src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                        alt="blog"></img>
                      <div class="p-6 h-3/5">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">Project Description
                        </h2>
                        <h1 class="title-font text-lg font-medium text-slat-200 mb-3">Project Title</h1>
                        <p class="leading-relaxed mb-1 lg:h-3/5 md:h-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat.</p>
                        <div class="relative flex items-center flex-wrap ">
                          <button
                            class="bg-gradient-to-r from-purple-900 to-gray-800 hover:scale-105 drop-shadow-md  px-4 py-1 rounded-lg">Project</button>
                          <div class="absolute right-0 font-bold">Aim : 20000$</div>
                        </div>
                        <div class="my-4">
                      <div class="w-full bg-white rounded-full dark:bg-white">
                        <div class="bg-purple-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 50%</div>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/3">
                    <div class="h-full rounded-xl shadow-cla-violate bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
                      <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                        src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                        alt="blog"></img>
                      <div class="p-6 h-3/5">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">Project Description
                        </h2>
                        <h1 class="title-font text-lg font-medium text-slat-200 mb-3">Project Title</h1>
                        <p class="leading-relaxed mb-1 lg:h-3/5 md:h-4/5">Photo booth fam kinfolk cold-pressed sriracha
                          leggings jianbing microdosing tousled waistcoat.</p>
                        <div class="relative flex items-center flex-wrap">
                          <button
                            class="bg-gradient-to-r from-purple-900 to-gray-800 hover:scale-105 drop-shadow-md px-4 py-1 rounded-lg">Project</button>
                          <div class="absolute right-0 font-bold">Aim : 5000$</div>
                        </div>
                        <div class="my-4">
                      <div class="w-full bg-white rounded-full dark:bg-white">
                        <div class="bg-purple-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 45%</div>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/3">
                    <div class="h-full rounded-xl shadow-cla-pink bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
                      <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                        src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                        alt="blog"></img>
                      <div class="p-6 h-3/5">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">Project Description
                        </h2>
                        <h1 class="title-font text-lg font-medium text-slat-200 mb-3">Project Title</h1>
                        <p class="leading-relaxed mb-1 lg:h-3/5 md:h-4/5">200 words max !</p>
                        <div class="relative flex items-center flex-wrap">
                          <button
                            class="bg-gradient-to-r from-purple-900 to-gray-800 hover:scale-105 drop-shadow-md px-4 py-1 rounded-lg">Project</button>
                          <div class="absolute right-0 font-bold">Aim : To change</div>
                        </div>
                        <div class="my-4">
                      <div class="w-full bg-white rounded-full dark:bg-white">
                        <div class="bg-purple-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 90%</div>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="container px-10 pt-10 mx-auto">
            <div class="flex pb-5">
              <h1 class="text-2xl tracking-tight font-bold px-10 text-white sm:text-3xl md:text-4xl">Token</h1>
            </div>
            <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-black to-zinc-700 mb-10">
              <div class="relative overflow-hidden">
                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <img class="h-56 rounded-xl w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    alt=""></img>
                </div>
                <div class="relative z-10 pb-8 sm:pb-2 md:pb-4 lg:max-w-2xl lg:w-full lg:pb-8 xl:pb-10">
                  <main class="mx-auto px-4 mt-10 max-w-7xl px-4 sm:mt-2 sm:px-6 md:mt-4 lg:mt-5 lg:px-8 xl:mt-10">
                    <div class="sm:text-center lg:text-left">
                      <h1 class="text-2xl tracking-tight font-extrabold text-white sm:text-3xl md:text-4xl">
                        <span class="block text-purple-900 xl:inline">LCRT fundamental value</span>
                      </h1>
                      <p
                        class="my-3 text-base text-gray-300">
                        This token draws its value from :
                        <li
                          class="mt-1 text-base text-gray-300">
                          A share of the Launchor company's profits.</li>
                        <li
                          class="mt-1 text-base text-gray-300">
                          Ownership of 1% of the value of each launch in stablecoins.</li>
                        <li
                          class="mt-1 text-base text-gray-300">
                          Ownership of approximately 1% of the tokens of each Launchor company </li>
                        <li
                          class="mt-1 text-base text-gray-300">
                          Collects 1% of the profits of each company launched.</li>
                        <li
                          class="mt-1 text-base text-gray-300">
                          The right to have a say in the selection of companies to fund.</li>
                      </p>
                    </div>
                    <div class="flex items-center flex-wrap mt-5 ">
                      <button
                        class="bg-gradient-to-r from-purple-900 to-gray-800 hover:scale-105 drop-shadow-md  px-4 py-1 rounded-lg">More informations</button>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
          <div class="2xl:mx-auto 2xl:container mx-4">
            <div class="w-full relative flex items-center justify-center">
              <div class="outline outline-white bg-gray-900 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                <h1 class="text-4xl font-semibold leading-9 text-white text-center">Don't miss anything!</h1>
                <p class="text-base leading-normal text-center text-white mt-6">
                  Subscribe to your newsletter to stay informed. <br />
                  You will receive an email for any new project
                </p>
                <div class="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                  <input id="email" class="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" placeholder="Email Address" required />
                  <button onClick={newsletter} class="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-stone-700 py-4 px-6 hover:bg-opacity-75">Subscribe</button>
                </div>
              </div>
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

export default main;
