import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);
    const [serviceLoading, setServiceLoading] = useState(true);
    useEffect(() => {
        fetch('https://tour-world.herokuapp.com/allplaces')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setServiceLoading(false);
            });
    }, []);
    return [services, serviceLoading, setServices];
};

export default useServices;