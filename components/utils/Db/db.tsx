import TypeDb from "../../../types/TypeDb";

  const db: Array<TypeDb> = [
    {
        id: 1,
        type: "Pix",
        amount: 100,
        date: "2022-10-19",
        description: "Pizza com a galera",
        operation:"Credit",
    },
    {
        id: 2,
        type: "Debit",
        amount: 40,
        date: "2022-10-19",
        description: "Gasolina",
        operation:"Debit",
    },
    {
        id: 3,
        type: "Ted",
        amount: 15000,
        date: "2022-10-18",
        description: "Salário",
        operation:"Credit",
    }
    
    
    
];

export default db;