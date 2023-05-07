import React from 'react';
import { useDispatch, useSelector, useStore} from 'react-redux';
import {useForm} from 'react-hook-form';
import {
    chooseColor,
    chooseYear,
    chooseMake,
    chooseModel,
    chooseVIN,


} from '../../redux/slices/rootSlice';
import { Button } from '@mui/material';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?: {}
}

export const CarForm = (props:CarFormProps) =>{
    const dispatch = useDispatch();
    let {carData, getData } = useGetData();
    const store = useStore();
    // const name = useSelector<carState> (state => state.name)
    const { register, handleSubmit} = useForm({})
    
    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if (props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`updated: ${data}`)
            window.location.reload()
            event.target.reset()
        } else {
            dispatch(chooseColor(data.color))
            dispatch(chooseYear(data.year))
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))
            dispatch(chooseVIN(data.vin))

            console.log(store.getState())
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name'>Car Color</label>
                <Input {...register('color')} name='color' placeholder='Color'/>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder="Year"/>
                </div>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name="make" placeholder="Make"/>
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder="Model"/>
                </div>
                <div>
                    <label htmlFor="vin">VIN</label>
                    <Input {...register('vin')} name="vin" placeholder="VIN"/>
                </div>
     
                <Button type='submit'>Submit</Button>
            </form>
        </div>
        
    )

}

