import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers,addUser } from "../store";
import Button from './Button';
import Skeleton from "../components/Skeleton";

function UsersList() {
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [loadingUsersError, setLoadingUsersError] = useState(null);
    const dispatch = useDispatch();

    const { data } = useSelector((state) => {
        return state.users;
    });

    const handlUserAdd = async () => {
        await dispatch(addUser());
    }

    // Extract data from the Redux state
    const users = data.data?.users || [];

    useEffect(() => {
        setIsLoadingUsers(true)
        dispatch(fetchUsers())
            .unwrap()
            .catch((err) => {
                console.log("err",err)
                setLoadingUsersError(err)
                
            })
            .finally(() => {
                setIsLoadingUsers(false)
                console.log("err",loadingUsersError)
            });
    }, [dispatch]);

    

    // console.log("data :", users);
    // console.log(isLoading);
    // console.log(error);

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
                <Button onClick={handlUserAdd}>
                    + Add User
                </Button>
            </div> 
            {renderedUsers} 
        
        </div>
    )
}

export default UsersList;
