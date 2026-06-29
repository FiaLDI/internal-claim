import { TreeNode } from "./tree.types"

export const buildTree=(arr: number[])=>{
    if(!arr.length) return null

    const root: TreeNode={val:arr[0],left:null,right:null}
    const q: TreeNode[]=[root]
    let i=1

    while(q.length){
        const n=q.shift();
        if (!n) break

        if(arr[i]!=null){
            n.left={val:arr[i],left:null,right:null}
            q.push(n.left)
        }
        i++
        if(arr[i]!=null){
            n.right={val:arr[i],left:null,right:null}
            q.push(n.right)
        }
        i++

    }

    return root
}
