import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken"

connect()

export async function Post(request) {

    try {
        const reqBody = await request.json()
        const { email, password } = reqBody
        const user = User.findOne({ email, password })
        if (!user) {
            return NextResponse.json({ error: "User Does Not EXist" }, { status: 400 })
        }

        const validatePassword = await bcryptjs.compare(password, user.password)

        if (!validatePassword) {
            return NextResponse.json({ error: "Incorrect Pasword" }, { status: 400 })
        }

        const tokenData = {
            id: user._id,
         firstname:user.firstname,
            email:user.email
        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: "1d" })

        const response = await NextResponse.json({
            message: "Login Successfully",
            success: true
        }, {
            status: 200
        })

      
        response.cookies.set("token", token, { httpOnly: true })

        return response

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}