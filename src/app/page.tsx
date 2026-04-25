
import DeleteNews from "@/components/DeleteNews";
import { Button } from "@/components/ui/button";
import { getNews } from "@/lib/actions";
import { NewsInterface } from "@/models/model";
import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";


export default async function Home() {
  const res = await getNews();
  // const d = await currentUser();

  // console.log(d)


  const news: NewsInterface[] = res.data ?? [];

  
  return (
    <div>
      {news?.map((index)=> {
        return <div key={index.id} className="border">
          <h2 className="text-lg font-semibold">{index.title}</h2>
          <p className="text-gray-600">{index.description}</p>

          <div className="flex gap-5 mt-5">
            <Link href={`/news/${index._id}`}>
              <Button>Update News</Button>
            </Link>
            <DeleteNews id={index._id.toString()}/>
          </div>
          
        </div>
      })}

     
      
    </div>
  )
}



