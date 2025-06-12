"use client"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import blogsRawData from '../../form/blogs.json';
import React, {useState} from "react";
import SearchBar from "@/components/search/searchbar";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {useSearchParams} from "next/navigation";
import Searchfilters from "@/components/filterss/searchfilters";
import siteConfig from "@/config";
import Link from "next/link";

interface blog {
    id : number;
    name: string;
    category: string;
    description: string;
    image: string;
    publish_time:string;

}

const ProductList: React.FC = () => {
    const searchParams = useSearchParams()
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filteredBlogs, setFilteredBlogs] = useState<blog[]>(blogsRawData);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 9;
    console.log([...searchParams])
    const params: [keyof blog, blog[keyof blog]][] = [...searchParams]
    const blogList: blog [] = blogsRawData

    const handleSearch = () => {
        const results = blogList.filter(blog =>
            blog.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBlogs(results);
        setCurrentPage(1);
    };

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentBlogs = filteredBlogs.filter(b => params.every(([k, v]) => b[k] == v)).slice(indexOfFirstProduct, indexOfLastProduct);
    const truncateText = (text: string, wordLimit: number) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join('  ') + '...';
        }
        return text;
    };

    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

    return (
        <>
            <div className="flex flex-col items-center justify-center w-[100%] m-0">
                <div className="flex flex-col items-center justify-center w-full m-0">
                    <div className="w-[70%] mt-5 flex flex-row-reverse items-center justify-center">
                        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch}/>
                        <Searchfilters/>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full max-w-7xl">
                        {currentBlogs.map((blog, index) => (
                            <Card className="flex flex-col h-[400px] w-full rounded-3xl" key={index}>
                                <CardHeader className="flex flex-col items-center justify-center w-full h-[50%] py-0 p-0 m-0">
                                    <img
                                        src={blog.image}
                                        alt={blog.name}
                                        className="w-full h-full object-cover"
                                    />
                                </CardHeader>
                                <CardContent className="flex flex-col flex-1 p-4">
                                    <a className="sm:text-1xl lg:text-2xl">{blog.name}</a>
                                    <br/>
                                    <p className="text-gray-400 text-sm">{truncateText(blog.description, 13)}</p>
                                    <br/>
                                    <div className="mt-auto">

                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col items-start">
                                    <Link href={siteConfig.ROUTE.news_detail.href.replace(":id" , index + indexOfFirstProduct)}> <Button variant={"socialT"}>مشاهده جزئیات</Button></Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1} // Disable if on the first page
                            />
                        </PaginationItem>
                        {Array.from({length: totalPages}, (_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    href="#"
                                    onClick={() => setCurrentPage(index + 1)}
                                    active={currentPage === index + 1} // Highlight the active page
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>

                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages} // Disable if on the last page
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </>
    );
};

export default ProductList;
