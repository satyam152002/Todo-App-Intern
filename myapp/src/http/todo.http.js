import { SERVER_URL } from ".."

export function apiAddTodo({task,todoID,dueDate})
{
    const options={
            method:'POST',
            mode:'cors',
            credentials:'include',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                task:task,
                todoID:todoID,
                dueDate:dueDate
            })
    }
    return new Promise(async (resolve,reject)=>{

        try
        {
            let res=await fetch(`${SERVER_URL}/todo/`,options)
            if(res.ok)
            {
                return resolve(await res.json())
            }
            if(res.status===400)
                return reject(await res.text())
        }
        catch(e)
        {
            return reject("Some Server error")
        }
    })
}


export function apiLoadTodo()
{
    const options={
            method:'GET',
            mode:'cors',
            credentials:'include',
    }
    return new Promise(async (resolve,reject)=>{

        try
        {
            let res=await fetch(`${SERVER_URL}/todo/`,options)
            if(res.ok)
            {
                return resolve(await res.json())
            }
            else
                return reject(await res.text())
        }
        catch(e)
        {
            return reject("Some Server error")
        }
    })
}

export function apiDeleteTodo({todoID})
{
    const options={
            method:'DELETE',
            mode:'cors',
            credentials:'include',
    }
    return new Promise(async (resolve,reject)=>{

        try
        {
            let res=await fetch(`${SERVER_URL}/todo/${todoID}`,options)
            if(res.status===200)
            {
                return resolve({deleted:true})
            }
            else
                return reject({deleted:false})
        }
        catch(e)
        {
            return reject({deleted:false})
        }
    })
}

export function apiChangeStateTodo({completed,todoID})
{
    const options={
            method:'PATCH',
            mode:'cors',
            credentials:'include',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                completed:completed
            })
    }
    return new Promise(async (resolve,reject)=>{

        try
        {
            let res=await fetch(`${SERVER_URL}/todo/${todoID}`,options)
            if(res.ok)
            {
                return resolve(await res.text())
            }
            if(res.status===400)
                return reject(await res.text())
        }
        catch(e)
        {
            return reject("Some Server error")
        }
    })
}
