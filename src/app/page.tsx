import SearchInput from "@/components/molecules/SearchInput";
import Head from "next/head";

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

    <div className='flex flex-1 flex-col items-center justify-center'>

      <section>
        <h1 
          className="font-extrabold text-[2.2rem] text-sky-600"
        >
          Open Fact Food Calories Calculator
        </h1>
        <h2
          className="font-semibold text-[1.2rem] text-center"
        >
          Calcule les calories de ta liste de produits.
        </h2>
      </section>

      <section>
        <div
          className="mt-3"
        >
          <SearchInput/>
          
        </div>
      </section>

    </div>
    </>

  );
}
