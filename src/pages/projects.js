import Footer from '../components/footer';
import Navbar from '../components/navbar';
import {Link} from "react-router-dom";


const projects = () => {
    const ContentPage = () => {
        return (
            <div class="bg-black">
                <div class="text-white body-font">
                    <div class="px-6 py-6 2xl:container">
                        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div class="md:col-span-2 lg:col-span-1">
                                <div class="py-8 px-6 space-y-6 rounded-xl border border-purple-900 bg-gray-900">
                                    <h5 class="text-xl text-white text-center">Launches</h5>
                                    <div class="mt-2 flex justify-center gap-4">
                                        <h3 class="text-3xl font-bold text-white">99</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="md:col-span-2 lg:col-span-1">
                                <div class="py-8 px-6 space-y-6 rounded-xl border border-purple-900 bg-gray-900">
                                    <h5 class="text-xl text-white text-center">Funds raised</h5>
                                    <div class="mt-2 flex justify-center gap-4">
                                        <h3 class="text-3xl font-bold text-white">$150 000</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="md:col-span-2 lg:col-span-1">
                                <div class="py-8 px-6 space-y-6 rounded-xl border border-purple-900 bg-gray-900">
                                    <h5 class="text-xl text-white text-center">Number of investors</h5>
                                    <div class="mt-2 flex justify-center gap-4">
                                        <h3 class="text-3xl font-bold text-white">2 686</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-b container px-10 py-10 mx-auto">
                        <div class="flex">
                            <h1 class="text-2xl tracking-tight font-bold px-10 text-purple-900 sm:text-3xl md:text-4xl">Current Projects
                            </h1>
                        </div>
                        <section class="text-white body-font">
                            <div class="container px-5 py-10 mx-auto">
                                <div class="flex flex-wrap -m-4">
                                    <div class="p-4 md:w-1/3">
                                        <div
                                            class="h-full rounded-xl shadow-cla-blue bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
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
                                                    <Link to="/projectPage"
                                                        class="bg-gradient-to-r from-zinc-500 to-zinc-600 hover:scale-105 drop-shadow-md  px-4 py-1 rounded-lg">Project</Link>
                                                    <div class="absolute right-0 font-bold">Aim : 20000$</div>
                                                </div>
                                                <div class="my-4">
                                                    <div class="w-full bg-white rounded-full dark:bg-white">
                                                        <div class="bg-purple-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-1/2"> 50%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-4 md:w-1/3">
                                        <div
                                            class="h-full rounded-xl shadow-cla-violate bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
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
                                                        class="bg-gradient-to-r from-zinc-500 to-zinc-600 hover:scale-105 drop-shadow-md px-4 py-1 rounded-lg">Project</button>
                                                    <div class="absolute right-0 font-bold">Aim : 5000$</div>
                                                </div>
                                                <div class="my-4">
                                                    <div class="w-full bg-white rounded-full dark:bg-white">
                                                        <div class="bg-purple-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-11/12"> 90%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-4 md:w-1/3">
                                        <div
                                            class="h-full rounded-xl shadow-cla-pink bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
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
                                                        class="bg-gradient-to-r from-zinc-500 to-zinc-600 hover:scale-105 drop-shadow-md px-4 py-1 rounded-lg">Project</button>
                                                    <div class="absolute right-0 font-bold">Aim : To change</div>
                                                </div>
                                                <div class="my-4">
                                                    <div class="w-full bg-white rounded-full dark:bg-white">
                                                        <div class="bg-purple-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-5/12"> 40%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="border-b container px-10 py-10 mx-auto">
                        <div class="flex">
                            <h1 class="text-2xl tracking-tight font-bold px-10 text-purple-900 sm:text-3xl md:text-4xl">Upcomming Projects
                            </h1>
                        </div>
                        <section class="text-white body-font">
                            <div class="container px-5 py-10 mx-auto">
                                <div class="flex flex-wrap -m-4">
                                    <div class="p-4 md:w-1/3">
                                        <div
                                            class="h-full rounded-xl shadow-cla-blue bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
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
                                                        class="bg-gradient-to-r from-zinc-500 to-zinc-600 hover:scale-105 drop-shadow-md  px-4 py-1 rounded-lg">Project</button>
                                                    <div class="absolute right-0 font-bold">Aim : 20000$</div>
                                                </div>
                                                <div class="my-4">
                                                    <div class="w-full bg-white rounded-full dark:bg-white">
                                                        <div class="bg-purple-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 0%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-4 md:w-1/3">
                                        <div
                                            class="h-full rounded-xl shadow-cla-violate bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
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
                                                        class="bg-gradient-to-r from-zinc-500 to-zinc-600 hover:scale-105 drop-shadow-md px-4 py-1 rounded-lg">Project</button>
                                                    <div class="absolute right-0 font-bold">Aim : 5000$</div>
                                                </div>
                                                <div class="my-4">
                                                    <div class="w-full bg-white rounded-full dark:bg-white">
                                                        <div class="bg-purple-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full "> 0%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-4 md:w-1/3">
                                        <div
                                            class="h-full rounded-xl shadow-cla-pink bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
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
                                                        class="bg-gradient-to-r from-zinc-500 to-zinc-600 hover:scale-105 drop-shadow-md px-4 py-1 rounded-lg">Project</button>
                                                    <div class="absolute right-0 font-bold">Aim : To change</div>
                                                </div>
                                                <div class="my-4">
                                                    <div class="w-full bg-white rounded-full dark:bg-white">
                                                        <div class="bg-purple-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 0%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="border-b container px-10 py-10 mx-auto">
                        <div class="flex">
                            <h1 class="text-2xl tracking-tight font-bold px-10 text-purple-900 sm:text-3xl md:text-4xl">Ended Projects</h1>
                        </div>
                        <section class="text-white body-font">
                            <div class="container px-5 py-10 mx-auto">
                                <div class="flex flex-wrap -m-4">
                                    <div class="p-4 md:w-1/3">
                                        <div
                                            class="h-full rounded-xl shadow-cla-blue bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
                                            <img
                                                class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                                                src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                                                alt="blog"></img>
                                            <div class="p-6 h-3/5">
                                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">Project Description
                                                </h2>
                                                <h1 class="title-font text-lg font-medium text-slat-200 mb-3">Project Title</h1>
                                                <p class="leading-relaxed lg:h-3/6 md:h-4/6">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat..</p>
                                                <div class="grid grid-cols-2 mb-2 font-bold">
                                                    <div class="text-left">Aim</div>
                                                    <div class="text-right">20000$</div>
                                                    <div class="text-left">Participants</div>
                                                    <div class="text-right">512</div>
                                                </div>
                                                <div class="my-4">
                                                    <div class="w-full bg-white rounded-full dark:bg-white">
                                                        <div class="bg-purple-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 100%</div>
                                                    </div>
                                                </div>
                                                <div class="flex items-center flex-wrap ">
                                                    <button
                                                        class="w-full bg-gradient-to-r from-zinc-500 to-zinc-600 hover:scale-105 drop-shadow-md  px-4 py-1 rounded-lg">Swap</button> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-4 md:w-1/3">
                                        <div
                                            class="h-full rounded-xl shadow-cla-violate bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
                                            <img
                                                class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                                                src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                                                alt="blog"></img>
                                            <div class="p-6 h-3/5">
                                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">Project Description
                                                </h2>
                                                <h1 class="title-font text-lg font-medium text-slat-200 mb-3">Project Title</h1>
                                                <p class="leading-relaxed lg:h-3/6 md:h-4/6">Photo booth fam kinfolk cold-pressed sriracha
                                                    leggings jianbing microdosing tousled waistcoat.</p>
                                                <div class="grid grid-cols-2 mb-2 font-bold">
                                                    <div class="text-left">Aim</div>
                                                    <div class="text-right">10000$</div>
                                                    <div class="text-left">Participants</div>
                                                    <div class="text-right">100</div>
                                                </div>
                                                <div class="my-4">
                                                    <div class="w-full bg-white rounded-full dark:bg-white">
                                                        <div class="bg-purple-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-2/5"> 40%</div>
                                                    </div>
                                                </div>
                                                <div class="flex items-center flex-wrap ">
                                                    <button
                                                        class="w-full bg-gradient-to-r from-zinc-500 to-zinc-600 hover:scale-105 drop-shadow-md  px-4 py-1 rounded-lg">Swap</button> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-4 md:w-1/3">
                                        <div
                                            class="h-full rounded-xl shadow-cla-pink bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
                                            <img
                                                class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                                                src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                                                alt="blog"></img>
                                            <div class="p-6 h-3/5">
                                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">Project Description
                                                </h2>
                                                <h1 class="title-font text-lg font-medium text-slat-200 mb-3">Project Title</h1>
                                                <p class="leading-relaxed lg:h-3/6 md:h-4/6">200 words max !</p>
                                                <div class="grid grid-cols-2 mb-2 font-bold">
                                                    <div class="text-left">Aim</div>
                                                    <div class="text-right">To change$</div>
                                                    <div class="text-left">Participants</div>
                                                    <div class="text-right">To change</div>
                                                </div>
                                                <div class="my-4">
                                                    <div class="w-full bg-white rounded-full dark:bg-white">
                                                        <div class="bg-purple-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-2/3"> To change%</div>
                                                    </div>
                                                </div>
                                                <div class="flex items-center flex-wrap ">
                                                    <button
                                                        class="w-full bg-gradient-to-r from-zinc-500 to-zinc-600 hover:scale-105 drop-shadow-md  px-4 py-1 rounded-lg">Swap</button> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-4 md:w-1/3">
                                        <div
                                            class="h-full rounded-xl shadow-cla-blue bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
                                            <img
                                                class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                                                src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                                                alt="blog"></img>
                                            <div class="p-6 h-3/5">
                                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">Project Description
                                                </h2>
                                                <h1 class="title-font text-lg font-medium text-slat-200 mb-3">Project Title</h1>
                                                <p class="leading-relaxed lg:h-3/6 md:h-4/6">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat.</p>
                                                <div class="grid grid-cols-2 mb-2 font-bold">
                                                    <div class="text-left">Aim</div>
                                                    <div class="text-right">20000$</div>
                                                    <div class="text-left">Participants</div>
                                                    <div class="text-right">512</div>
                                                </div>
                                                <div class="my-4">
                                                    <div class="w-full bg-white rounded-full dark:bg-white">
                                                        <div class="bg-purple-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 100%</div>
                                                    </div>
                                                </div>
                                                <div class="flex items-center flex-wrap ">
                                                    <button
                                                        class="w-full bg-gradient-to-r from-zinc-500 to-zinc-600 hover:scale-105 drop-shadow-md  px-4 py-1 rounded-lg">Swap</button> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
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

export default projects;
