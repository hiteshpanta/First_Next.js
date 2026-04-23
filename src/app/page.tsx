
import DeleteNews from "@/components/DeleteNews";
import { getNews } from "@/lib/actions";
import { NewsInterface } from "@/models/model";


export default async function Home() {
  const res = await getNews();

  console.log(res);

  const news: NewsInterface[] = res.data ?? [];
  return (
    <div>
      {news?.map((index)=> {
        return <div key={index.id} className="border">
          <h2 className="text-lg font-semibold">{index.title}</h2>
          <p className="text-gray-600">{index.description}</p>
          <DeleteNews id={index._id.toString()}/>
        </div>
      })}
      
    </div>
  )
}
