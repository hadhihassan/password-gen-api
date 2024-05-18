import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { TrashIcon } from "@radix-ui/react-icons"

export default function HistoryPassowrd() {
    return (
        <Card className="w-[500px] bg-black text-slate-300">
            <CardHeader>
                <CardTitle className="text-slate-100">History</CardTitle>
                <CardDescription className="flex items-end justify-end">
                    <Button size={"sm"} className="text-xs" variant={"destructive"}>Delete all</Button>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col bg-slate-950 rounded p-2">
                        <div className="flex justify-between  p-2 ">
                            <div>
                                <p className="font-sans font-semibold text-sm">SDKFGB#NDVd3723</p>
                                <p className="flex text-xs mt-1 mb-1">password strength - <p className="font-sans text-green-600 text-xs"> Strong</p></p>
                                <p className="text-xs text-gray-500">Time - 4:00 pm </p>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <button>
                                    <svg className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                    </svg>
                                </button>
                                <button>
                                    <TrashIcon   color="red" className="size-5"/>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between  mb-2 p-2">
                            <div>
                                <p className="font-sans font-semibold text-sm">SDKFGB#NDVd3723</p>
                                <p className="flex text-xs mt-1 mb-1">password strength - <p className="font-sans text-green-600 text-xs"> Strong</p></p>
                                <p className="text-xs text-gray-500">Time - 4:00 pm </p>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <button>
                                    <svg className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                    </svg>
                                </button>
                                <button>
                                    <TrashIcon color="red" className="size-5"/>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between  mb-2 p-2">
                            <div>
                                <p className="font-sans font-semibold text-sm">SDKFGB#NDVd3723</p>
                                <p className="flex text-xs mt-1 mb-1">password strength - <p className="font-sans text-green-600 text-xs"> Strong</p></p>
                                <p className="text-xs text-gray-500">Time - 4:00 pm </p>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <button>
                                    <svg className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                    </svg>
                                </button>
                                <button>
                                    <TrashIcon color="red" className="size-5"/>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between  mb-2 p-2">
                            <div>
                                <p className="font-sans font-semibold text-sm">SDKFGB#NDVd3723</p>
                                <p className="flex text-xs mt-1 mb-1">password strength - <p className="font-sans text-green-600 text-xs"> Strong</p></p>
                                <p className="text-xs text-gray-500">Time - 4:00 pm </p>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <button>
                                    <svg className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                    </svg>
                                </button>
                                <button>
                                    <TrashIcon color="red" className="size-5"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className="w-full">Generate password</Button>
            </CardFooter>
        </Card>
    )
}
