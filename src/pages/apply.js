import Footer from '../components/footer';
import Navbar from '../components/navbar';



const apply = () => {
  const ContentPage = () => {
    return (
        <div class="bg-black">
        <div class="bg-black">
          <div class="text-white body-font">
                    <div class="bg-gray-900 mx-16 my-8 shadow rounded-xl p-8 sm:p-12 ">
                        <p class="text-3xl font-bold  underline leading-7 text-center text-white">Form</p>
                         <div> {/* change with <form> when the button send is good, and add this : action="" method="post" */}
                            <div class="md:flex items-center mt-12">
                                <div class="w-full md:w-1/2 flex flex-col">
                                    <label class="font-semibold leading-none text-gray-300">Company Name</label>
                                    <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                </div>
                            </div>
                            <div class="md:flex items-center mt-12">
                                <div class="w-full md:w-1/2 flex flex-col">
                                    <label class="font-semibold leading-none text-gray-300">Phone</label>
                                    <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                </div>
                                <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label class="font-semibold leading-none text-gray-300">Mail</label>
                                    <input type="email" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                                </div>
                            </div>
                            <div class="md:flex items-center mt-8">
                                <div class="w-full flex flex-col">
                                    <label class="font-semibold leading-none text-gray-300">Project Name</label>
                                    <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                                </div>
                                
                            </div>
                            <div>
                                <div class="w-full flex flex-col mt-8">
                                    <label class="font-semibold leading-none text-gray-300">Message</label>
                                    <textarea type="text" class="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                                </div>
                            </div>
                            <div class="flex items-center my-4">
                                <p class="font-bold">Upload all your documents such as project description, pictures, expected amount... The more complete and precise your application is, the more likely you are to get investors.</p>
                            </div>
                            <div class="flex items-center my-4">
                                <label class="flex flex-col items-center px-4 py-2 bg-gray-800 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-black hover:font-bold">
                                    <span class="leading-normal">Select files</span>
                                    <input type='file' class="hidden" />
                                </label>
                            </div>
                            <div class="flex items-center justify-center w-full">
                                <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-gray-800 hover:scale-105 hover:bg-black hover:font-bold rounded">Send Form</button>
                            </div>
                        </div>
    
          </div>
        </div>
        </div>
    </div>
    );
  };

  return (
    <div class="bg-black">
      <Navbar />
      <ContentPage />
      <Footer />
    </div>
  );
}

export default apply;