import React, { useState } from "react";

function App() {
    const [hidden, setHidden] = useState("Av");

    const changeHidden = () => {
        if (hidden == "Av") {
            setHidden("På");
        } else {
            setHidden("Av");
        }
    };

    return (
        <div className="bg-white flex flex-col h-screen">
            <header className="p-2 pt-3 bg-sky-400 w-full">
                <div className=" text-2xl">Restaurang namn</div>
                <div className="text-sm">Ordernummer: 0111111111</div>
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
    );
}

export default App;
