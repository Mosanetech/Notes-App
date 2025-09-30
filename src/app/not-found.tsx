import {NextPage} from "next";
import {Button} from "@/components/ui/button";
import { BookOpen, FileText, GraduationCap, Home } from "lucide-react";
import Link from "next/link";

const NotFound: NextPage = () => {
    return (
        <div className="min-h-screen bg-[#F8FAF8] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-2xl mx-auto text-center relative">

                {/* Floating Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Floating Book Icon */}
                    <BookOpen
                        className="absolute top-10 left-10 w-8 h-8 text-[#10B981]/30 animate-float"
                        style={{ animationDelay: '0s' }}
                    />
                    <FileText
                        className="absolute top-20 right-16 w-6 h-6 text-[#3B82F6]/30 animate-float"
                        style={{ animationDelay: '1s' }}
                    />
                    <GraduationCap
                        className="absolute bottom-32 left-8 w-10 h-10 text-[#10B981]/20 animate-wiggle"
                        style={{ animationDelay: '2s' }}
                    />
                    <FileText
                        className="absolute bottom-20 right-12 w-7 h-7 text-[#3B82F6]/25 animate-float"
                        style={{ animationDelay: '1.5s' }}
                    />

                    {/* Floating Papers */}
                    <div
                        className="absolute top-32 right-8 w-12 h-16 bg-white/60 rounded-lg shadow-lg animate-float"
                        style={{ animationDelay: '0.5s' }}
                    />
                    <div
                        className="absolute bottom-40 left-16 w-10 h-14 bg-[#10B981]/10 rounded-lg shadow-sm animate-float"
                        style={{ animationDelay: '2.5s' }}
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-10">
                    {/* 404 Heading */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h1 className="text-9xl sm:text-[12rem] lg:text-[14rem] font-bold text-transparent bg-gradient-to-br from-[#10B981] to-[#3B82F6] bg-clip-text leading-none mb-4">
                            404
                        </h1>
                    </div>

                    {/* Main Message */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F2937] mb-4">
                            Oops! Page not found
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <p className="text-lg text-[#4B5563] mb-8 max-w-md mx-auto leading-relaxed">
                            The page you&#39;re looking for seems to have gone on a study break. Let&#39;s get you back to learning!
                        </p>
                    </div>

                    {/* Call to Action Button */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                            <Link href={'/'}>
                            <Button
                                size="lg"
                                className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                            >
                                <Home className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                                Go back home
                            </Button>
                        </Link>
                    </div>

                    {/* Decorative Elements */}
                    <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                        <div className="flex justify-center space-x-2">
                            <div className="w-2 h-2 bg-[#10B981] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                            <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-[#10B981] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    </div>
                </div>

                {/* Large Background Circles for Visual Interest */}
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#10B981]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#3B82F6]/5 rounded-full blur-3xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
            </div>
        </div>
    );
}

export default NotFound;