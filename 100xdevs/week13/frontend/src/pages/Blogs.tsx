import { BlogCard } from "../components/BlogCard"


const Blogs = () => {
    return(
        <main>
            <BlogCard title={'title of the blog'} authorName={"leto@gmail.com"} content={'content of the blog'} publishedDate={'2nd Feb 2024'} />
        </main>
    )
}

export { Blogs }