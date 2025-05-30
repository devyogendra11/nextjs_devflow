import {Button} from "@/components/ui/button";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import LocalSearch from "@/components/search/LocalSearch";

const Home = async () => {
    return (
        <>
            <section className="w-full flex flex-col-reverse justify-between sm:flex-row gap-4 sm:items-center">
                <h1 className="h1-bold text-dark100_light900 ">All Questions</h1>

                <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900" asChild>
                    <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
                </Button>
            </section>

            <section className="mt-11">
                <LocalSearch
                    route='/'
                    imgSrc="/icons/search.svg"
                    placeholder="Search questions..."
                    otherClasses="flex-1"
                />
            </section>

            HomeFilter

            <div className="mt-10 flex w-full flex-col gap-6">
                <p>Question Card 1</p>
                <p>Question Card 2</p>
                <p>Question Card 3</p>
                <p>Question Card 4</p>
            </div>
        </>
    );
}

export default Home;
