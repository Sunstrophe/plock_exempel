import React, { useState } from "react";

function App() {
    const [hidden, setHidden] = useState("Av");
    const [openHelp, setOpenHelp] = useState(false)

    const changeHidden = () => {
        if (hidden == "Av") {
            setHidden("På");
        } else {
            setHidden("Av");
        }
    };

    return (
        <div className="lg:flex lg:justify-center lg:bg-black">
            <div className="bg-white flex flex-col h-screen lg:max-w-md">
                {openHelp ? (<div className="bg-black opacity-25 h-screen min-w-full fixed" onClick={() => setOpenHelp(!openHelp)}>
                    <div className=" flex justify-center my-auto">
                        <div className="border w-40 h-40 bg-amber-700">test</div>
                    </div>
                </div>) : null}
                <header className="p-2 pt-3 bg-sky-400 w-full flex justify-between">
                    <div className="">
                        <div className=" text-2xl">Restaurang namn</div>
                        <div className="text-sm">Ordernummer: 0111111111</div>
                    </div>
                    <div className="flex justify-center border w-8 h-8 my-auto mr-4 hover:cursor-pointer align-middle rounded-sm text-xl" onClick={() => setOpenHelp(!openHelp)}>?</div>
                </header>
                <div className="overflow-y-auto">
                    <div className="m-2 bg-sky-200 rounded-md">
                        <div className="p-3 grid grid-cols-2 gap-4">
                            <div className=" text-md font-bold mt-auto">Förslaget antal pall: </div>
                            <div className="flex font-bold justify-center text-5xl">4</div>
                            <div>Datum: 2026-06-06</div>
                            <button onClick={changeHidden} className="flex justify-between px-4">
                                <p className="text-center">Göm färdiga: </p>
                                <p> {hidden} </p>
                            </button>
                        </div>
                        <ol className="flex shadow-md gap-2 overflow-x-scroll bg-white/10">
                            <li className="inset-shadow-black px-6 py-3 hover:bg-sky-200 hover:cursor-pointer">Torrt</li>
                            <li className="inset-shadow-black px-6 py-3 hover:bg-sky-200 hover:cursor-pointer">Kylt</li>
                            <li className="inset-shadow-black px-6 py-3 hover:bg-sky-200 hover:cursor-pointer">Frys</li>
                            <li className="inset-shadow-black px-6 py-3 hover:bg-sky-200 hover:cursor-pointer">Frys</li>
                            <li className="inset-shadow-black px-6 py-3 hover:bg-sky-200 hover:cursor-pointer">Frys</li>
                            <li className="inset-shadow-black px-6 py-3 hover:bg-sky-200 hover:cursor-pointer">Frys</li>
                        </ol>
                    </div>
                    <div className="border m-2 opacity-30"></div>
                    <ol className="m-2 flex flex-col gap-1">
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md shadow-lg hover:cursor-pointer hover:bg-amber-500">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex text-green-600 font-bold">
                                <p className="">1</p>
                                <p>/</p>
                                <p className="">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex text-red-600 font-bold">
                                <p className="">2</p>
                                <p>/</p>
                                <p className="">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                        <li className="flex justify-between bg-sky-100 p-2 rounded-md">
                            <div>Objekt</div>
                            <div className="flex">
                                <p className="text-gray-400">0</p>
                                <p>/</p>
                                <p className="font-bold">1</p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default App;
