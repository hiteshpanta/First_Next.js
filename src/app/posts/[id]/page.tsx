


interface PostPageProps {
    id: string
}

export default async function Postpage({params}: {params: Promise<PostPageProps>}) {

    const {id} = await params
    

    console.log(id)
  return (
    <div>
        Post id: {id}
        <ChildCompo  personName="angela" age={90}/>
      
    </div>
  )
}

interface ChildCompoProps {
    personName: string,
    age: number
}

function ChildCompo({personName, age}: ChildCompoProps) {
 
    return (
        <div>ChildCompo</div>
    )
}
