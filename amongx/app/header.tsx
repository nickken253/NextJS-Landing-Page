"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
    faBars,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [isActiveNav, setActiveNav] = useState(true);
    const changeActiveNav = () => {

        setActiveNav(!isActiveNav);
    }
    return (
        <div className="relative w-5/6">
            <div className="lg:flex w-full items-center justify-between my-5 lg:visible hidden">
                <div>
                    <a href="" className="flex items-center">
                        <img className="pr-2 h-16" src="https://lh3.googleusercontent.com/pw/AP1GczORm0DKMhenwVRt1G4Ddf0yj51NogwzmJXGCh4q2xy1owtMbf24Fscivx_XyGAzlns1yTrlWO88Niuq0jA96BajAKA7iLbGmgxjWycoRaGKV2DXv9I0Sj2yInR3kl7CsCnla2IiAEtlDbyHuu2U0NsR=w33-h44-s-no-gm?authuser=0" alt="AmongX Logo" />
                        <p className="text-2xl font-helvetica">AMONGX</p>
                    </a>
                </div>
                <div className="text-xl">
                    <button className="xl:mx-3 p-3">Tutorials</button>
                    <button className="xl:mx-3 p-3">Twitter</button>
                    <button className="xl:mx-3 p-3">Telegram</button>
                    <button className="xl:mx-3 mx-1 py-2 px-6 rounded-full bg-gray-800">Start Trading</button>
                    <button className="xl:mx-3 mx-1 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 py-2 px-6">Buy $AMONGX</button>
                </div>
            </div>
            {isActiveNav &&
                <div className="fixed flex bg-[#0B0A1A] top-0 left-0 w-screen h-screen lg:hidden flex-col py-4 origin-top z-50">
                    <div className="w-full h-fit flex justify-between pl-5 pr-8 pb-5 border-blue-200 shadow-sm shadow-gray-300/50">
                        <div>
                            <a href="" className="flex items-center">
                                <img className="pr-2 h-12" src="https://lh3.googleusercontent.com/pw/AP1GczORm0DKMhenwVRt1G4Ddf0yj51NogwzmJXGCh4q2xy1owtMbf24Fscivx_XyGAzlns1yTrlWO88Niuq0jA96BajAKA7iLbGmgxjWycoRaGKV2DXv9I0Sj2yInR3kl7CsCnla2IiAEtlDbyHuu2U0NsR=w33-h44-s-no-gm?authuser=0" alt="AmongX Logo" />
                                <p className="text-2xl font-helvetica">AMONGX</p>
                            </a>
                        </div>
                        <div className="flex justify-center items-center" onClick={changeActiveNav}><FontAwesomeIcon icon={faXmark} size="2xl" /></div>
                    </div>
                    <div className="flex flex-col justify-between h-full">
                        <div className="divide-y divide-gray-400/20 font-helvetica">
                            <div className="mx-5 py-8 text-2xl">Tutorials</div>
                            <div className="mx-5 py-8 text-2xl">Twitter</div>
                            <div className="mx-5 py-8 text-2xl">Telegram</div>
                        </div>
                        <div className="flex flex-col mx-10">
                            <button className="xl:mx-3 mx-1 py-4 px-6 rounded-full bg-gray-800 text-lg">Start Trading</button>
                            <button className="xl:mx-3 mx-1 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 py-4 px-6 mt-5 text-lg">Buy $AMONGX</button>
                        </div>
                    </div>
                </div>}
            <div className="fixed bg-[#0B0A1A] top-0 left-0 w-full lg:hidden flex py-4 origin-top z-40 border-blue-200 shadow-sm shadow-gray-300/50">
                <div className="w-full flex justify-between pl-5 pr-8">
                    <div>
                        <a href="" className="flex items-center">
                            <img className="pr-2 h-12" src="https://lh3.googleusercontent.com/pw/AP1GczORm0DKMhenwVRt1G4Ddf0yj51NogwzmJXGCh4q2xy1owtMbf24Fscivx_XyGAzlns1yTrlWO88Niuq0jA96BajAKA7iLbGmgxjWycoRaGKV2DXv9I0Sj2yInR3kl7CsCnla2IiAEtlDbyHuu2U0NsR=w33-h44-s-no-gm?authuser=0" alt="AmongX Logo" />
                            <p className="text-2xl font-helvetica">AMONGX</p>
                        </a>
                    </div>
                    <div className="flex justify-center items-center" onClick={changeActiveNav}><FontAwesomeIcon icon={faBars} size="2xl" /></div>
                </div>
            </div>
        </div>
    );
}