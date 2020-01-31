const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
  }

  function createTransaction() {
    user.transactions.push({
        type: 'credit',
        value: 50.5
      }) 
  }


  createTransaction();
  console.log(user.transactions[0]);