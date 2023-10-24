import Head from "next/head";
import CreditCard from "../src/components/CreditCard"


const HomePage = () => {
    return (
        <>
            <Head>
                <title>Credit Card</title>
            </Head>
            <div>
                <CreditCard/>
            </div>
        </>
    );
}

export default HomePage;