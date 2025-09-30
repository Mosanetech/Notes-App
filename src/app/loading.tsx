import { NextPage } from "next";
import { PulseLoader } from "react-spinners";

const Loading: NextPage = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <PulseLoader color="#10B981" />
        </div>
    );
};

export default Loading;
