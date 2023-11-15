import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "../store";
import Skeleton from "../components/Skeleton";

function UsersList() {
    const dispatch = useDispatch();

    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
    });

    // Extract data from the Redux state
    const users = data.data?.users || [];

    useEffect(() => {
        // Fetch data when the component mounts or refreshes
        dispatch(fetchUsers());
    }, [dispatch]);

    console.log("data :", users);
    console.log(isLoading);
    console.log(error);

    if (isLoading) {
        return <Skeleton times={6} className="h-10 w-full" />;
    }

    if (error) {
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

    return <div> {renderedUsers} </div>;
}

export default UsersList;
