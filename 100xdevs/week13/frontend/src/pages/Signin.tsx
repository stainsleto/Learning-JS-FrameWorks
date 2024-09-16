import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"


const Signin = () => {
    return(
        <main className="grid grid-cols-1 lg:grid-cols-2 base-font">

            <section>
                <Auth type={'signin'} />
            </section>

            <section className="hidden lg:block">
                <Quote />
            </section>
        </main>
    )
}

export { Signin}