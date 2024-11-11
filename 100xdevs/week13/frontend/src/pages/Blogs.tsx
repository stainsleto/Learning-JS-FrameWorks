import { BlogCard } from "../components/BlogCard"


const Blogs = () => {
    return(
        <main className="flex flex-col gap-5">
            <BlogCard 
                title={'How and ugly single page website makes $500 without affiliate marketing'} 
                authorName={"leto@gmail.com"} 
                content={'content of the blog'} 
                publishedDate={'2nd Feb 2024'} 
            />
        </main>
    )
}

export { Blogs }