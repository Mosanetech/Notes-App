import {NextPage} from "next";
import {
    Sigma,
    FlaskConical,
    Landmark,
    BookOpenText,
    Languages,
    Code2,
    BriefcaseBusiness,
    Palette,
} from "lucide-react";

const CategorySection: NextPage = () => {

    const categories = [
        {
            name: "Mathematics",
            description: "Algebra, Calculus, Geometry, Statistics",
            icon: Sigma,
        },
        {
            name: "Science",
            description: "Biology, Chemistry, Physics, Environmental Science",
            icon: FlaskConical,
        },
        {
            name: "History",
            description: "World History, U.S. History, Ancient Civilizations",
            icon: Landmark,
        },
        {
            name: "Literature",
            description: "English Literature, Poetry, Drama",
            icon: BookOpenText,
        },
        {
            name: "Languages",
            description: "Spanish, French, German, Chinese",
            icon: Languages,
        },
        {
            name: "Computer Science",
            description: "Programming, Data Structures, Algorithms",
            icon: Code2,
        },
        {
            name: "Business",
            description: "Marketing, Finance, Management",
            icon: BriefcaseBusiness,
        },
        {
            name: "Art & Design",
            description: "Graphic Design, Art History, Photography",
            icon: Palette,
        },
    ];

    return (
        <div className={'px-4'}>
            <div className={'flex flex-col gap-4 text-center'}>
                <h3>Popular Study Categories</h3>
                <p className={'sm:text-lg text-sm max-w-[500px] md:max-w-[600px] mx-auto'}>
                    Explore notes from various academic disciplines and find exactly what you need to excel in your studies.
                </p>
            </div>
            {/*Categories Grid*/}
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 max-w-[1200px] mx-auto px-4'}>
                {categories.map((category) => (
                    <div key={category.name} className={'card card-hover card-compact flex flex-col items-center text-center p-6 gap-6'}>
                        <category.icon className="w-6 h-6 text-[var(--accent-primary)]" />
                        <div>
                            <h4 className={'mb-2'}>{category.name}</h4>
                            <p className={'text-sm text-muted'}>{category.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategorySection;