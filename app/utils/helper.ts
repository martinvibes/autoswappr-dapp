import { cairo } from "starknet";
import {
    useAccount,
    useContract,
    useSendTransaction,
    useReadContract
} from "@starknet-react/core";

const {account, address} = useAccount();

export const approveTokens = async (contractAddress: `0x${string}`, spender: string, amount: bigint) => {

    // Contract Initialization
    const { contract } = useContract({
        abi: [{
            "type": "function",
            "name": "approve",
            "inputs": [
                {
                    "name": "spender",
                    "type": "core::starknet::contract_address::ContractAddress"
                },
                {
                    "name": "amount",
                    "type": "core::integer::u256"
                }
            ],
            "outputs": [
                {
                    "type": "core::bool"
                }
            ],
            "state_mutability": "external"
        }],
        address: contractAddress,
        provider: account
    });

    // const calls

    const { isError, error, send, data, isPending } = useSendTransaction({ 
        calls: 
            contract && address 
            ? [contract.populate("approve", [spender, cairo.uint256(amount)])] 
            : undefined, 
    }); 

    try {
        if (!amount || !spender || !contractAddress) {
            return;
        }
        
        send()

        return {data, isPending, isError, error};

    } catch (error) {
        console.error('Error calling approve:', error);
        throw error;
    }
};