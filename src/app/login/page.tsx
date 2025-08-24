import { NextPage } from "next";
import LoginInputs from "@/components/login/LoginInputs";

const Login: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h2>SchoolNotes</h2>
        <p className="text-sm mt-2">
          Join hundreds of students sharing their academic notes
        </p>
      </div>

      {/* Form Section */}
      <div className="p-6 rounded-md shadow-md max-w-md w-full bg-white space-y-4">
        <h3 className="text-lg font-semibold text-center">Create your account</h3>
        <p className="text-sm text-gray-500 text-center">
          Start sharing your school notes today
        </p>

        <LoginInputs />
      </div>
    </div>
  );
};

export default Login;
