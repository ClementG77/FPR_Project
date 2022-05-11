const footer = () => {
    return (
      <footer class="footer bg-current relative pt-1 border-b-2 ">
        <div class="container mx-auto px-6">
          <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-center">
            <div class="flex flex-col px-20 py-1 ">
                <span class="font-bold text-gray-700 uppercase mt-4">
                  Protcol
                </span>
                <span class="my-2">
                  <a href="" class="text-white  text-md hover:text-gray-700">
                    Dashboard
                  </a>
                </span>
                <span class="my-2">
                  <a href="" class="text-white  text-md hover:text-gray-700">
                    things
                  </a>
                </span>
              </div>
              <div class="flex flex-col px-20 py-1 ">
                <span class="font-bold text-gray-700 uppercase mt-4">
                  Social
                </span>
                <span class="my-2">
                  <a href="https://discord.gg" class="text-white  text-md hover:text-gray-700">
                    Discord
                  </a>
                </span>
                <span class="my-2">
                  <a href="https://twitter.com" class="text-white  text-md hover:text-gray-700">
                    Twitter
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-6">
          <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
              <p class="text-sm text-white font-bold mb-2">
                © 2022 Launchor All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default footer;
  