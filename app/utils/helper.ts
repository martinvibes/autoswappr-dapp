// import { cairo } from "starknet";
import {
  useContract,
  useReadContract,
  useSendTransaction,
  useTransactionReceipt,
} from "@starknet-react/core";
import { useMemo } from "react";

/**
 * Fetches data from a StarkNet contract.
 * @param {string} functionName - The name of the contract function to call.
 * @param {Array} args - The arguments to pass to the contract function.
 * @param {object} abi - The ABI of the contract.
 * @param {string} address - The address of the contract.
 * @returns {object} - The result of the contract read operation.
 */
export function useContractFetch(
  abi: any,
  functionName: string,
  address: `0x${string}`,
  args: any[] = []
) {
  const { data, isLoading, refetch, isFetching, error } = useReadContract({
    abi: abi,
    functionName: functionName,
    address: address,
    args: args,
  });

  return { data, isLoading, refetch, isFetching, error };
}

/**
 * A utility hook for writing data to a StarkNet contract.
 * @param {Object} params - Parameters for the contract write operation.
 * @param {string} params.functionName - The name of the contract function to call.
 * @param {Array} params.args - The arguments to pass to the contract function.
 * @param {object} params.abi - The ABI of the contract.
 * @param {string} params.address - The address of the contract.
 * @param {string} [params.user] - The address of the user (optional).
 * @returns {object} - Returns an object with writing functions and states.
 */
export function useContractWriteUtility(
  functionName: string,
  args: any[],
  abi: any,
  contract_address: `0x${string}`,
  user: any
) {
  const { contract } = useContract({ abi, address: contract_address });

  const calls = useMemo(() => {
    if (
      !contract ||
      !args ||
      args.some((arg) => arg === undefined || arg === null)
    ) {
      return undefined;
    }

    return [contract.populate(functionName, args)];
  }, [contract, functionName, args]);

  const {
    sendAsync: writeAsync,
    send,
    data: writeData,
    isPending: writeIsPending,
    error,
  } = useSendTransaction({ calls });

  //   const {
  //     writeAsync,
  //     data: writeData,
  //     isPending: writeIsPending,
  //   } = useContractWrite({ calls });

  const { isLoading: waitIsLoading, data: waitData } = useTransactionReceipt({
    hash: writeData?.transaction_hash,
    watch: true,
  });

  return {
    writeAsync,
    writeData,
    writeIsPending,
    waitIsLoading,
    waitData,
    calls,
  };
}
