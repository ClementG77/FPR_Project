import Footer from '../components/footer';
import Navbar from '../components/navbar';
import {Link} from "react-router-dom";
import Web3 from 'web3/dist/web3.min.js';

const Dashboard = () => {
    const contractAddress = "0x6C69428f4F4734482cc895FA19E04eA4E063c7bA";
    let minABI = [
        // balanceOf
        {
          "constant":true,
          "inputs":[{"name":"_owner","type":"address"}],
          "name":"balanceOf",
          "outputs":[{"name":"balance","type":"uint256"}],
          "type":"function"
        },
        // decimals
        {
          "constant":true,
          "inputs":[],
          "name":"decimals",
          "outputs":[{"name":"","type":"uint8"}],
          "type":"function"
        }
      ];

    const portfolio = async () => {
        try {
            const { ethereum } = window;
            const accounts = await ethereum.request({ method: "eth_accounts" });
            const web3 = new Web3(Web3.givenProvider);
                await ethereum.enable();

            if (ethereum && accounts.length > 0) {
                console.log(accounts)
                let contract = new web3.eth.Contract(minABI,contractAddress);
                let balance = await contract.methods.balanceOf(accounts[0]).call();
                balance = (balance / 1000000000000000000).toFixed(2);
                document.getElementById('balance').innerHTML = "You have "+ balance + " LCRT on your wallet";
            }
            else{
                document.getElementById('balance').innerHTML = "Please connect your wallet";
            }
        } catch (err) {
            console.log(err);
        }
    }

    const ContentPage = () => {
        return (
            <div class="bg-black">
                <div class="text-white body-font">
                    <div class="border-b container px-10 py-10 mx-auto">
                        <div class="flex">
                            <h1 class="text-2xl tracking-tight font-bold px-10 text-purple-900 sm:text-3xl md:text-4xl">Your Portfolio
                            </h1>
                        </div>
                        <section class="text-white body-font">
                            <div class="container px-5 py-10 mx-auto">
                                <div class="flex flex-wrap -m-4">
                                    <div class="p-4 md:w-4/5 mx-auto">
                                        <div
                                            onClick={portfolio}
                                            class="h-full rounded-xl shadow-cla-blue bg-gray-900 overflow-hidden outline outline-1 outline-purple-900">
                                            <div class="p-6 h-3/5">
                                                <h1 class="title-font text-lg font-medium text-slat-200 mb-3">Launchor Tokens</h1>
                                                <p id="balance" class="leading-relaxed mb-1 lg:h-3/5 md:h-4/5">Click to display your portfolio</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="flex">
                        <div class="flex-1 flex flex-col overflow-hidden">
                            <div class="container mx-auto px-6 py-8">
                                <div class="flex flex-col mt-8">
                                    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                        <div
                                            class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-black">
                                            <table class="min-w-full">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            class="px-6 py-3 border-b border-black bg-gray-900 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                                                            Project Name</th>
                                                        <th
                                                            class="px-6 py-3 border-b border-black bg-gray-900 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                                                            Amount invested</th>
                                                        <th
                                                            class="px-6 py-3 border-b border-black bg-gray-900 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                                                            Ended</th>
                                                        <th
                                                            class="px-6 py-3 border-b border-black bg-gray-900 uppercase tracking-wider"></th>
                                                    </tr>
                                                </thead>

                                                <tbody class="bg-gray-800">
                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-black">
                                                            <div class="flex items-center">
                                                                <div class="ml-4">
                                                                    <div class="text-sm leading-5 font-medium text-white">Example Title
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-black">
                                                            <div class="text-sm leading-5 text-white">200$</div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-black">
                                                            <div class="text-sm leading-5 font-bold text-red-500">NO</div>
                                                        </td>
                                                        <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap border-b border-black">
                                                            <Link to="/news" class="text-white hover:text-indigo-900">News</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-black">
                                                            <div class="flex items-center">
                                                                <div class="ml-4">
                                                                    <div class="text-sm leading-5 font-medium text-white">Example Title
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-black">
                                                            <div class="text-sm leading-5 text-white">500$</div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-black">
                                                            <div class="text-sm leading-5 font-bold text-green-500">YES</div>
                                                        </td>
                                                        <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap border-b border-black">
                                                            <a href="#" class="text-white hover:text-indigo-900">News</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default Dashboard;
