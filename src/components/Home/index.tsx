import { SelectVersionComponent } from '@/components/SelectVersionComponent';
import { useQueryState } from 'nuqs';
import { Suspense, useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import { Input } from '@/components/ui/input'


import {v1, v4, v6, v7, NIL} from 'uuid'
import Head from 'next/head';
import Footer from '@/components/Footer';

const generators: Record<string, any> = {
  'v1': v1,
  'v4': v4, 
  'v6': v6, 
  'v7': v7,
  'NIL': NIL
} 

const uuidDescriptions: Record<string, string> = {
  v1: "Generates a time-based UUID using the current timestamp and MAC address, making it ideal for ordered identifiers or time-sensitive applications.",
  v4: "Creates a randomly generated UUID using a secure random number generator, suitable for cases requiring unpredictable and unique identifiers like session tokens.",
  v6: "Produces a UUID with a timestamp-first format, optimizing it for database indexing and performance in applications requiring chronological order.",
  v7: "Generates a time-based UUID designed for distributed systems, ensuring unique identifiers with embedded time data for sorting and ordering.",
  NIL: "Represents a special UUID with all zeroes, commonly used as a placeholder or default value in protocols and systems."
};

export function HomePage() {
  const [version, _] = useQueryState('version')
  const [generatedUuid, setGeneratedUuid] = useState('')
  const [lenght, setLenght] = useState('')
  const [uuidList, setUuidList] = useState<string[]>([])
  
  
  const handleCreateNewUUID = ()=> {
    if(version === 'NIL') return setGeneratedUuid(generators[version])
    
    setGeneratedUuid(generators[version ?? 'v4']())
  }
  
  const handleCreateNewUUIDToBulk =  ()=> {
    if(version === 'NIL') return generators[version]
    
    return generators[version ?? 'v4']()
  }
  
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedUuid);
      toast('UUID successfully copied.')
    } catch (err) {
      console.error('Fail to copy: ', err);
    }
  };
  
  const handleBulkUUID = () => {
    let uuidGeneratedList : string[]= []
    const list = Array(Number(lenght)).fill(0)  
    
    
    for (const value of  list) {
      uuidGeneratedList.push(handleCreateNewUUIDToBulk())
    }
    
    setUuidList(uuidGeneratedList)
 
  }
  
  const downloadAsTxt = () => {
    const csvString = uuidList.join(", ");
  
    const blob = new Blob([csvString], { type: "text/plain" });
  
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "list.txt"; 
    link.click();
  
    URL.revokeObjectURL(link.href);
  }
  
  useEffect(()=> {
    if (typeof window !== "undefined") {
      handleCreateNewUUID()
    }
  }, [version])
  

  return (
    <Suspense>
      <Head>
        <title>UUID Generator | Generate Unique UUIDs Online</title>
        <meta name="description" content="Quickly generate secure UUIDs online, including versions v1, v4, v6, and v7. Perfect for developers and system integrators." />
        <meta name="keywords" content="UUID generator, UUID v1, UUID v4, UUID v6, UUID v7, unique identifier, online UUID generator" />
        <meta name="author" content="UUID Generator Team" />
        <meta property="og:title" content="UUID Generator | Generate Unique UUIDs Online" />
        <meta property="og:description" content="Generate UUIDs for free using our online UUID Generator. Choose from various versions tailored for your needs." />
        <meta property="og:url" content="https://uuidgenerator.tech" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
        
    <main className="w-full flex flex-col min-h-screen">
      <header className="bg-slate-900 p-4 flex flex-col items-center">
        <h1 className="text-white text-center">UUID GENERATOR</h1>
        <div className="flex flex-col justify-center">
        <h4 className="text-white text-center inline-flex justify-center items-center">Your <SelectVersionComponent/> UUID:</h4>
        <span className="inline-flex items-center font-semibold px-2 text-lg justify-center text-white text-center bg-slate-800 h-12 rounded-md">
        {generatedUuid}
        </span>
        <div className="self-center mt-3 flex gap-2 items-center">
        <button className="h-8 rounded font-bold text-white px-4 bg-sky-950 border-0" onClick={copyToClipboard}>Copy UUID</button>
        <button className="h-8 rounded font-bold text-white px-4 bg-sky-950 border-0" onClick={handleCreateNewUUID}>Generate new UUID</button>
        </div>
        </div>
      </header>
      
      <div className="flex flex-col items-center pb-24">
        <h3 className="text-center">Bulk Version {version?.toUpperCase() ?? 'V4'} UUID Generation</h3>
        
        <span className="inline-flex justify-center items-center gap-2">
          how many?
          <Input className="w-[10rem] h-8" type="number" placeholder="max 600" value={lenght} onChange={(v) => setLenght(v.target.value)}/>
          <button disabled={Number(lenght) > 600} className="h-8 rounded font-bold text-white px-4 bg-sky-950 border-0" onClick={handleBulkUUID}>Generate UUIDs</button>
        </span>
        
        {uuidList?.length ? (
          <>
          <div className="flex flex-col gap-4 mt-4 shadow-lg rounded-md max-w-96 p-6 pt-0 bg-slate-50">  
        
        <button className="h-8 rounded font-bold text-white px-4 bg-sky-950 border-0 mt-3" onClick={downloadAsTxt}>
          Download list to a file
        </button>
        {uuidList.map((value)=> (
          <span key={value}>
              {value}
            </span>
          ))}
        </div>
          </>
        ): null}
        <h4>What is {version?.toUpperCase() ?? 'V4'} UUID</h4>
        <span className="px-6">{uuidDescriptions[version ?? 'v4']}</span>
      </div>
    </main>
    <Toaster/>
    <Footer/>
    </Suspense>
  );
}
