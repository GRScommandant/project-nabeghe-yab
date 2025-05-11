"use client"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blogs from '../../form/blogs.json';
import React, { useState } from "react";
import SearchBar from "@/components/search/searchbar";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface blog {
    name: string;
    category: string;
    description: string;
    image: string;
}

const ProductList: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filteredBlogs, setFilteredBlogs] = useState<blog[]>(blogs);
    const [currentPage, setCurrentPage] = useState<number>(1); // State for current page
    const itemsPerPage = 5; // Number of items per page

    const blogList: blog [] = blogs;

    const handleSearch = () => {
        const results = blogList.filter(blog =>
            blog.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBlogs(results);
        setCurrentPage(1); // Reset to the first page when searching
    };

    // Calculate the products to display based on the current page
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate total pages
    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full m-0">
                <div className="w-[80%] ml-[80px] mt-5">
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
                </div>
                <div className="flex flex-col items-start pr-4 pl-4 pt-4 m-0 gap-2.5 w-[100%] ">
                    {currentBlogs.map((blog, index) => (
                        <Card className="flex flex-row w-[100%]" key={index}>
                            <CardHeader className="flex flex-row items-center justify-center w-[300px]">
                                <img
                                    src={blog.image}
                                    alt={blog.name}
                                    className="flex flex-col items-center justify-center w-[400px] h-[280px]"
                                />
                            </CardHeader>
                            <CardContent className="flex flex-col items-stretch justify-center gap-2.5 w-[300px]">
                                <a className="text-4xl">{blog.name}</a>
                                <br />
                                <p className="flex flex-col items-start text-gray-400 text-[13px]">{blog.description}</p>
                                <br />
                                <Button variant={"socialT"}>بیشتر بخوانید +</Button>
                            </CardContent>
                            <CardFooter className="flex flex-col items-start">

                            </CardFooter>
                        </Card>
                    ))}
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
                        {Array.from({ length: totalPages }, (_, index) => (
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
