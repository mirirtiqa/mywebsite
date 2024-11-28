import { Link } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function(){

    return(
        <div className="flex flex-col md:flex-row text-blue mt-20 justify-center p-3">
        <Card className="bg-white bg-opacity-70">
            <CardHeader>
              <CardTitle>Wohoo! let's connect!</CardTitle>
              <CardDescription>I would love to talk with you about tech, art, or just creating stuff in general.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>You can drop me an email at irtiqa842@gmail.com</p>
              <p>Or get in touch with me through 
              <a
                    href="https://www.linkedin.com/in/irtiqa-mir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" ml-1 text-blue-500 hover:text-blue-700"
                    >
                   Linkedin
                    </a>                  
                
            </p>
            <p>Or maybe you wanna have a look at my 
                    <a
                    href="https://github.com/mirirtiqa"
                    target="_blank"
                    rel="noopener noreferrer"
                   className=" ml-1 text-blue-500 hover:text-blue-700"
                    >
                    Github
                    </a>
            </p>
            </CardContent>
            <CardFooter>
              <p>We might end up collaborating, don't hesitate, do reach out!</p>
            </CardFooter>
        </Card>
            
        </div>
    )
}