import React from "react";
import pizzaRepository from "../api/Repositories/pizzaRepository";

const useShowItems = ({ categoryId, sort }) => {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(true);
        pizzaRepository.getPizzas(sort, categoryId)
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
        window.scrollTo(0, 0);
    }, [categoryId, sort])

    return { items, isLoading }

}

export default useShowItems;