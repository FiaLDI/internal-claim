import { Mode } from "@/features/change-mode";
import { TestCase } from "../types/run-code.types";

export const examples : Record<Mode,{code:string,testCases:TestCase[]}> = {
    array:{
        code:`function run(input){
return input.map(x=>x*2)
}`,
        testCases:[
            {input:`[1,2,3]`,expected:`[2,4,6]`},
            {input:`[5,10]`,expected:`[10,20]`}
        ]
    },

    matrix:{
        code:`function run(input){
return input.flat()
}`,
        testCases:[
            {input:`[[1,2],[3,4]]`,expected:`[1,2,3,4]`}
        ]
    },

    string:{
        code:`function run(input){
return input.split("").reverse().join("")
}`,
    testCases:[
        {input:`hello`,expected:`olleh`}
    ]
    },

    tree:{
        code:`function run(root){
return root.left.right.val
}`,
        testCases:[
            {input:`[1,2,3,null,4]`,expected:`4`}
        ]
    },

    json:{
        code:`function run(obj){
return obj.a + obj.b
}`,
        testCases:[
            {input:`{"a":2,"b":3}`,expected:`5`}
        ]
    }
}
