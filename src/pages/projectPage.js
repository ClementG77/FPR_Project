import Footer from '../components/footer';
import Navbar from '../components/navbar';
import rocket from '../images/logoPixel.png';


const projectPage = () => {
    const ContentPage = () => {
        return (
            <div class="bg-black">
  <div class="bg-black">
    <div class="relative text-white body-font">
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
                            src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                            alt="blog"></img>
                          <div class="p-6 h-full">
                            <h1 class="title-font text-lg font-medium text-slat-200 mb-3">Project Title</h1>
                            <div class="grid grid-cols-2  mb-4">
                                <div class="text-left">Aim</div>
                                <div class="text-right">20000$</div>
                                <div class="text-left">Min</div>
                                <div class="text-right">100$</div>
                                <div class="text-left">Funds raised</div>
                                <div class="text-right">10000$</div>
                            </div>
                            <div class="relative flex items-center flex-wrap ">
                              <button
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
                <h1 class="text-xl tracking-tight font-bold text-purple-900 pb-2 text-white">Title</h1>
                <p class="leading-relaxed mb-2 lg:h-3/5 md:h-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat.</p>
                <p class="border-dashed border-t-2 border-purple-900 leading-relaxed mb-1 lg:h-3/5 md:h-4/5">
                <h1 class="text-xl tracking-tight font-bold text-purple-900 pb-2 text-white">Title</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat.</p>
                <p class="leading-relaxed mb-1 lg:h-3/5 md:h-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat.</p>
                <p class="border-dashed border-t-2 border-purple-900 leading-relaxed mb-1 lg:h-3/5 md:h-4/5">
                  <h1 class="text-xl tracking-tight font-bold text-purple-900 pb-2 text-white">Title</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat.</p>
                <p class="leading-relaxed mb-1 lg:h-3/5 md:h-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat.</p> 
                <div class="grid grid-cols-5 flex-col">
                  <div class="col-span-5 md:col-span-4 sm:col-span-5">
                    <p class="leading-relaxed mb-1 lg:h-3/5 md:h-4/5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat.
                    </p>
                  </div>
                  <div class="col-span-5 mx-auto md:col-span-1">
                    <img src={rocket} class="object-contain w-32 " alt="Launchor"></img>
                </div>
                
                </div>
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