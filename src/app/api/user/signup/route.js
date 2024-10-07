import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import bcryptjs from 'bcryptjs'
import { NextRequest,NextResponse } from 'next/server'

await connect()


export default async function POST(req) {
    try {
        const reqBody = req.json()
        const {email, firstname,lastnmae,password} = reqBody

        const user = await User.findOne({email})
        if (user) {
            return NextResponse.json({error:"User Already Existed"},{status:400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password,salt)
  
        const newUser = new User({
            firstname,
            lastnmae,
            email,
            password:hashPassword
        })
  const savedUser = await newUser.save()
  return savedUser
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}