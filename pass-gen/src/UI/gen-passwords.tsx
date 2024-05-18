import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { PasswordProperty } from "@/interfaces/interface"
import { createPassWord } from "@/service/userApi"




export default function Genpassword() {
    const [passProperty, setProperty] = useState<PasswordProperty>({
        length: 6,
        number: true,
        symbol: true,
        lowerCase: true,
        upperCase: true,
    })

    const [generatedPassword, setGeneratedPassword] = useState<string>("")

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.currentTarget as HTMLInputElement;
        setProperty(prevState => ({
            ...prevState,
            [target.name]: !prevState[target.name]
        }));
    }

    const handleChangeLength = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10);
        setProperty(prevState => ({
            ...prevState,
            length: isNaN(newValue) ? prevState.length : newValue,
        }));
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedPassword)
        // .then(() => )
        // .catch(error => );
    };

    const handleGeneratePassword = () => {
        createPassWord(passProperty)
            .then((res: string) => {
                setGeneratedPassword(res)
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <Card className="w-[350px] bg-black text-slate-300 mb-2">
            <CardHeader>
                <CardTitle className="text-slate-100">Generat you password</CardTitle>
                <CardDescription>Generator your new strong passwords .</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col">
                        <div className="relative mb-4">
                            <Input id="name" disabled className="bg-transparent outline-none  " type="text" value={generatedPassword} />
                            <button
                                onClick={copyToClipboard}
                                data-copy-to-clipboard-target="account-id" data-tooltip-target="tooltip-account-id" className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
                                <span id="default-icon-account-id">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                    </svg>
                                </span>
                                <span id="success-icon-account-id" className="hidden inline-flex items-center">
                                    <svg className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </span>
                            </button>
                            <div id="tooltip-account-id" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                <span id="default-tooltip-message-account-id">Copy to clipboard</span>
                                <span id="success-tooltip-message-account-id" className="hidden">Copied!</span>
                                <div className="tooltip-arrow" data-popper-arrow></div>
                            </div>
                        </div>
                        <div className=" mt-1">
                            <div className="mt-2 flex items-center justify-between">
                                <Label htmlFor="terms" className="mr-1">Password length {passProperty.length}</Label>
                                <Button className="bg-transparent">Reset</Button>
                            </div>
                            <Input
                                id="name"
                                name="length"
                                className=" backdrop-blur-0 bg-black"
                                type="range"
                                value={passProperty.length}
                                onChange={handleChangeLength}
                                min={6}
                                max={10}
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="mt-4 flex items-center gap-5 ">
                            <input type="checkbox" defaultChecked onClick={handleChange} id="terms" name="upperCase" className="border border-white mr-2" />
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-10"
                            >
                                Uppercase (A-Z)
                            </Label>
                        </div>
                        <div className="mt-4 flex items-center gap-5 ">
                            <input type="checkbox" checked id="terms" name='lowerCase' className="border border-white mr-2" />
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-10"
                            >
                                Lowercase (a-z)
                            </Label>
                        </div>
                        <div className="mt-4 flex items-center gap-5 ">
                            <input type="checkbox" defaultChecked onClick={handleChange} id="terms" name="symbol" className="border border-white mr-2" />
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-10"
                            >
                                Symbol (!@#$)
                            </Label>
                        </div>
                        <div className="mt-4 flex items-center gap-5 ">
                            <input type="checkbox" onClick={handleChange} name="number" defaultChecked id="terms" className="border border-white mr-2" />
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-10"
                            >
                                Number (0-9)
                            </Label>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className="w-full" onClick={handleGeneratePassword}>Generate password</Button>
            </CardFooter>
        </Card>
    )
}
