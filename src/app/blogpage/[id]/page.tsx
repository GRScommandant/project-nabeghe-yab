import blogsRawData from "../../../form/blogs.json"
import react from "react";
import {Separator} from "@/components/ui/separator";

interface blog {
    name: string;
    category: string;
    description: string;
    image: string;
    publish_time:string;

}

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ id: string }>
}) {
    const {id} = await params
    const blogList: blog = blogsRawData[id];
    const BlogImage = `../../${blogList.image}`;
    return (
        <>
            <div className="flex flex-col items-center justify-center w-[100%] h-full mt-20">
                <div className="flex flex-col items-center justify-center w-[80%] h-full">
                    <div className="flex flex-col items-center justify-center w-[80%] h-[20%]">
                        <img src={BlogImage} alt={blogList.name} className="w-[900px] h-[500px] object-cover"/>
                    </div>
                    <div className="flex flex-row items-start w-[60%] mt-20 gap-5">
                        <p className="text-[30px] leading-[48px]">{blogList.name}</p>
                        <p className="text-[12px] leading-[48px] text-gray-400">  تاریخ انتشار:{blogList.publish_time}</p>

                    </div>

                    <div className="flex flex-col items-center justify-center w-[60%] mt-0">
                        <Separator/>
                        <p className="text-[18px] leading-[48px]">{blogList.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}