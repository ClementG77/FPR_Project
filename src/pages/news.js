import Footer from '../components/footer';
import Navbar from '../components/navbar';
import rocket from '../images/logoPixel.png';
import './news.css';

const news = () => {
    const ContentPage = () => {
        return (
            <div class="bg-black">
                <div class="text-white body-font">
                    <main class="w-4/5 pt-16 mx-auto">
                        <section class="shadow row pb-32">
                            <div class="tabs">
                                <div class="border-b-2 border-purple-900 bg-gray-900 rounded-xl overflow-hidden ">
                                    <div class="border-l-2 border-transparent relative">
                                        <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1"></input>
                                        <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                                            <span class="text-white font-bold text-xl underline">
                                                News title
                                            </span>
                                            <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <polyline points="6 9 12 15 18 9">
                                                    </polyline>
                                                </svg>
                                            </div>
                                        </header>
                                        <div class="tab-content text-justify indent-8">
                                            <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                                <ul class="pl-4">
                                                    <li class="pb-2">
                                                        Sub Title
                                                    </li>
                                                    <li class="pb-2">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat
                                                    </li>
                                                    <li class="pb-2">
                                                        Viverra orci sagittis eu volutpat odio facilisis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b-2 border-purple-900 bg-gray-900 rounded-xl overflow-hidden">
                                    <div class="border-l-2 border-transparent relative">
                                        <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2"></input>
                                        <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                                            <span class="text-white font-bold text-xl underline">
                                                News title
                                            </span>
                                            <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <polyline points="6 9 12 15 18 9">
                                                    </polyline>
                                                </svg>
                                            </div>
                                        </header>
                                        <div class="tab-content text-justify indent-8">
                                            <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                                <ul class="pl-4">
                                                    <li class="pb-2">
                                                        Sub Title
                                                    </li>
                                                    <li class="pb-2">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat
                                                    </li>
                                                    <li class="pb-2">
                                                        Viverra orci sagittis eu volutpat odio facilisis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b-2 border-purple-900 bg-gray-900 rounded-xl overflow-hidden">
                                    <div class="border-l-2 border-transparent relative">
                                        <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck3"></input>
                                        <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                                            <span class="text-white font-bold text-xl underline">
                                                News title
                                            </span>
                                            <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <polyline points="6 9 12 15 18 9">
                                                    </polyline>
                                                </svg>
                                            </div>
                                        </header>
                                        <div class="tab-content text-justify indent-8">
                                            <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                                <ul class="pl-4">
                                                    <li class="pb-2">
                                                        Sub Title
                                                    </li>
                                                    <li class="pb-2">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea enim commodo consequat
                                                    </li>
                                                    <li class="pb-2">
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
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
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

export default news;