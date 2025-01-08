import SearchInput from "@/components/organisms/SearchInput";
import ProductLsts from "@/components/organisms/ProductsList";
import Head from "next/head";
import { FaAppleAlt } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <Head>
      <meta property="og:title" content="Open fact food calories calculator" />
      <meta
        property="og:description"
        content="Calculating the calories of open fact food products"
      />
      
    </Head>

    {/*********
     * MAIN 
     *********/}
       <main className='flex flex-1 w-full bg-[#ffffff] justify-center items-center flex-col'>
          
        <div className='w-1/2 justify-start items-start relative z-10 flex-col mt-[30px]'>
            <section
              className="w-full"
            >
              <h1 
                className="font-extrabold text-[2.2rem] text-lime-600 flex flex-row items-center"
              >
                <FaAppleAlt className="mr-3 text-lime-500"/> Open Fact Food
              </h1>
              <h2
                className="font-semibold text-[1.2rem] mt-3"
              >
                Entre le nom de ton produit pour consulter sa fiche
              </h2>
            </section>

            <section
              className="w-full"
            >
              <div
                className="mt-3 w-full"
              >
                <SearchInput/>
                <ProductLsts />
                
              </div>
            </section>
        </div>
         
      </main>

     

    
    </>

  );
}
