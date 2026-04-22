'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { updateEmployee } from "@/lib/actions"
import { Formik } from "formik"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import toast from "react-hot-toast"
import { EmployeeModel } from '@/models/model'


interface EditFormProps {
  employee: EmployeeModel

}




export default function({employee}: EditFormProps) {
  const [loading, startTransition] =useTransition()
  const router = useRouter()

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Add Employee</CardTitle>
        <CardDescription>
          Enter detail
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={{
            name: employee.name,
            position: employee.position,
            age: employee.age
          }}

          onSubmit={async(val) => {


            startTransition(async() => {
                const response = await updateEmployee({...val, id: employee.id})

                if (response.success) {
                  toast.success(response.message)
                  router.back()
                } else {
                  toast.error(response.message)
                }
               
            });
            
           
            
          }}>
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={values.name}
                onChange={handleChange}
                name="name"
                placeholder="John Dee"

              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="position">Position</Label>
              <Input
                id="position"
                value={values.position}
                onChange={handleChange}
                name="position"
                placeholder="Dev"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="age"
                value={values.age}
                onChange={handleChange}
                type="number"
                placeholder="10"
              />
            </div>
            {loading ? 
            <Button disabled type="submit" className="w-full">
              <Spinner /> Updating...
            </Button> : <Button type="submit" className="w-full">
              Update
            </Button>}
            
          </div>
        </form>
          )}
        </Formik>
        
      </CardContent>
      
    </Card>
  )
}

