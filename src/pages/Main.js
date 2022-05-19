import Footer from '../components/footer';
import Navbar from '../components/navbar';

const main = () => {
  const ContentPage = () => {
    return (
      <div class="bg-stone-800">
        <div class="text-white body-font">
          <div class="grid grid-cols-3 p-10">
            <h1 class="col-span-2 justify-self-center text-3xl font-sans font-bold p-10">Invest in projects form Start-up</h1>
            <div class="row-span-2 mx-auto m-auto">Image/Logo here</div>
            <div class="col-span-2 justify-self-center text-lg text-center px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </div>
          <div class="border-t border-offset-2 container px-10 py-10 mx-auto">
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
              <div class="p-10 md:w-1/3">
                <div class="rounded-xl overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="blog"></img>
                  <div class="bg-stone-600 px-6 py-2">
                    <h2 class=" title-font tracking-widest text-lg title-font font-medium text-gray-400 mb-1 pt-4">Project Title</h2>
                    <h1 class="title-font text-lg font-medium text-slate-300 mb-3">Project Description</h1>
                    <p class="leading-relaxed text-white h-80 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolore in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum mollit anim id est laborum anim id.</p>
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
                <div class="h-full rounded-xl shadow-cla-blue  overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="blog"></img>
                  <div class="bg-stone-600 p-6">
                    <h2 class=" title-font tracking-widest text-lg title-font font-medium text-gray-400 mb-1 pt-2">Project Title</h2>
                    <h1 class="title-font text-lg font-medium text-slate-300 mb-3">Project Description</h1>
                    <p class="leading-relaxed text-white h-80 mb-2">Maximum, 500 words.</p>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="grid grid-rows-2 gap-4 font-bold">
                        <div>Aim</div>
                        <div>Fundraising</div>
                      </div>
                      <div class="grid grid-rows-2 justify-end gap-4 ">
                        <div>20000$</div>
                        <div>Add function here</div>
                      </div>
                    </div>
                    <div class="flex items-center flex-wrap py-4">
                      <button class="bg-stone-900 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">See Project</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="h-full p-10 md:w-1/3">
                <div class="h-full rounded-xl shadow-cla-blue  overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="blog"></img>
                  <div class="bg-stone-600 p-6">
                    <h2 class=" title-font tracking-widest text-lg title-font font-medium text-gray-400 mb-1">Project Title</h2>
                    <h1 class="title-font text-lg font-medium text-slate-300 mb-3">Project Description</h1>
                    <p class="leading-relaxed text-white mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="flex items-center flex-wrap ">
                      <button class="bg-stone-900 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">See Project</button>

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
