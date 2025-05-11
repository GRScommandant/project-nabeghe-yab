"use client"
import {
    Table,TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import {Button} from "@/components/ui/button";


const tests = [
    {
        name:'آزمون شخصیتی 1' ,
        status : true
    },
    {
        name:'آزمون شخصیتی 2' ,
        status : true
    },
    {
        name:'آزمون شخصیتی 3' ,
        status : false
    },{
        name:'آزمون شخصیتی 4' ,
        status : false
    },
]

export default function Testshowcase() {
    const getbutton = (status : boolean) => {
        return status ?
            "hidden" : ""
    }
    return (

        <div className="flex flex-col items-center justify-center w-[700px]">
            <p className="py-10 text-6xl font-extrabold">آزمون ها</p>
            <Table className="min-w-full border border-gray-300 rounded-lg ">
                <TableBody>
                {tests.map((test , index)=>(
                    <>
                        <TableRow key={index}>
                            <TableCell className="font-bold text-[15px]">{test.name}</TableCell>
                            <TableCell>{test.status ? (
                                <span className="text-green-500">✓ انجام شده</span>
                            ) : (

                                <span className="text-red-500">✖ انجام نشده</span>

                            )}</TableCell>
                            <TableCell>
                                <Button variant="testT" className={getbutton(test.status)}    >شرکت در آزمون</Button>
                            </TableCell>
                        </TableRow>
                    </>
                ))}
                </TableBody>
            </Table>
        </div>

    )



}
