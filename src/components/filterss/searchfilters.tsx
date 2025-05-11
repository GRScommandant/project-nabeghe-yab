import {Accordion , AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";
import blogs from '../../form/blogs.json'
import React from "react";

interface blog {
    name : string,
    category : string,
    description: string,
    image: string,
}
const SearchFilters : React.FC = () => {
     const searchfilters : blog [] = blogs
   // const UniqueBrands = Array.from(new Set (searchfilters.map(blog => blog.brand)))
    const Uniquecatagory = Array.from(new Set (searchfilters.map(blog => blog.category)))
    return (
        <>
            <Accordion type="single" collapsible className=" flex flex-col items-start w-[100%]">
       {/*
            <AccordionItem value="item1" className=" flex flex-col items-center justify-center w-[100%]">
                <AccordionTrigger>برند ها</AccordionTrigger>
                    <AccordionContent>
                        <ScrollArea className="h-full w-[240px] rounded-md border p-2">{UniqueBrands.map((brand , index)=>(
                                <>
                                    <div key={index} className="flex flex-row-reverse items-end w-[100%] gap-1.5 pb-1">
                                        <Checkbox id={`brand${index}`}/>
                                        <Label htmlFor={`brand${index}`}>{brand}</Label>
                                    </div>
                                    <Separator className="my-2 mx-0"/>
                                </>
                            ))}
                        </ScrollArea>
                    </AccordionContent>
            </AccordionItem>*/}
            <AccordionItem value="item2"className=" flex flex-col items-center justify-center w-[100%]">
                <AccordionTrigger>دسته بندی ها</AccordionTrigger>
                    <AccordionContent>
                        <ScrollArea className="h-full w-[240px] rounded-md border p-2">{Uniquecatagory.map((catagory , index)=>(
                                <>
                                <div key={index} className="flex flex-row-reverse items-start w-[100%] gap-1.5 pb-1" >
                                    <Checkbox id={`brand${index}`}/>
                                    <Label htmlFor={`brand${index}`}>{catagory}</Label>
                                </div>
                                <Separator className="my-2 mx-0"/>
                                </>
                            ))}
                        </ScrollArea>
                    </AccordionContent>
            </AccordionItem>
        </Accordion>



        </>

    )
}
export default SearchFilters