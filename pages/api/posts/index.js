// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { posts } from "../../../posts";

export default function handler(req, res) {
  if (req.method==='GET'){
    res.status(200).json(posts)
  } else if (req.method==='POST'){
    const data=req.body
    const newData={
      data
    }
    posts.push(newData)    
    res.status(200).json(posts)
  }
}
