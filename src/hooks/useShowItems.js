import React from "react";
import pizzaRepository from "../api/Repositories/pizzaRepository";

const useShowItems = () => {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        pizzaRepository.getPizzas()
            .then(({ data }) => {
                setItems(data);
            })
            .catch((error) => {
                alert('Не удалось выполниить запрос!');
                console.warn(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [])

    return { items, isLoading }

}

export default useShowItems;