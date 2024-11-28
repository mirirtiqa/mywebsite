import { Button } from "@/components/ui/button"
import { useBlogContext } from './BlogContext';
 

export default function BlogTitle({data}){
    const { setSelectedBlog } = useBlogContext();

    function handleClick(id){
        setSelectedBlog(id);
    }



    return (
        <Button onClick={() => handleClick(data._id)} variant="link">{data.title}</Button>
    );
}
