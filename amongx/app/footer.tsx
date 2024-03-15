import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <main className="flex flex-col items-center justify-between w-full my-5">
            <div className="w-full bg-gradient-to-r from-transparent via-white/50 to-transparent max-h-[0.1rem] my-10">&nbsp;</div>
            <div className="flex flex-col lg:flex-row w-5/6 justify-between font-helvetica items-center lg:items-start">
                <div className="flex flex-col justify-between ">
                    <div>
                        <a href="" className="flex items-center">
                            <img className="pr-2 h-16" src="https://lh3.googleusercontent.com/pw/AP1GczORm0DKMhenwVRt1G4Ddf0yj51NogwzmJXGCh4q2xy1owtMbf24Fscivx_XyGAzlns1yTrlWO88Niuq0jA96BajAKA7iLbGmgxjWycoRaGKV2DXv9I0Sj2yInR3kl7CsCnla2IiAEtlDbyHuu2U0NsR=w33-h44-s-no-gm?authuser=0" alt="AmongX Logo" />
                            <p className="text-3xl font-medium">AMONGX</p>
                        </a>
                    </div>
                    <div className="font-light text-sm text-[#9A9FA5] mt-5">© 2023 AmongX. All rights reserved.</div>
                </div>
                <div className="flex mt-10 lg:mt-0">
                    <div className="lg:flex items-start mr-10 lg:visible hidden">
                        <button className="p-3 border-[#9A9FA5] border-solid border-2 rounded-full mr-3 aspect-square"><FontAwesomeIcon className="w-8 text-[#9A9FA5] item-center text-lg" icon={faFacebookF} size="xl" /></button>
                        <button className="p-3 border-[#9A9FA5] border-solid border-2 rounded-full mr-3 aspect-square"><FontAwesomeIcon className="w-8 text-[#9A9FA5] item-center text-lg" icon={faPaperPlane} size="xl" /></button>
                        <button className="p-3 border-[#9A9FA5] border-solid border-2 rounded-full mr-3 aspect-square"><FontAwesomeIcon className="w-8 text-[#9A9FA5] item-center text-lg" icon={faXTwitter} size="xl" /></button>
                        <button className="p-3 border-[#9A9FA5] border-solid border-2 rounded-full mr-3 aspect-square"><FontAwesomeIcon className="w-8 text-[#9A9FA5] item-center text-lg" icon={faEnvelope} size="xl" /></button>
                    </div>
                    <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-2 grid-cols-2 cursor-pointer gap-5">
                        <div className="">
                            <div className="mb-3 font-medium text-lg">Links</div>
                            <ul className="font-light text-[#9A9FA5]">
                                <li className="mb-2">Telegram Bot</li>
                                <li className="mb-2">Scanner Channel</li>
                                <li className="mb-2">Buy &AMONGX</li>
                                <li className="mb-2">Revenue Sharing</li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="mb-3 font-medium text-lg">Resources</div>
                            <ul className="font-light text-[#9A9FA5]">
                                <li className="mb-2">Docs</li>
                                <li className="mb-2">Token Chart</li>
                                <li className="mb-2">Migration Paper</li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="mb-3 font-medium text-lg">Cookies</div>
                            <ul className="font-light text-[#9A9FA5]">
                                <li className="mb-2">Legal Notice</li>
                                <li className="mb-2">Terms & Conditions</li>
                                <li className="mb-2">Data Protection Policy</li>
                            </ul>
                        </div>
                        <div className="grid items-start visible lg:hidden grid-cols-2 grid-rows-2 gap-4">
                            <button className="p-3 border-[#9A9FA5] border-solid border-2 rounded-full aspect-square"><FontAwesomeIcon className="w-8 text-[#9A9FA5] item-center text-lg" icon={faFacebookF} size="xl" /></button>
                            <button className="p-3 border-[#9A9FA5] border-solid border-2 rounded-full aspect-square"><FontAwesomeIcon className="w-8 text-[#9A9FA5] item-center text-lg" icon={faPaperPlane} size="xl" /></button>
                            <button className="p-3 border-[#9A9FA5] border-solid border-2 rounded-full aspect-square"><FontAwesomeIcon className="w-8 text-[#9A9FA5] item-center text-lg" icon={faXTwitter} size="xl" /></button>
                            <button className="p-3 border-[#9A9FA5] border-solid border-2 rounded-full aspect-square"><FontAwesomeIcon className="w-8 text-[#9A9FA5] item-center text-lg" icon={faEnvelope} size="xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}