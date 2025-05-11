"use client"
import {BoxReveal} from "@/components/magicui/box-reveal";
import {Particles} from "@/components/magicui/particles";
import {AnimatedGridPattern} from "@/components/magicui/animated-grid-pattern";
import {TextAnimate} from "@/components/magicui/text-animate"
import {DotPattern} from "@/components/magicui/dot-pattern";
import {Button} from "@/components/ui/button";
import Link from "next/link"
import {cn} from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Homepage() {
    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }, [resolvedTheme]);
    return (
        <>
        <div className="flex flex-col items-center justify-center w-[100%] h-[850px] z-1 relative">
            <Particles className="w-[100%] h-[100%]" />
            <div className="absolute flex flex-col items-center justify-center mr-[60px] w-[700px]">
                <BoxReveal >
                    <h1 className='text-[100px] font-bold py-2'>نابغه یاب</h1>
                </BoxReveal>
                <br/>
                <BoxReveal>
                    <span className="mr-[5px] text-2xl">می خوای رشته انتخاب کنی ولی نمی دونی چی انتخاب کنی</span> <span className="text-purple-500 text-4xl">.</span>
                </BoxReveal>
                <BoxReveal>
                    <span className="mr-[5px] text-1xl font-bold ">برای دونستن رشته ی خودتون از سایت ما دیدن کنید</span> <span className="text-purple-500 text-4xl">.</span>
                </BoxReveal>
                <br/>
            </div>
        </div>
        <div className="flex flex-col items-start justify-center w-[100%] h-[920px] z-1 relative sticky">
            <AnimatedGridPattern maxOpacity={0.1} numSquares={100} className={cn(['opacity-1 border-black-500'])}/>
            <div className="absolute flex flex-col items-start justify-center mr-[60px] w-[700px] gap-2.5">
                <TextAnimate animation="blurInUp" by="word" once className="text-5xl font-bold text-gap-2.5">
                    آزمون بده و رشته ی مورد علاقتو پیدا کن
                </TextAnimate>
                <br/>
                <TextAnimate animation="blurInUp" by="word" once className="text-2xl">
                    با شرکت در آزمون ها رشته ی خودتو پیدا کن
                </TextAnimate>
            </div>
        </div>
            <div className="flex flex-col items-center justify-center w-[100%] h-[920px] z-1 relative sticky">
                <DotPattern className={cn("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)])")}/>
                <div className="absolute flex flex-col items-center justify-center mr-[60px] w-[700px]">
                    <TextAnimate animation="fadeIn" by="word" once className="text-5xl font-bold mb-[60px]">
                        مارا در فضای مجازی دنبال کنید
                    </TextAnimate>
                    <div className="flex flex-row-reverse items-center justify-center gap-5">

                        <Button variant="socialT" className="w-[150px] rounded-3xl fa-telegram-plane">
                            <i className="fab fa-telegram-plane"></i>
                            Telegram
                        </Button>
                        <Button variant="socialW" className="w-[150px] rounded-3xl fa-telegram-plane">
                            <i className="fab fa-whatsapp"></i>
                            whatsapp
                        </Button>
                        <Button variant="socialI" className="w-[150px] rounded-3xl fa-telegram-plane">
                            <i className="fab fa-instagram"></i>
                            Instagram
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}