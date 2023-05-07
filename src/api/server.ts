let token = `63df9983ae790d52b3ecf502f3bc9710c336dd8a86ccdda4` //this is car-dealership-site-flask glitch token

export const serverCalls = {
    get: async () => {
        const response = await fetch (`https://car-dealership-site-flask.glitch.me/api/cars`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/JSON',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data:any = {}) => {
        const response = await fetch(`https://car-dealership-site-flask.glitch.me/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error(`Failed to Created new data on server`)
        }

        return await response.json()
    },

    update: async(id:string, data:any = {}) => {
        const response = await fetch(`https://car-dealership-site-flask.glitch.me/api/cars/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/JSON',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error(`Failed to create new data on server`)
        }

        console.log(`success: updated car with id ${id}`)
    },

    delete: async(id:string) => {
        const response = await fetch(`https://car-dealership-site-flask.glitch.me/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/JSON',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error(`Failed to delete car with id ${id}`)
        }

        console.log(`success: car with id ${id} was deleted! Bye bye.`)
    }
}