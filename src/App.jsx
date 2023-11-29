import { useState } from "react";
import "./app.css";
import { useEffect } from "react";

function App() {


    const STRENGTH = 20;
    const COLORS = ['bg-red-500', 'bg-orange-400', 'bg-amber-300', 'bg-yellow-400', 'bg-lime-400', 'bg-green-400']

    const [passwordLength, setPasswordLength] = useState(10)
    const [passwordStrengthColor, setPasswordStrengthColor] = useState(COLORS[0]);
    const [strengthLineWidth, setStrengthLineWidth] = useState()

    useEffect(() => {
        const width = (passwordLength / STRENGTH) * 100
        setStrengthLineWidth(() => `${width}%`)
    }, [passwordLength])

    const combinations = [
        {
            title: "(a-z) Lowercase",
            id: "lowercase",
        },
        {
            title: "(0-9) Numbers",
            id: "numbers",
        },
        {
            title: "Exclude Duplicates",
            id: "exclude_duplicates",
        },
        {
            title: "(A-Z) Uppercase",
            id: "uppercase",
        },
        {
            title: "@!-$#&^%+/",
            id: "special_chars"
        }
    ];

    const handlePasswordLength = (e) => {
        const { target: { value } } = e

        const strength = parseInt(value) / STRENGTH
        console.log("🚀 ~ file: App.jsx:57 ~ handlePasswordLength ~ strength:", strength)


        setPasswordLength(() => parseInt(value))

        if (strength > 0) {
            setPasswordStrengthColor(COLORS[0])
        }
        if (strength > 0.16) {
            setPasswordStrengthColor(COLORS[1])
        }
        if (strength > 0.32) {
            setPasswordStrengthColor(COLORS[2])
        }
        if (strength > 0.48) {
            setPasswordStrengthColor(COLORS[3])
        }
        if (strength > 0.64) {
            setPasswordStrengthColor(COLORS[4])
        }
        if (strength > 0.8) {
            setPasswordStrengthColor(COLORS[5])
        }
    }

    return (
        <>
            <div className="bg-blue-400 min-w-full min-h-screen flex items-center justify-items-center	">
                <div className="main p-5 rounded w-[500px]">
                    <div>
                        <h1 className="text-xl">Password Generator</h1>
                    </div>
                    <div className="mt-5">
                        <div className="px-5 py-3 border rounded border-gray-300 relative">
                            password text
                            <svg
                                className="absolute cursor-pointer top-[12px] right-[12px]"
                                stroke="currentColor"
                                fill="#1976DF"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="24px"
                                width="24px"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="bg-gray-400 w-100 mt-2">
                        <div className={`${passwordStrengthColor} p-[2px] rounded`} style={{ width: strengthLineWidth }} ></div>
                    </div>
                    <div className="mt-5">
                        <div className="">
                            <div className="w-full flex justify-between">
                                <p>Password Length:</p>
                                <p>{passwordLength}</p>
                            </div>
                            <input
                                className="w-full cursor-pointer"
                                type="range"
                                onChange={handlePasswordLength}
                                defaultValue={passwordLength}
                                min="1"
                                max={STRENGTH}
                                step="1"
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <p>Password Setting:</p>
                        <div className="mt-2 grid grid-rows-3 grid-flow-col gap-2">
                            {combinations.map(({ title, id }) => {
                                return (
                                    <div key={id} className="flex">
                                        <input id={id} type="checkbox" name="combinations" className="mr-3 w-[16px] cursor-pointer" />
                                        <label htmlFor={id} className="cursor-pointer"> {title}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* BUTTON */}
                    <button className="bg-blue-600 rounded w-full mt-5 px-5 py-2 text-xl text-cyan-50" type="button" >GENERATE PASSWORD</button>
                </div>
            </div>
        </>
    );
}

export default App;
