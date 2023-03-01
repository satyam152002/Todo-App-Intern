import { SERVER_URL } from ".."

export function apiLogin({username,password})
{
    const options={
            method:'POST',
            mode:'cors',
            credentials:'include',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                username:username,
                password:password
            })
    }
    return new Promise(async (resolve,reject)=>{
        try
        {
            let res=await fetch(`${SERVER_URL}/auth/login`,options)
            if(res.ok)
            {
                let result=await res.json()
                return resolve(result)
            }
            else
            {
                let error=await res.text()
                return reject(error)
            }
        }
        catch(e)
        {
            reject('Server Error')
        }
    })
}
export function apiRegister({
    firstname,lastname,
    email,username,
    password
})
{
    const options={
            method:'POST',
            mode:'cors',
            credentials:'include',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                firstname:firstname,
                lastname:lastname,
                email:email,
                username:username,
                password:password
            })
    }
    return new Promise(async (resolve,reject)=>{
        try
        {
            let res=await fetch(`${SERVER_URL}/auth/register`,options)
            if(res.ok)
            {
                let result=await res.text()
                return resolve(result)
            }
            else
            {
                let error=await res.text()
                return reject(error)
            }
        }
        catch(e)
        {
            reject('Server Error')
        }
    })
}
export function apiLogout()
{
    const options={
            method:'POST',
            mode:'cors',
            credentials:'include',
    }
    return new Promise(async (resolve,reject)=>{
        try
        {
            let res=await fetch(`${SERVER_URL}/auth/logout`,options)
            if(res.ok)
            {
                return resolve(await res.text())
            }
            else
            {
                let error=await res.text()
                return reject(error)
            }
        }
        catch(e)
        {
            reject('Server Error')
        }
    })
}