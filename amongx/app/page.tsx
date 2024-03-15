import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import image4 from "../../img/image 4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowDown,
  faCircleArrowRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

// you can get API data from a file or a database

const TwitterList = [
  {
    twit: "Holders can generate a referral code to access additional benefits. The referrer receives 25% of transaction fees from users of the link and a 20% discount off their transaction fees. Must hold 10 $UNIBOT tokens to be eligible.",
    name: "RokkieXBT",
    username: "@rokkiexbt",
    avatar: "https://lh3.googleusercontent.com/pw/AP1GczOfnId15iiBS2dvJByI8yFpzGxVaaMvWCbGgiYFQoTGWUjiI8N6cO6F6qr5Ivl5r8RK7WCw-BsjQtG6wpkG17pNjEwCYzCB8f7pEIxZ-4SuODZtFq2aPJVgsT1bpXcv0OyAfRF0mBXAFKZ0yb6DxhPa=w38-h44-s-no-gm?authuser=0",
  },
  {
    twit: "AMONGX has built a bot that combines advanced security and seamless user experience together. It has truly lowered the hurdle of users onboarding to DeFi, NFT and the whole Web3 ecosystem.",
    name: "MatThew",
    username: "@matthew",
    avatar: "https://lh3.googleusercontent.com/pw/AP1GczOfnId15iiBS2dvJByI8yFpzGxVaaMvWCbGgiYFQoTGWUjiI8N6cO6F6qr5Ivl5r8RK7WCw-BsjQtG6wpkG17pNjEwCYzCB8f7pEIxZ-4SuODZtFq2aPJVgsT1bpXcv0OyAfRF0mBXAFKZ0yb6DxhPa=w38-h44-s-no-gm?authuser=0",
  },
  {
    twit: "I'm a AMONGX user myself and I'm often impressed by the rapid product iterations the AMONGX team has been delivering and the well-thought UX design that is built into every product details. It is one of the best crypto wallets and you should definitely consider getting one.",
    name: "Oliver.L",
    username: "@oliver",
    avatar: "https://lh3.googleusercontent.com/pw/AP1GczOfnId15iiBS2dvJByI8yFpzGxVaaMvWCbGgiYFQoTGWUjiI8N6cO6F6qr5Ivl5r8RK7WCw-BsjQtG6wpkG17pNjEwCYzCB8f7pEIxZ-4SuODZtFq2aPJVgsT1bpXcv0OyAfRF0mBXAFKZ0yb6DxhPa=w38-h44-s-no-gm?authuser=0",
  },
  {
    twit: "You are good to go with a smart Telegram bot anywhere at anytime.",
    name: "LilMoonLambo",
    username: "@lilmoonlambo",
    avatar: "https://lh3.googleusercontent.com/pw/AP1GczOfnId15iiBS2dvJByI8yFpzGxVaaMvWCbGgiYFQoTGWUjiI8N6cO6F6qr5Ivl5r8RK7WCw-BsjQtG6wpkG17pNjEwCYzCB8f7pEIxZ-4SuODZtFq2aPJVgsT1bpXcv0OyAfRF0mBXAFKZ0yb6DxhPa=w38-h44-s-no-gm?authuser=0",
  },
  {
    twit: "Have been in this for awhile, but this is highest conviction on- chain play for me currentlymain problem w/ trading on-chain is terrible UX, unibot allows you to easily market buy/sell w/ 1 telegram command, set limit orders, copy trade addys, get portfolio updates in real time",
    name: "Pierre",
    username: "@pierre",
    avatar: "https://lh3.googleusercontent.com/pw/AP1GczOfnId15iiBS2dvJByI8yFpzGxVaaMvWCbGgiYFQoTGWUjiI8N6cO6F6qr5Ivl5r8RK7WCw-BsjQtG6wpkG17pNjEwCYzCB8f7pEIxZ-4SuODZtFq2aPJVgsT1bpXcv0OyAfRF0mBXAFKZ0yb6DxhPa=w38-h44-s-no-gm?authuser=0",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full lg:mt-0 mt-12 bg-center bg-auto" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/pw/AP1GczNnPDCltuZ6DbuV2fCjqIHYeEyqH825dEg0x6wpiav0zpUS3fFXfI3Rzu2XpJEw3qyhf5Z8G1yq98femmQcCA5IHOV_gn8qyI_MRdFzY_1mhtY5Uoa6nSk9ovz39o9LRtGZkAYD_8Qp7cz-3UOJOYCO=w1440-h800-s-no-gm?authuser=0)" }}>
        <Header />
        <div className="flex flex-col items-center py-12 my-10">
          <div>
            <div className="lg:text-9xl text-5xl px-10">
              <div className="text-center font-helvetica font-medium tracking-wide">AM<span className="font-tiposka">O</span>NG <span className="font-tiposka">X</span></div>
              <div className="text-center font-helvetica font-medium tracking-wide">T<span className="font-tiposka">H</span>E R<span className="font-tiposka">OA</span>D T<span className="font-tiposka">O</span> B<span className="font-tiposka">E</span> R<span className="font-tiposka">I</span>CH</div>
            </div>
            <div className="text-center lg:text-lg text-sm font-helvetica font-light tracking-wider my-5 py-5 lg:text-[#9A9FA5] px-10 text-gray-300" >Experience seamless and lightning-fast trading on the go with our free-to-use Telegram bot.</div>
          </div>

          <div className="flex lg:flex-row flex-col">
            <div className="cursor-pointer lg:mx-3 lg:mb-0 mb-5 rounded-full p-px bg-gradient-to-tr from-transparent to-gray-300/50">
              <div className="py-3 px-10 rounded-full bg-gray-800/60">Start Trading<FontAwesomeIcon className="ms-2" icon={faCircleArrowRight} /></div>
            </div>
            <button className="lg:mx-3 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 py-3 px-7">Explore Features<FontAwesomeIcon className="ms-2" icon={faCircleArrowDown} /></button>
          </div>
        </div>
      </div>

      {/* VIDEO PART  */}

      <div className="w-full relative overflow-croll">
        <button className="absolute bg-white/40 p-6 item-center rounded-full aspect-square -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-2xl"><FontAwesomeIcon className="aspect-square w-16" icon={faPlay} size="2xl" /></button>
        {/* <Image className="object-cover min-h-[400px] w-full" src={image4} alt="AmongX" /> */}
        <img className="object-cover min-h-[400px] w-full" src="https://lh3.googleusercontent.com/pw/AP1GczNdMsNbhZINeDMI45KpImSUw4oFXJkASSf7xvyjkzD-fiIkRFTrVNqbFEs-kohQlNtJzKWUM3-0VivA3bsFmBuWv0cABR1aYe6kJXUy-aWbOkuf5AB_Az-jUGJGyK1TxLY-ExxBbV7iHgANgwmzF_xG=w1440-h700-s-no-gm?authuser=0" alt="AmongX" />
      </div>

      {/* 3 CIRCLE PART  */}

      <div className="flex flex-col items-center w-full bg-no-repeat bg-center relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/pw/AP1GczPGCN968moxNNTng3QRrRRLFF0wIoZAiNwqqC9noIop4Ul5UALf3L0SMW81ztuCHgIBwLmwmwDqIFlPkaX_vzcQWT45i0SUnc0Dn2KSLslx_Rt0r0C4eDg8J_IxgD8ACcrvC0U8L0N9-rivB-wct62P=w1440-h920-s-no-gm?authuser=0')" }}>
        <img className="lg:aspect-video z-10 h-full absolute lg:static" src="https://lh3.googleusercontent.com/pw/AP1GczO0lo7yxWIAtkxGRdIbu82MhPWonPUUXPV9F5Oy3WmXt734Hb-NrOaCnQUgyqMRzUnxCO2JrR02tOhCcblLk3ZKbh85qFudVq3FSMr6_wtFLPHLa2S5n2MOp8eyB-_mK0IIOidUC7_TziOYiA_XFwyr=w930-h991-s-no-gm?authuser=0" alt="" />
        
        <div className="p-[2px] bg-gradient-to-tr from-transparent to-gray-400 lg:top-36 lg:left-80 lg:absolute lg:my-0 mt-16 backdrop-blur rounded-full">
          <div className="flex flex-col items-center bg-gray-800 lg:w-fit lg:h-fit aspect-square justify-center rounded-full lg:p-16 p-14">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczOHuWZbw1cxMfxiLdwUVI2DHh4vWaPKo2C7-3d8Yd4WRJNWpxvRn4QANGe-_T3Pa5v_rbyh-GLV5USLDFQDRjPKWXTqmobeOu7rEUVcKlpEzdFDNiPkmyOYgPEgPNR4EB_B5qfcFGzWxsjZAdllN-Mc=w92-h92-s-no-gm?authuser=0" alt="" />
            <div className="lg:text-6xl text-4xl my-2">6x Faster</div>
            <div className="font-extralight lg:text-medium text-sm">Than trading on Uniswap</div>
          </div>
        </div>

        <div className="p-[2px] bg-gradient-to-tr from-transparent to-gray-400 lg:top-36 lg:right-96 lg:absolute lg:my-0 mt-10 backdrop-blur rounded-full">
          <div className="flex flex-col items-center bg-gray-800 lg:w-fit lg:h-fit aspect-square justify-center rounded-full p-14">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczOHuWZbw1cxMfxiLdwUVI2DHh4vWaPKo2C7-3d8Yd4WRJNWpxvRn4QANGe-_T3Pa5v_rbyh-GLV5USLDFQDRjPKWXTqmobeOu7rEUVcKlpEzdFDNiPkmyOYgPEgPNR4EB_B5qfcFGzWxsjZAdllN-Mc=w92-h92-s-no-gm?authuser=0" alt="" />
            <div className="text-4xl my-2">$2,712,677</div>
            <div className="font-extralight text-sm">Revenue share distributed</div>
          </div>
        </div>

        <div className="p-[2px] bg-gradient-to-tr from-transparent to-gray-400 lg:bottom-44 lg:right-1/3 lg:absolute lg:my-0 mt-10 backdrop-blur rounded-full">
          <div className="flex flex-col items-center bg-gray-800 lg:w-fit lg:h-fit aspect-square justify-center rounded-full p-14">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczOHuWZbw1cxMfxiLdwUVI2DHh4vWaPKo2C7-3d8Yd4WRJNWpxvRn4QANGe-_T3Pa5v_rbyh-GLV5USLDFQDRjPKWXTqmobeOu7rEUVcKlpEzdFDNiPkmyOYgPEgPNR4EB_B5qfcFGzWxsjZAdllN-Mc=w92-h92-s-no-gm?authuser=0" alt="" />
            <div className="text-3xl my-2">$137,998,651</div>
            <div className="font-extralight text-sm">Total trading volume</div>
          </div>
        </div>

        {/* <div className="flex flex-col items-center w-full bg-no-repeat bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/pw/AP1GczO0lo7yxWIAtkxGRdIbu82MhPWonPUUXPV9F5Oy3WmXt734Hb-NrOaCnQUgyqMRzUnxCO2JrR02tOhCcblLk3ZKbh85qFudVq3FSMr6_wtFLPHLa2S5n2MOp8eyB-_mK0IIOidUC7_TziOYiA_XFwyr=w930-h991-s-no-gm?authuser=0')" }}>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div> */}
      </div>

      {/* TRADING PEFECTED PART */}

      <div className="w-full flex flex-col items-center mt-10">
        <div className="flex flex-col items-center lg:px-20 px-5 pb-20">
          <div className="px-5">
            <div>
              <div className="text-center text-6xl font-helvetica font-medium tracking-wide">TR<span className="font-tiposka">A</span>DING P<span className="font-tiposka">E</span>FECT<span className="font-tiposka">ED</span></div>
            </div>
            <div className="text-center lg:text-lg text-sm font-helvetica font-light tracking-wide my-5 py-5 text-[#9A9FA5]" >Our trading bot has a comprehensive suite of features designed to help you win. All free-to-use.</div>
          </div>

          <div className="cursor-pointer">
            <div className="rounded-full p-px bg-gradient-to-tr from-transparent to-gray-300/50">
              <div className="py-3 px-10 rounded-full bg-gray-800/80">Start Trading<FontAwesomeIcon className="ms-2" icon={faCircleArrowRight} /></div>
            </div>
          </div>
        </div>
        <div className="font-helvetica 2xl:w-3/4 w-full lg:w-4/5 lg:px-0 px-5 overflow-x-scroll no-scrollbar flex tracking-wide 2xl:justify-between">
          <div className="rounded-3xl p-px bg-gradient-to-b from-[#009cf773] to-gray-400/10 w-[300px] min-w-[300px] cursor-pointer 2xl:mr-0 mr-5">
            <div className="rounded-[calc(1.5rem-1px)] flex flex-col items-center bg-gradient-to-b from-[#009cf773] via-80% via-[#0B0A1A] to-[#0B0A1A] px-10 py-16">
              <img className="aspect-square w-[172px]" src="https://lh3.googleusercontent.com/pw/AP1GczOx1G-I4axxMC_wQpmuMLoL1bv4qz-znXOBjP8_qU1H-9TZEvOfYCMCh8c5b9wVVFpWEgRUvZbBTl6HLDUAnE_Ea9aAc0nmcBzSrFwuPX-tIEsYUODwoX049w7l05CyrJno-5b3wVkOwgmS9l6nXxKf=w158-h164-s-no-gm?authuser=0" alt="card1" />
              <div className="text-xl py-5">Limit Order</div>
              <div className="line-clamp-2 text-center w-full font-light text-sm">Buy low, sell high. Execute your strategy with precision</div>
            </div>
          </div>
          <div className="rounded-3xl p-px bg-gradient-to-b from-[#009cf773] to-gray-400/10 w-[300px] min-w-[300px] cursor-pointer 2xl:mr-0 mr-5">
            <div className="rounded-[calc(1.5rem-1px)] flex flex-col items-center bg-gradient-to-b from-[#009cf773] via-80% via-[#0B0A1A] to-[#0B0A1A] px-10 py-16">
              <img className="aspect-square w-[172px]" src="https://lh3.googleusercontent.com/pw/AP1GczNOXYu3VFBc8B9U-CnPL7dboIpCUHJPKWKmkcqpv_wpimVqtQwe1yub8dVgigwsMegOud1e2aaMPKOSgeX-i4gcjv6RmaLUOvfzpBim6oVz9Piis7i7FXKNZy9I7fTCJBsvw8PsGQV6O18Kt2WULhJl=w172-h166-s-no-gm?authuser=0" alt="card1" />
              <div className="text-xl py-5">Mirror Sniper</div>
              <div className="line-clamp-2 text-center w-full font-light text-sm">Trade like the pros, replicate their wins</div>
            </div>
          </div>
          <div className="rounded-3xl p-px bg-gradient-to-b from-[#009cf773] to-gray-400/10 w-[300px] min-w-[300px] cursor-pointer 2xl:mr-0 mr-5">
            <div className="rounded-[calc(1.5rem-1px)] flex flex-col items-center bg-gradient-to-b from-[#009cf773] via-80% via-[#0B0A1A] to-[#0B0A1A] px-10 py-16">
              <img className="aspect-square w-[172px]" src="https://lh3.googleusercontent.com/pw/AP1GczPHdj7XC6Sxxh5PFxQOMIprlHCIkPWrXFp2lRi4D-USjPYj7v6YSWWe8nMJOqVggKpd89bbS2XM_hD06IAn_pLj0ZDvKwfczlgN8tHVFKP1LidfixjY1UI6Kobv7R-LGRBWZY8_vkUDXfOIBizVhK3p=w172-h142-s-no-gm?authuser=0" alt="card1" />
              <div className="text-xl py-5">Fail Guard Sell</div>
              <div className="line-clamp-2 text-center w-full font-light text-sm">Test your sales ahead and maximize your selling potential</div>
            </div>
          </div>
          <div className="rounded-3xl p-px bg-gradient-to-b from-[#009cf773] to-gray-400/10 w-[300px] min-w-[300px] cursor-pointer 2xl:mr-0 mr-5">
            <div className="rounded-[calc(1.5rem-1px)] flex flex-col items-center bg-gradient-to-b from-[#009cf773] via-80% via-[#0B0A1A] to-[#0B0A1A] px-10 py-16">
              <img className="aspect-square w-[172px]" src="https://lh3.googleusercontent.com/pw/AP1GczOXLVvaYsZAjQ_qggZLgkE4D44gxZr3MU-xXh5VeMCdd3yKBNXVUFtP9ngBEWh7g07wQw4MgiS0yzRM-O6yB-XR-YNkPhkvEiLfdbQPs4dafiXhTK51KoIcLorIX0m9C3sWhw32r_r_AbRJ6A3JfyFA=w164-h165-s-no-gm?authuser=0" alt="card1" />
              <div className="text-xl py-5">Private Transactions</div>
              <div className="line-clamp-2 text-center w-full font-light text-sm">Shield your trades, outsmart sandwich attacks</div>
            </div>
          </div>
        </div>
      </div>



      <div className="w-full flex flex-col items-center mt-20">
        <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 2xl:w-3/4 w-4/5 gap-5 lg:my-16 my-8">
          <div className="lg:mr-44 flex flex-col justify-center lg:text-start lg:items-start text-center items-center">
            <div className="mb-10">
              <div className="font-helvetica lg:text-6xl text-5xl">D<span className="font-tiposka">I</span>SC<span className="font-tiposka">OVE</span>R</div>
              <div className="font-helvetica lg:text-6xl text-5xl">N<span className="font-tiposka">E</span>W T<span className="font-tiposka">OK</span>EN<span className="font-tiposka">S</span></div>
              <div className="font-helvetica mt-3 font-light lg:text-lg text-sm lg:text-[#9A9FA5] text-gray-300">Get alerts on newly created tokens on Ethereum in real-time with our scanner. Integrated with our bot, you can easily add tokens and snipe them with the click of a button</div>
            </div>
            <div className="cursor-pointer rounded-full w-fit p-px bg-gradient-to-tr from-transparent to-gray-300/50 lg:mb-0 mb-5">
              <div className="py-3 px-6 rounded-full bg-gray-800/80">Access Scanner<FontAwesomeIcon className="ms-2" icon={faCircleArrowRight} /></div>
            </div>
          </div>
          <div className="rounded-3xl p-px bg-gradient-to-tr from-transparent to-gray-300/30 w-full h-fit">
            <img className="rounded-[calc(1.5rem-1px)] w-full" src="https://lh3.googleusercontent.com/pw/AP1GczPq3prIQwDHhxNqnUiyQD5FNZL0PE-5_HXLKxRY8zRfICjzKhmrZa-jSwH1c4AUtz7DOkBkpnmZOWxuq6vE-uO_xpqS6Q8OIiJRstbCueFUm7ynTBfJ05CkuaNmD2S0hDiz9Xq5pPLa0vRaW0WEROIi=w646-h484-s-no-gm?authuser=0" alt="" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 2xl:w-3/4 w-4/5 gap-5 lg:my-16 my-8">
          <div className="lg:ml-44 lg:hidden flex flex-col justify-center lg:text-start lg:items-start text-center items-center">
            <div className="mb-10">
              <div className="font-helvetica lg:text-6xl text-5xl">R<span className="font-tiposka">EV</span>EN<span className="font-tiposka">U</span>E S<span className="font-tiposka">H</span>AR<span className="font-tiposka">E</span></div>
              <div className="font-helvetica mt-3 font-light lg:text-lg text-sm lg:text-[#9A9FA5] text-gray-300">Rewards are proportional to the amount of tokens held. Holders receive 40% of transaction fees and 1% of total $UNIBOT traded volume. Rewards are calculated in 2-hour intervals and claimable after 24 hours. Transferring more than 200 tokens between every 2-hour interval will result in forfeit of your revenue share. Must hold 50 $UNIBOT tokens to be eligible.</div>
            </div>
            <div className="cursor-pointer rounded-full w-fit p-px bg-gradient-to-tr from-transparent to-gray-300/50 lg:mb-0 mb-5">
              <div className="py-3 px-6 rounded-full bg-gray-800/80">Claim Rewards<FontAwesomeIcon className="ms-2" icon={faCircleArrowRight} /></div>
            </div>
          </div>
          <div className="rounded-3xl p-px bg-gradient-to-tr from-transparent to-gray-300/30 w-full h-fit">
            <img className="rounded-[calc(1.5rem-1px)] w-full" src="https://lh3.googleusercontent.com/pw/AP1GczNYnqprybShG0FanbLCwLvkpO2ghK8sAJKe7xMup0-FclGFEzI2TKT_GBsNjc0AvZgz4d6-ZYESYnPWBdKCErP4w6QpJfTQwA0BuzrEm7s40MTkOVK1-epyq_NfQ66ysgRoq-9YD-q7ixEf2NmbcX1v=w646-h484-s-no-gm?authuser=0" alt="" />
          </div>
          <div className="lg:ml-44 lg:flex hidden flex-col justify-center lg:text-start lg:items-start text-center items-center">
            <div className="mb-10">
              <div className="font-helvetica lg:text-6xl text-5xl">R<span className="font-tiposka">EV</span>EN<span className="font-tiposka">U</span>E S<span className="font-tiposka">H</span>AR<span className="font-tiposka">E</span></div>
              <div className="font-helvetica mt-3 font-light lg:text-lg text-sm lg:text-[#9A9FA5] text-gray-300">Rewards are proportional to the amount of tokens held. Holders receive 40% of transaction fees and 1% of total $UNIBOT traded volume. Rewards are calculated in 2-hour intervals and claimable after 24 hours. Transferring more than 200 tokens between every 2-hour interval will result in forfeit of your revenue share. Must hold 50 $UNIBOT tokens to be eligible.</div>
            </div>
            <div className="cursor-pointer rounded-full w-fit p-px bg-gradient-to-tr from-transparent to-gray-300/50 lg:mb-0 mb-5">
              <div className="py-3 px-6 rounded-full bg-gray-800/80">Claim Rewards<FontAwesomeIcon className="ms-2" icon={faCircleArrowRight} /></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 2xl:w-3/4 w-4/5 gap-5 lg:my-16 my-8">
          <div className="lg:mr-44 flex flex-col justify-center lg:text-start lg:items-start text-center items-center">
            <div className="mb-10">
              <div className="font-helvetica lg:text-6xl text-5xl">R<span className="font-tiposka">EF</span>ERR<span className="font-tiposka">A</span>L P<span className="font-tiposka">RO</span>GR<span className="font-tiposka">AM</span></div>
              <div className="font-helvetica mt-3 font-light lg:text-lg text-sm lg:text-[#9A9FA5] text-gray-300">Holders can generate a referral code to access additional benefits. The referrer receives 25% of transaction fees from users of the link and a 20% discount off their transaction fees. Must hold 10 $UNIBOT tokens to be eligible.</div>
            </div>
            <div className="cursor-pointer rounded-full w-fit p-px bg-gradient-to-tr from-transparent to-gray-300/50 lg:mb-0 mb-5">
              <div className="py-3 px-6 rounded-full bg-gray-800/80">Create Referral Link<FontAwesomeIcon className="ms-2" icon={faCircleArrowRight} /></div>
            </div>
          </div>
          <div className="rounded-3xl p-px bg-gradient-to-tr from-transparent to-gray-300/30 w-full h-fit">
            <img className="rounded-[calc(1.5rem-1px)] w-full" src="https://lh3.googleusercontent.com/pw/AP1GczPq3prIQwDHhxNqnUiyQD5FNZL0PE-5_HXLKxRY8zRfICjzKhmrZa-jSwH1c4AUtz7DOkBkpnmZOWxuq6vE-uO_xpqS6Q8OIiJRstbCueFUm7ynTBfJ05CkuaNmD2S0hDiz9Xq5pPLa0vRaW0WEROIi=w646-h484-s-no-gm?authuser=0" alt="" />
          </div>
        </div>
      </div>

      {/* TWITTER THINK PART  */}
      <div className="w-full flex flex-col items-center mt-20">
        <div className="flex flex-col items-center px-5 pb-20">
          <div>
            <div>
              <div className="text-center lg:text-6xl text-5xl font-helvetica font-medium tracking-wide">W<span className="font-tiposka">HA</span>T C<span className="font-tiposka">RY</span>PT<span className="font-tiposka">O</span> T<span className="font-tiposka">W</span>ITT<span className="font-tiposka">ER</span> T<span className="font-tiposka">H</span>IN<span className="font-tiposka">KS</span></div>
            </div>
            <div className="text-center lg:text-lg text-sm lg:px-0 px-3 font-helvetica font-light tracking-wide my-5 py-5 text-[#9A9FA5]" >Join our community of +3,500 members on our Telegram and +2,000 token holders generating yield on their $AMONGXVBOT</div>
          </div>

          <div className="cursor-pointer">
            <div className="rounded-full p-px bg-gradient-to-tr from-transparent to-gray-300/50">
              <div className="py-3 px-10 rounded-full bg-gray-800/80">Join Community<FontAwesomeIcon className="ms-2" icon={faCircleArrowRight} /></div>
            </div>
          </div>
        </div>
        <div className="font-helvetica overflow-x-scroll no-scrollbar w-full flex tracking-wide 2xl:justify-between snap-x">
          {TwitterList.map((index) => (
            <div className="rounded-3xl snap-center bg-white lg:w-[30rem] lg:min-w-[30rem] w-[18rem] min-w-[18rem] aspect-square cursor-pointer lg:mx-5 p-8 ml-5 flex flex-col justify-between">
              <div className="text-black lg:text-2xl  text-sm tracking-wide">
                {index.twit}
              </div>
              <div className="flex lg:my-8">
                <div className="bg-[#BDCCFF] rounded-full h-12 aspect-square flex justify-center items-center ">
                  <img className="rounded-full h-full" src={index.avatar} alt="" />
                </div>
                <div className="ms-5">
                  <div className="text-black font-bold text-lg">{index.name}</div>
                  <div className="text-black">{index.username}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   By{" "}
    //   <Image src="https://lh3.googleusercontent.com/pw/AP1GczORm0DKMhenwVRt1G4Ddf0yj51NogwzmJXGCh4q2xy1owtMbf24Fscivx_XyGAzlns1yTrlWO88Niuq0jA96BajAKA7iLbGmgxjWycoRaGKV2DXv9I0Sj2yInR3kl7CsCnla2IiAEtlDbyHuu2U0NsR=w33-h44-s-no-gm?authuser=0"
    //     alt="Vercel Logo"
    //     className="dark:invert"
    //     width={100}
    //     height={24}
    //     priority
    //   />
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
