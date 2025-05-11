import Testshowcase from "@/components/testshowcase/testshow";
import {Particles} from "@/components/magicui/particles";

export default function test() {
    return(
    <>

        <div className="flex flex-col items-center justify-center w-[100%] h-[850px] z-1 relative">
            <Particles className="w-[100%] h-[100%]"/>
            <div className=" absolute flex flex-col items-center justify-center mr-[60px] w-[700px]">
                <Testshowcase/>
            </div>
        </div>

    </>
    )
}