import { Grid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../store/actions/userActions';

function Information() {
  const { users } = useSelector((state) => state.user);
  const userDispatch = useDispatch();
  useEffect(() => {
    userDispatch(getAllUsers());
  },[])

  return (
    <div>

      <Grid>
       {users.map((user)=>{
        const {id,categoryName,description} = user;
        return(
          <h1>{categoryName}</h1>
        )
       })}
      </Grid>
    </div>
  )
}

export default Information;