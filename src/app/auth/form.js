'use client'
import { BeatLoader } from "react-spinners"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useEffect, useState } from "react"
const BASE_URL = 'http://3.110.161.150:4000'
import axios from "axios"
import { useRouter } from "next/navigation"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Form() {
  const [mode, setMode] = useState("Sign In")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [conpassword, setConpassword] = useState("")
  const [message, setMessage] = useState("")
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const signIn = async () => {
    try {
      setLoading(true);
      const response = await axios.post(BASE_URL + "/api/user/login", {
        "user_cred": email,
        "password": password
      })
      const { data, status } = await response
      setMessage(data.message)
      setLoading(false);
      if (status === 200 && data.token) {
        localStorage.setItem('token', 'Bearer ' + data.token);
        router.push('/')
      }
    } catch (error) {
      setMessage(error.response.data.message)
    }
  }
  const signUp = async () => {
    try {
      setLoading(true);
      if (password === conpassword) {
        const response = await axios.post(BASE_URL + "/api/user/register", {
          "username": username,
          "email": email,
          "password": password
        })
        const { data, status } = await response
        setMessage(data.message)
        setLoading(false);
        setIsModalOpen(true);
      }
    } catch (error) {
      setMessage(error.response.data.message)
      console.log(error.response.data.message)
      setLoading(false)
    }
  }



  return (
    <div className="overflow-hidden">
      <section className="text-blue-500 flex flex-col justify-center items-center m-2">
        <figure className="m-2">
          <img src='./oasisLogo.png' width="75px" height="75px"></img>
        </figure>
        <div className="border border-white rounded-full text-white px-5 py-1">Oasis</div>
        <div className="text-white p-2">Welcome Aboard!</div>
      </section>
      <Card className="bg-black text-white border border-white rounded-[2rem]">
        <CardHeader className="h-[75px]">
          <CardTitle className="text-2xl text-center" >{mode}</CardTitle>
        </CardHeader>
        <Tabs defaultValue="Sign In" className="w-[400px]">
          <TabsList className="grid mb-2 grid-cols-2">
            <TabsTrigger value="Sign In" onClick={(e) => { setMode(e.target.value) }}>Sign In</TabsTrigger>
            <TabsTrigger value="Sign Up" onClick={(e) => { setMode(e.target.value) }}>Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="Sign In">
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current" >Email</Label>
                <Input id="current" type="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input id="new" type="password" onChange={(e) => setPassword(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="m-auto" onClick={signIn}>{loading ? <BeatLoader color="white" size={10} /> : <SignInButton text="Sign In" />}</Button>
            </CardFooter>
          </TabsContent>
          <TabsContent value="Sign Up">
            <CardContent className="space-y-2 mt-10">
              <div className="space-y-1">
                <Label htmlFor="current">Username</Label>
                <Input id="current" type="username" onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Email</Label>
                <Input id="new" type="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input id="new" type="password" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Confirm Password</Label>
                <Input id="new" type="password" onChange={(e) => setConpassword(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter>
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button className="m-auto" onClick={signUp}>{loading === true ? <BeatLoader loading={loading} color="white" /> : <SignInButton text="Sign Up"/>}</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>{message}</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    {message === "Cheers🍾! User created successfully" ? <AlertDialogAction onClick={() => { router.push('/auth'); setMessage(""); setConpassword(""); setUsername(""); setEmail(""); setPassword(""); }}>Continue</AlertDialogAction> : <AlertDialogAction onClick={() => { router.push('/auth'); setMessage("") }}>Try Again</AlertDialogAction>}
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

            </CardFooter>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}

function SignInButton({ text }) {
  return (
    <div className="bg-pink-500 text-center p-1">
      <section className="flex flex-row justify-between">
        <div className="bg-white w-[5px] h-[5px]"></div>
        <div className="bg-white w-[5px] h-[5px]"></div>
      </section>
      <section className="px-5 py-1">{text}</section>
      <section className="flex flex-row justify-between">
        <div className="bg-white w-[5px] h-[5px]"></div>
        <div className="bg-white w-[5px] h-[5px]"></div>
      </section>
    </div>
  )
}




