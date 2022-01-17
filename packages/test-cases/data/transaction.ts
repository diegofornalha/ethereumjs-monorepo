import {TxData} from "@ethereumjs/tx";

const defaultData = {
    nonce: "0x",
    gasPrice: "0x09184e72a000",
    gasLimit: "0x90710",
    data: "0x608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001" +
    "057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd" +
    "5b610043610075565b60405161005091906100d9565b60405180910390f35b610073600480360381019061006e919061009d56" +
    "5b61007e565b005b60008054905090565b8060008190555050565b60008135905061009781610103565b92915050565b60006020" +
    "82840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525" +
    "050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f456" +
    "5b811461011757600080fd5b5056fea2646970667358221220404e37f487a89a932dca5e77faaf6ca2de3b991f93d230604b1b8daaef6" +
    "4766264736f6c63430008070033"
}

export const mockTransaction = (data?: TxData): TxData => {
    return {
        ...defaultData,
        ...data
    }
}