'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { updateNews } from "@/lib/actions";

import { NewsInterface } from "@/models/model";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useTransition } from "react";


import toast from "react-hot-toast";





export default function UpdateNews({news }: { news: NewsInterface}) {
  
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  return (
    <div>

      <Formik
        initialValues={{
          title: news.title,
          description: news.description,
          image: news.image
        }}

        onSubmit={(val)=> {
          startTransition(async() => {
            const res = await updateNews(news.id ?? '', val);
            if (res.success) {
              toast.success(res.message);
              router.back()
            } else {
              toast.error(res.message)
            }
          })

        }}

        
      >
        {({handleChange,handleSubmit, values}) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-sm">
            <Input
                value={values.title}
                onChange={handleChange}
                name="title"
                placeholder="Title"
                className="w-full max-w-sm"
            />

            <Input
                value={values.description}
                onChange={handleChange}
                name="description"
                placeholder="Description"
                className="w-full max-w-sm"
            />

            <Input
                value={values.image}
                onChange={handleChange}
                name="image"
                placeholder="Image"
                className="w-full max-w-sm"
            />

            <Button type="submit" disabled={isPending}>
                {isPending && <Spinner/>}
                Update News
            </Button>
          </form>
        )}
      </Formik>
      
    </div>
  )
}
