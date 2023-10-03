// NOTE We should NOT add the 'export' before namespace, which will make it a module not a namespace
declare namespace My.Ns {
    export type User = {
        name: string,
        age: number
    }
}
