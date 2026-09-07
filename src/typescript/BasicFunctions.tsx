const addTwoNumber = (a: number, b: number): string => {
    return `${a + b}`;
};

export const BasicFunctions = () => {
    return (
        <>
            <h3> Funciones </h3>
            <span> El resultado de sumar 2+8 = {addTwoNumber(2, 8)} </span>
        </>
    );
}