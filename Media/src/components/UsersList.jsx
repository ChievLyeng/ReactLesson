import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers,addUser } from "../store";
import Button from './Button';
import Skeleton from "../components/Skeleton";

function useThunk(thunk) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const runThunk = useCallback(() => {
        setIsLoading(true)
        dispatch(thunk())
            .unwrap()
            .catch((err) => {
                setError(err)
            })
            .finally(() => setIsLoading(false));
    }, [dispatch,thunk]);

    return [runThunk, isLoading, error];
}

function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = 
        useThunk(fetchUsers)
    const [doCreateUser, isCreatingUser, creatingUserError] =
        useThunk(addUser)
    const { data } = useSelector((state) => {
        return state.users;
    });

    const handlUserAdd = () => {
        doCreateUser();
    }

    // Extract data from the Redux state
    const users = data.data?.users || [];

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);



    

    if (isLoadingUsers) {
        return <Skeleton times={6} className="h-10 w-full" />;
    }
    
    if (loadingUsersError) {
        return <div>Error fetching data...</div>;
    }

    const renderedUsers = users.map((user) => {
        return (
            <div key={user._id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {`${user.firstName} ${user.lastName}`}
                </div>
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {user.email}
                </div>
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {`0${user.phoneNumber} `}
                </div>
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {`${user.role} `}
                </div>
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {`${user.gender} `}
                </div>
            </div>
        );
    });

    return(
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">Users</h1>
                {
                    isCreatingUser ? 'Creating User...' 
                    : <Button onClick={handlUserAdd}>  + Add User </Button>
                }
                
                {creatingUserError && 'Error creating user...'}
            </div> 
            {renderedUsers} 
        
        </div>
    )
}

export default UsersList;
