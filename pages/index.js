import Head from 'next/head';
import MyListBox from '../components/MyListBox';
import { useState } from 'react';
import FilterTable from '../components/FilterTable';
import {items_departement,items_type_doc,items_annee} from '../lib/data';

const Home = () => {


  const [myfilter, setMyFilter] = useState({
    departement: items_departement[0].name,
    type_doc:  items_type_doc[0].name,
    annee:  items_annee[0].name
  });

  const onClickFilterBtn=(values)=>{
   
    setMyFilter({
      ...myfilter,
      departement:values.departement,
      type_doc:values.type_doc,
      annee:values.annee
    })
  }


  return (
    <div >
      <Head>
        <title>Documents</title>
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between pt-24 pb-6 border-b border-gray-200">
          <h1 className=" md:w-1/4 text-4xl font-extrabold tracking-tight text-gray-900">Documents</h1>
          <div className=' p-6 pb-6 border-4 border-dashed border-gray-200 rounded-lg md:w-3/4 flex flex-col md:flex-row md:flex-wrap gap-y-3 '>
            <FilterTable 
            items_departement={items_departement}
            items_type_doc={items_type_doc}
            items_annee={items_annee}
            onClickFilterBtn={onClickFilterBtn}
             />
          </div>




        </div>

        <section aria-labelledby="products-heading" className="pt-6 pb-24">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">

            {/* Product grid */}
            <div className="lg:col-span-12">
              {/* Replace with your content */}
              <div className=" pb-6 border-4 border-dashed border-gray-200 rounded-lg h-full">
                <MyListBox 
                departement={myfilter.departement=="Tous"?"":myfilter.departement} 
                type_doc={myfilter.type_doc=="Tous"?"":myfilter.type_doc} 
                annee={myfilter.annee=="Toutes"?"":myfilter.annee}/>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </section>
      </main>


    </div>
  )
}


export default Home;
