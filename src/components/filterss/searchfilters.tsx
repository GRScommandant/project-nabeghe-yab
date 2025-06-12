"use client"
import {useSearchParams, useRouter} from 'next/navigation'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";
import blogs from '../../form/blogs.json'
import React from "react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,} from "@/components/ui/command"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {ChevronsUpDown, Check} from "lucide-react";

interface blog {
    name: string,
    category: string,
    description: string,
    image: string,
}

const SearchFilters: React.FC = () => {
    const searchfilters: blog [] = blogs
    const router = useRouter()
    const searchParams = useSearchParams()

    const Uniquecatagory = Array.from(new Set(searchfilters.map(blog => blog.category)))
    const [open, setOpen] = React.useState(false)

    // Get category from URL search params
    const currentCategory = searchParams.get('category') || ""

    const createQueryString = (category: string) => {
        const params = new URLSearchParams(searchParams)
        if (category) {
            params.set('category', category)
        } else {
            params.delete('category')
        }
        return params.toString()
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] justify-between"
                        >
                            {currentCategory || "دسته بندی"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="جستوجو..."/>
                            <CommandList>
                                <CommandEmpty>یافت نشد</CommandEmpty>
                                <CommandGroup>
                                    {Uniquecatagory.map((category) => (
                                        <CommandItem
                                            key={category}
                                            value={category}
                                            onSelect={(currentValue) => {
                                                const newValue = currentValue === currentCategory ? "" : currentValue
                                                router.push(`?${createQueryString(newValue)}`)
                                                setOpen(false)
                                            }}
                                        >
                                            <Check
                                                className={`mr-2 h-4 w-4 ${currentCategory === category ? "opacity-100" : "opacity-0"}`}
                                            />
                                            {category}
                                        </CommandItem>
                                    ))
                                    }
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </>
    )
}
export default SearchFilters
