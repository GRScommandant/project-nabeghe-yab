import BlogBuilder from "@/components/blogshowcase/blogbuilder";
import Searchfilters from "@/components/filterss/searchfilters";
import {Separator} from "@/components/ui/separator";

export default function Shop() {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col items-end w-[85%] ">
                    <BlogBuilder/>
                </div>
                </div>
        </>
    );
}
