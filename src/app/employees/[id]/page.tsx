import EditForm from '@/components/EditForm';
import { UpdateModel } from '@/models/model'
import axios from 'axios';
import React from 'react'

export default async function Updatepage({ params }: {params: Promise<UpdateModel> }) {
    const { id } = await params;

    const res = await axios.get(`https://6940d165993d68afba6d189a.mockapi.io/employee/${id}`);

 


  return (
    <div>
      <EditForm employee={res.data}/>
    </div>
  )
}
