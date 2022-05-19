import Footer from '../components/footer';
import Navbar from '../components/navbar';

const main = () => {
  const ContentPage = () => {
    return (
      <div class="bg-stone-800">
        <div class="text-white body-font">
          <div class="relative bg-stone-800 overflow-hidden">
            <div class="relative z-10 pb-8 bg-stone-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                  <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span class="block xl:inline">Invest in projects </span>
                    <span class="block text-yellow-100	xl:inline">from Start-up</span>
                  </h1>
                  <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </main>
            </div>
            <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""></img>
            </div>
          </div>
          <div class="border-t container px-10 py-10 mx-auto">
            <div class="flex">
              <h1 class="title-font text-xl font-bold px-10">Current Projects</h1>
            </div>
            <div class="flex flex-wrap">
              <div class="p-10 md:w-1/3">
                <div class="outline outline-1 rounded-xl overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="blog"></img>
                  <div class="bg-stone-600 px-6 py-2">
                    <h2 class=" title-font tracking-widest text-lg title-font font-medium text-gray-400 mb-1 pt-4">Project Title</h2>
                    <h1 class="title-font text-lg font-medium text-slate-300 mb-3">Project Description</h1>
                    <p class="flex flex-wrap leading-relaxed text-white h-80 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolore in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum mollit anim id est laborum anim id.</p>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="grid grid-rows-2 gap-4 font-bold">
                        <div>Aim</div>
                        <div>Fundraising</div>
                      </div>
                      <div class="grid grid-rows-2 justify-end gap-4 ">
                        <div>20000$</div>
                        <div>10000$</div>
                      </div>
                    </div>
                    <div class="flex items-center flex-wrap py-4">
                      <button class="bg-stone-900 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">See Project</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-10 md:w-1/3">
                <div class="rounded-xl overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="blog"></img>
                  <div class="bg-stone-600 px-6 py-2">
                    <h2 class=" title-font tracking-widest text-lg title-font font-medium text-gray-400 mb-1 pt-4">Project Title</h2>
                    <h1 class="title-font text-lg font-medium text-slate-300 mb-3">Project Description</h1>
                    <p class="leading-relaxed text-white h-80 mb-2">Maximum, 500 words.</p>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="grid grid-rows-2 gap-4 font-bold">
                        <div>Aim</div>
                        <div>Fundraising</div>
                      </div>
                      <div class="grid grid-rows-2 justify-end gap-4 ">
                        <div>20000$</div>
                        <div>10000$</div>
                      </div>
                    </div>
                    <div class="flex items-center flex-wrap py-4">
                      <button class="bg-stone-900 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">See Project</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/3">
                  <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="blog"></img>
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                      <h1 class="title-font text-lg font-medium text-gray-600 mb-3">The Catalyzer</h1>
                      <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                      <div class="flex items-center flex-wrap ">
                        <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Learn more</button>
                      </div>
                    </div>
                  </div>
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
