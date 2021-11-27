import { useEffect, useState } from 'react';

const useAllServices = () => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('./all-services.json')
            .then(res => res.json())
            .then(data => setAllServices(data));
    }, []);
    return [allServices];
};

export default useAllServices;