'use server'

import { EmployeeModel } from "@/models/model"
import axios from "axios"
import { revalidatePath } from "next/cache"





export async function addEmployee(data: EmployeeModel) {
    
    try {
        await axios.post('https://6940d165993d68afba6d189a.mockapi.io/employee', data)
        revalidatePath('/');
        return { success: true, message: 'Employee added successfully' }
        
    } catch (err: any) {
        return { success: false, message: err.message}
        
    }
    
}


export async function removeEmployee(id: string) {
    
    try {
        await axios.delete(`https://6940d165993d68afba6d189a.mockapi.io/employee/${id}`);
        revalidatePath('/');

        return { success: true, message: 'Employee removed successfully' }
        
    } catch (err: any) {
        return { success: false, message: err.message}
        
    }
    
}

export async function updateEmployee(data: EmployeeModel) {
    
    try {
        await axios.patch(`https://6940d165993d68afba6d189a.mockapi.io/employee/${data.id}`, data)
        revalidatePath('/');
        return { success: true, message: 'Employee updated successfully' }
        
    } catch (err: any) {
        return { success: false, message: err.message}
        
    }
    
}