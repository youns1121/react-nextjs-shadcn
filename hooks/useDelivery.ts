
import { useQuery } from '@tanstack/react-query';

const fetchDelivery = async () => {
    const respnse = await fetch('/tables/data');
    return respnse.json();
}

export const useDelivery = (param: string) => {
    return useQuery({ queryKey: ['delivery', param], queryFn: fetchDelivery });
}