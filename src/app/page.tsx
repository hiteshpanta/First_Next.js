import DeleteEmployee from '@/components/DeleteEmployee';
import { Button } from '@/components/ui/button';
import axios from 'axios'
import { Edit2Icon } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
  const res = await axios.get('https://6940d165993d68afba6d189a.mockapi.io/employee');
  const employees = res.data
   console.log(res.data)
  return (
    <div>
      <h1>Hello user</h1>
      {employees.map((employee: any) => {
        return <div key={employee.id} className='border px-5 mt-5'>
            <h2>{employee.name}</h2>
            <p>{employee.position}</p>
            <p>{employee.age}</p>

            <div className='flex mt-5 gap-5'>
              <Link href={`/employees/${employee.id}`}>
                <Button variant={'ghost'}><Edit2Icon /></Button>
              </Link>
              
              <DeleteEmployee id={employee.id ?? ''} />
            </div>
          </div>
          
      })}
      
    </div>
  )
}
