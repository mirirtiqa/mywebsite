import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  export default function HomePage(){

    return(
    <div className="flex flex-col justify-center items-start content-start gap-y-3 h-[70vh] w-[100vw] mt-10 p-5 ">
        <div>
            <p className="bg-gray-800 bg-opacity-40 md:text-7xl text-2xl font-semibold text-white shadow-blue-400 drop-shadow-2xl">Hey Heyy Welcome!</p>
        </div>

        <div>
            <p className="bg-gray-800 bg-opacity-40 md:text-6xl text-2xl font-semibold text-white shadow-blue-400 drop-shadow-2xl">I am Irtiqa</p>
        </div>
        

        <div className="flex flex-col justify-center items-start content-start gap-y-1 md:text-2xl text-justify">
            <div>
                <p className="bg-gray-800 bg-opacity-40  font-semibold text-white shadow-blue-400">
                    I love creating - making applications, writing stories, and painting.
                </p>
            </div>
            <div>
                <p className="bg-gray-800 bg-opacity-40  font-semibold text-white shadow-blue-400 text-justify	">
                    Here you can find my projects, my writings, and the amatuery stuff i have painted. (no judging though,ok?)
                </p>
            </div>


        </div>
        
       
    
    </div>

    );
  }
  