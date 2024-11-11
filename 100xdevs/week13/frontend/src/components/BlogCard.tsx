interface BlogCardProps {
    authorName : string;
    title : string;
    content : string;
    publishedDate : string;
}
export const BlogCard = ({authorName, title, content, publishedDate} :  BlogCardProps ) => {
    return(
        <main className="container p-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
                <Avatar name={'Leto'} /> <div className="font-extralight text-sm">{authorName}</div> 

                <div className="text-[0.5rem] justify-end"> &#9679; </div> 

                <div className="font-thin text-slate-500 text-sm">
                    {publishedDate} 
                </div>
            </div>
            <div className="text-xl font-semibold">
                {title}
            </div>
            <div className="text-base font-thin">
                {content.slice(0,100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length /100)} minutes read`}
            </div>
            
        </main>
    )
}

function Avatar({name} : {name:string}) {
    return (
        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="text-sm text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>
    )
}